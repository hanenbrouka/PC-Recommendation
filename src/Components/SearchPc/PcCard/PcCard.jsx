import React from "react";
import "../PcCard/PcCard.css";
import { GrFavorite } from "react-icons/gr";
import pcData from "../../../pcData.json"; // Importer les données depuis le fichier JSON
import { useFavorites } from "../../ProfilUser/FavoritesContext";
import { Link } from "react-router-dom";

function PcCard() {
  const { favorites, addFavorite, removeFavorite } = useFavorites();

  const handleToggleFavorite = (pc) => {
    const isFavorite = favorites.some((favorite) => favorite._id === pc._id);
    if (!isFavorite) {
      addFavorite(pc); // Ajouter aux favoris
    } else {
      removeFavorite(pc.Name); // Supprimer des favoris
    }
  };

  const splitIntoColumns = (data, numColumns) => {
    const columns = Array.from({ length: numColumns }, () => []);
    data.forEach((item, index) => {
      columns[index % numColumns].push(item);
    });
    return columns;
  };

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
                        <Link to={"/pc-detail"} className="card-btn">
                        Check it out
                        </Link>
                        {/* <button className="card-btn" onClick={() => (window.location.href = card.Link)}>Check it out</button> */}
                        <button className="favorite-btn" onClick={() => handleToggleFavorite(card)}>
                          <GrFavorite color={favorites.some((favorite) => favorite._id === card._id) ? "red" : "black"} />
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
