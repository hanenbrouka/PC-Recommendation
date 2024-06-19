import React from "react";
import "../ProfilUser/profilUser.css"; // Assurez-vous d'inclure les bons styles
import { useFavorites } from "./FavoritesContext"; // Importez le hook de contexte

const FavoritesList = () => {
  const { favorites, addFavorite, removeFavorite } = useFavorites();

  // const handleDeleteFavorite = (index) => {
  //   const newFavorites = favorites.filter((_, i) => i !== index);
  //   setFavorites(newFavorites);
  // };

  return (
    <div className="favorites-container">
      <h2 className="favorites-title">Favorites List</h2>
      <div className="favorites-grid">
        {favorites.map((favorite, index) => (
          <div className="favorite-card" key={index}>
            <img src={favorite.Image} alt={favorite.Name} className="favorite-card-img" />
            <div className="favorite-card-body">
              <h5 className="favorite-card-title">{favorite.Name}</h5>
              <p className="favorite-card-text">{favorite.Description}</p>
              <a href={favorite.Link} className="favorite-card-text">Consulter le vendeur</a>
              <button className="favorite-delete-btn" onClick={() => removeFavorite(favorite._id)}>
                Supprimer
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesList;
