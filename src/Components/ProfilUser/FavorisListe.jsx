import React, { useState } from "react";
import "../ProfilUser/profilUser.css"; // Assurez-vous d'inclure les bons styles
import tesst from "../../images/tesssst2.png";


const initialFavorites = [
  { Name: "Favorite 1" },
  { Name: "Favorite 2" },
  { Name: "Favorite 3" },
];

const FavoritesList = () => {
  const [favorites, setFavorites] = useState(initialFavorites);

  const handleDeleteFavorite = (index) => {
    const newFavorites = favorites.filter((_, i) => i !== index);
    setFavorites(newFavorites);
  };

  return (
   <div className="contt">
   <div className="cont11">
    <div className="favorites">
      <h2>Favorites List</h2>
      <ul>
        {favorites.map((favorite, index) => (
          <li key={index}>
            {favorite.Name}
            <button onClick={() => handleDeleteFavorite(index)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
    <img src={tesst} className="tesst"></img>
    </div>
   
    </div>
  );
};

export default FavoritesList;
