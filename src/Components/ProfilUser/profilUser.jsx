import React, { useState, useEffect } from "react";
import "../ProfilUser/profilUser.css";

const initialUser = {
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  password: "password123",
};

const ProfilUser = () => {
  const [user, setUser] = useState(initialUser);
  const [favorites, setFavorites] = useState([]);
  const [activeTab, setActiveTab] = useState("profil");
  useEffect(() => {
    // Ici, vous pouvez charger les informations de l'utilisateur depuis une API ou un service
    // Simulons une requête de chargement avec setTimeout pour cet exemple
    setTimeout(() => {
      // Chargez les données de l'utilisateur depuis une API ici
      // Par exemple, setUser(response.data)
      console.log("User data loaded");
    }, 1000); // Délai simulé de 1 seconde
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Envoyer les modifications de l'utilisateur à l'API ou au service approprié
    console.log("Changes sent :", user);
    // Afficher un message de succès ou gérer les erreurs de l'API ici
  };
  const handleAddFavorite = () => {
    // Ajouter l'élément favori à la liste de souhaits
    setFavorites([...favorites, "Nouveau favori"]);
  };

  return (
    <div className="contt">
      <div className="card text-center cont1">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <a
                className={`nav-link ${activeTab === "profil" ? "active" : ""}`}
                href="#"
                onClick={() => setActiveTab("profil")}
              >
                Profil
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeTab === "favoris" ? "active" : ""}`}
                href="#"
                onClick={() => setActiveTab("favoris")}
              >
               Favorites List ({favorites.length})
              </a>
            </li>
          </ul>
        </div>
        <div className="card-body">
          {activeTab === "profil" && (
        <form onSubmit={handleSubmit} className="informations">
          <label className="text">
            First Name:
            <input
              type="text"
              name="firstName"
              value={user.firstName}
              onChange={handleChange}
              className="input"
            />
          </label>
          <label className="text">
            Last Name:
            <input
              type="text"
              name="lastName"
              value={user.lastName}
              onChange={handleChange}
              className="input"
            />
          </label>
          <label className="text">
            Email:
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="input"
            />
          </label>
          <label className="text">
            Password:
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              className="input"
            />
          </label>
          <button type="submit" className="bttn1">
            Save Changes
          </button>
        </form>
      )}
          {activeTab === "favoris" && (
            <div className="favorites">
              <h2>Favorites List</h2>
              <ul>
                {favorites.map((favorite, index) => (
                  <li key={index}>{favorite}</li>
                ))}
              </ul>
              <button onClick={handleAddFavorite} className="btn bttn1">Add Favorite</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilUser;
