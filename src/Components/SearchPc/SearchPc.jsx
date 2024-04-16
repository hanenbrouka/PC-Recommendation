import React from "react";
import "../SearchPc/SearchPc.css";
import NavBar from "../LandingPage/NavBar/NavBar";
import Footer from "../LandingPage/Footer/Footer";
import SideBar from "../SearchPc/SideBar/SideBar";
import SearchBar from "./SearchBar/SearchBar";

import PcCard from "./PcCard/PcCard";

function SearchPc() {
  return (
    <div className="search-page-container">
      <div>
        <NavBar />
      </div>
      <div className="main-search-page">
        <SearchBar />
        <div>
          <SideBar />
        </div>
        <PcCard />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default SearchPc;
