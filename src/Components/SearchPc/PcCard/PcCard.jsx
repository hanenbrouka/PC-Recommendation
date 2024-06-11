import React, { useState } from "react";
import "../PcCard/PcCard.css";
import { GrFavorite } from "react-icons/gr";
// import { useDispatch } from "react-redux";
// import { addFavorite } from "../../../Redux/slices/favorite.slice";
import pcData from "../../../pcData.json"; // Importez les données depuis le fichier JSON

function PcCard() {
  const [favorites, setFavorites] = useState([]);

  const handleToggleFavorite = (pc) => {
    const isFavorite = favorites.some((favorite) => favorite.Name === pc.Name);
    if (!isFavorite) {
      setFavorites([...favorites, pc]);
    } else {
      const updatedFavorites = favorites.filter((favorite) => favorite.Name !== pc.Name);
      setFavorites(updatedFavorites);
    }
  };

  const splitIntoColumns = (data, numColumns) => {
    const columns = Array.from({ length: numColumns }, () => []);
    data.forEach((item, index) => {
      columns[index % numColumns].push(item);
    });
    return columns;
  };

  // Utilisez les données importées
  const additionalLaptops = pcData;
  const columns = splitIntoColumns(additionalLaptops, 3);

  return (
    <div className="container-card">
      <div className="box">
        <div className="container container1">
          <div className="row">
            {columns.map((column, columnIndex) => (
              <div className="col-4 col-lg-2 aaa" key={columnIndex}>
                {column.map((card, index) => (
                  <div className="card" key={index}>
                    <img src={card.Image} className="card-img-top" alt={card.Name} />
                    <div className="card-body">
                      <p className="card-title">{card.Name}</p>
                      <p className="card-text">{card.Description}</p>
                      <div className="card-type">
                        {Array.isArray(card.category) ? (
                          card.category.map((category, index) => (
                            <p key={index}>{category}</p>
                          ))
                        ) : (
                          <p>{card.category}</p>
                        )}
                      </div>
                      <h>{card.availability}</h>
                      <div>
                      <button className="card-btn" onClick={() => (window.location.href = card.Link)}>Check it out</button>
                      <button className="favorite-btn" onClick={() => handleToggleFavorite(card)}>
                        <GrFavorite color={favorites.some((favorite) => favorite.Name === card.Name) ? "red" : "black"} />
                      </button>
                    </div>

                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PcCard;
