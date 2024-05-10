import React from "react";
import "../NavBar/NavBar.css";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const handleLoginSubmit = () => {
    navigate("/login");
  };

  return (
    <header className="nav">
      <div className="toolbar">
        <h1 onClick={() => navigate("/")}>PC Recommendation</h1>
        {/* <button role="submit" aria-label="Report a technical problem">
          Report a problem
        </button> */}
        <button
          role="submit"
          aria-label="login"
          className="button1"
          onClick={handleLoginSubmit}
        >
          Login
        </button>
      </div>
    </header>
  );
};

export default NavBar;
