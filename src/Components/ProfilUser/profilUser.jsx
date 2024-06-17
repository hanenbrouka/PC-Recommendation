import React, { useState, useEffect } from "react";
import "../ProfilUser/profilUser.css";
import useMyProfile from "../../Data/useMyProfile";
import profileImage from '../../images/tessst.png'; // Importez votre image ici

const ProfilUser = () => {
  const [user, setUser] = useState(null); // Utilisation de useState pour gérer l'état de l'utilisateur
  const [activeTab, setActiveTab] = useState("profil");
  const me = useMyProfile();

  useEffect(() => {
    if (me.data) {
      setUser(me.data.user); // Mise à jour de l'état de l'utilisateur lorsque les données sont disponibles
    }
  }, [me.data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Changes sent:", user);
    // Ici, vous pouvez envoyer les modifications à votre backend si nécessaire
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
                My Profile
              </a>
            </li>
          </ul>
        </div>
        <div>
          <img src={profileImage} className="tessst" alt="Profile" /> {/* Ajoutez l'image ici */}
        </div>
        <div className="card-body">
          {user && activeTab === "profil" && ( // Vérification que user est défini avant d'afficher le formulaire
            <form onSubmit={handleSubmit} className="informations">
              <h2 className="infor">Edit Profile</h2>
              <div className="col">
                <label className="text">
                  First Name:
                  <br />
                  <input
                    type="text"
                    name="firstName"
                    value={user.firstName}
                    onChange={handleChange}
                    className="input"
                  />
                </label>
                <br />
                <label className="text">
                  Last Name:
                  <br />
                  <input
                    type="text"
                    name="lastName"
                    value={user.lastName}
                    onChange={handleChange}
                    className="input"
                  />
                </label>
                <br />
                <label className="text">
                  Email:
                  <br />
                  <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    className="input"
                  />
                </label>
                <br />
                <label className="text">
                  Password:
                  <br />
                  <input
                    type="password"
                    name="password"
                    // value={user.password} 
                    onChange={handleChange}
                    className="input"
                  />
                </label>
                <br />
                <label className="text">
                  Confirm Password:
                  <br />
                  <input
                    type="password"
                    name="confirmPassword"
                    // value={user.confirmPassword}
                    onChange={handleChange}
                    className="input"
                  />
                </label>
                <br />
              </div>
              <button type="submit" className="bttn1">
                Save Changes
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilUser;
