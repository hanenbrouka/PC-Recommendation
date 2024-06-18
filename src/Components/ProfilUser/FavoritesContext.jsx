// FavoritesContext.js

import React, { createContext, useContext, useState } from "react";

// Créer le contexte
const FavoritesContext = createContext();

// Fournisseur de contexte
export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  // Fonction pour ajouter un favori
  const addFavorite = (pc) => {
    setFavorites((prevFavorites) => {
      if (!prevFavorites.some((favorite) => favorite._id === pc._id)) {
        return [...prevFavorites, pc];
      }
      return prevFavorites;
    });
  };

  // Fonction pour supprimer un favori
  const removeFavorite = (pcName) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((favorite) => favorite._id !== pcName)
    );
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

// Hook pour utiliser le contexte des favoris
export const useFavorites = () => useContext(FavoritesContext);
