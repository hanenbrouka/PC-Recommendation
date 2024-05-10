import React from "react";
import "../SearchPc/SearchPc.css";

import SideBar from "../SearchPc/SideBar/SideBar";
import SearchBar from "./SearchBar/SearchBar";

import PcCard from "./PcCard/PcCard";
import NombrePc from './NombrePc/NombrePc';

function SearchPc() {
  return (
    <div className="search-page-container">
    <NombrePc/>
      <div className="main-search-page">
        <SearchBar />
        <div>
          <SideBar />
        </div>
        <PcCard />
      </div>
    
    </div>
  );
}

export default SearchPc;
