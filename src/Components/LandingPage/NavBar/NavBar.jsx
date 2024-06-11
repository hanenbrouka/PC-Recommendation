import React, { useState } from "react";
import "../NavBar/NavBar.css";
import { useNavigate } from "react-router-dom";
import useMyProfile from "../../../Data/useMyProfile";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Cookies from 'js-cookie';
import { queryClient } from '../../../../src/index';

const NavBar = () => {
  const navigate = useNavigate();
  const me = useMyProfile();

  const [anchorEl, setAnchorEl] = useState(null);
  const userIsConnected = !!me.data;

  const handleLoginSubmit = () => {
    navigate("/login");
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleProfileClick = () => {
    navigate("/user-profil");
    handleMenuClose();
  };

  const handleFavoritesClick = () => {
    navigate("/favorite-liste");
    handleMenuClose();
  };

  const handleLogoutClick = () => {
    Cookies.remove('token'); // Suppression du cookie de token
    queryClient.setQueryData('me', null); // Réinitialisation des données du profil utilisateur dans le cache de React Query
    navigate("/");
    handleMenuClose();
  };

  const fullname = me.data?.user.firstName + " " + me.data?.user.lastName;

  return (
    <header className="nav">
      <div className="toolbar">
        <h1 onClick={() => navigate("/")}>PC Recommendation</h1>
        {userIsConnected ? (
          <div>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleMenuClick}
              style={{ color: "black", textTransform: "none" }}
              className="btnUser"
            >
              {fullname}
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleProfileClick}>My Profile</MenuItem>
              <MenuItem onClick={handleFavoritesClick}>My Favorite List</MenuItem>
              <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
            </Menu>
          </div>
        ) : (
          <button
            role="submit"
            aria-label="login"
            className="button1"
            onClick={handleLoginSubmit}
          >
            Login
          </button>
        )}
      </div>
    </header>
  );
};

export default NavBar;
