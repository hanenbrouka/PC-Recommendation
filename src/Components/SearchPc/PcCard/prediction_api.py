from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List
from pymongo import MongoClient
import pandas as pd
import numpy as np
import pickle
import json

app = FastAPI()

connection_string = 'mongodb://localhost:27017/'
filename = r"src\Components\SearchPc\PcCard\weights_best_performance.sav"

client = MongoClient(connection_string)
db = client.Laptops_scored_base

class LaptopPredictor:
    def __init__(self, model_file: str, degrees: List[int]):
        self.degrees = degrees
        self.w, self.b = pickle.load(open(model_file, "rb"))
    
    def X_transform(self, X):
        cop = X.copy()
        for i in self.degrees:
            X = np.append(X, cop**i, axis=1)
        return X

    def predict(self, x_test):
        X = self.X_transform(x_test)
        return np.dot(X, self.w) + self.b

predictor = LaptopPredictor(filename, degrees=[2, 3])

class BudgetRequest(BaseModel):
    min_budget: float
    max_budget: float
    categories: List[str]
    num_pcs: int = 15

@app.post("/predict", tags=["Prediction"])
async def get_top_laptops(request: BudgetRequest):
    """
    Get the top laptops within the specified budget range and categories.

    **Parameters:**
    - `min_budget`: Minimum budget.
    - `max_budget`: Maximum budget.
    - `categories`: List of categories to search in. ["Laptops", "Laptops Pro", "Ultrabook", "Gaming"]
    - `num_pcs`: Number of laptops to return (default is 15).

    **Returns:**
    - JSON list of top laptops with details such as Name, Reference, Price, Link, Description, and Image.
    """
    min_budget = min(request.min_budget, request.max_budget)
    max_budget = max(request.min_budget, request.max_budget)
    categories = request.categories
    num_pcs = request.num_pcs

    # Query PCs within budget range
    PCs_within_budget = [list(db[cat].find({"Price": {"$gte": min_budget, "$lte": max_budget}})) for cat in categories]
    PCs_within_budget = [item for sublist in PCs_within_budget for item in sublist]

    if not PCs_within_budget:
        raise HTTPException(status_code=404, detail="No PCs found within the specified budget range.")
    
    features = pd.DataFrame.from_dict(PCs_within_budget)
    
    if not all(col in features.columns for col in ['Score CPU', 'Score RAM', 'Score Carte graphique', 'Score Storage']):
        raise HTTPException(status_code=400, detail="Required features are missing in the database.")
    
    # Make predictions and sort them
    features["Ranks"] = predictor.predict(features[['Score CPU', 'Score RAM', 'Score Carte graphique', 'Score Storage']])
    features = features.sort_values('Ranks', ascending=False, ignore_index=True)

    # Select top num_pcs laptops
    top_laptops = features.head(num_pcs)
    
    # Sanitize data to ensure valid UTF-8 encoding
    top_laptops = top_laptops.map(lambda x: str(x).encode('utf-8', 'ignore').decode('utf-8') if isinstance(x, str) else x)
    print(top_laptops.columns)
    if 'Product image' in top_laptops : 
        top_laptops['Image'] = top_laptops['Image'].fillna(top_laptops['Product image'])
    
    if "Systéme d'exploitation" not in top_laptops :
        top_laptops[ "Systéme d'exploitation"] = top_laptops['Operating System']
    #top_laptops['Operating System'] = top_laptops['Operating System'].fillna(top_laptops['Systéme d\'exploitation'])
    # [['Name', 'Marque', 'Price',  'Link', 'Description', 'Image', 'Systéme d\'exploitation', 'Operating System', 'CPU Type', 'CPU', 'CPU Ref', 'RAM', 'Storage','GPU', 'GPU Ref','GPU Type',  'Seller', 'Availability', 'category', 'WiFi', 'Bluetooth', 'Type Stockage', 'Batterie', 'Garantie',]]
    top_laptops_json = top_laptops[['Name', 'Reference', 'Link', 'Description', 'Image', 'Price', 'Availability', 'category', 'seller', 'Type', 'Points Forts', 'color', "Systéme d'exploitation", 'CPU Type', 'CPU', 'GPU Type', 'GPU', 'RAM', 'Storage', 'Taille écran', 'Ecran tactile', 'Resolution', 'Taux De Rafraîchissement', 'Poids', 'Garantie', 'CPU Ref']].reset_index().to_json(orient="records")
    
    return json.loads(top_laptops_json)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
