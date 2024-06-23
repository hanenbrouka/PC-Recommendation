import React, { useState, useEffect } from "react";
import "../ProfilUser/profilUser.css";
import useMyProfile, { useUpdateProfile } from "../../Data/useMyProfile";
import profileImage from '../../images/tessst.png';

const ProfilUser = () => {
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState("profil");
  const me = useMyProfile();
  const updateProfile = useUpdateProfile();

  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  useEffect(() => {
    if (me.data) {
      // Assurez-vous que me.data.user est défini avant de définir l'utilisateur
      setUser(me.data || null);
    }
  }, [me.data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "currentPassword" || name === "newPassword" || name === "confirmPassword") {
      setPasswords(prevPasswords => ({ ...prevPasswords, [name]: value }));
    } else {
      setUser(prevUser => ({ ...prevUser, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedData = {
      ...user,
      currentPassword: passwords.currentPassword,
      newPassword: passwords.newPassword,
      confirmPassword: passwords.confirmPassword
    };

    updateProfile.mutate(updatedData, {
      onSuccess: (data) => {
        console.log("Profile updated successfully:", data);
      },
      onError: (error) => {
        console.error("Error updating profile:", error);
      }
    });
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
          <img src={profileImage} className="tessst" alt="Profile" />
        </div>
        <div className="card-body">
          {user && activeTab === "profil" && (
            <form onSubmit={handleSubmit} className="informations">
              <h2 className="infor">Edit Profile</h2>
              <div className="col">
                <label className="text">
                  First Name:
                  <br />
                  <input
                    type="text"
                    name="firstName"
                    value={user?.user?.firstName || ""}
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
                    value={user?.user?.lastName || ""}
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
                    value={user?.user?.email || ""}
                    onChange={handleChange}
                    className="input"
                  />
                </label>
                <br />
                <label className="text">
                  Current Password:
                  <br />
                  <input
                    type="password"
                    name="currentPassword"
                    value={passwords.currentPassword}
                    onChange={handleChange}
                    className="input"
                  />
                </label>
                <br />
                <label className="text">
                  New Password:
                  <br />
                  <input
                    type="password"
                    name="newPassword"
                    value={passwords.newPassword}
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
                    value={passwords.confirmPassword}
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
