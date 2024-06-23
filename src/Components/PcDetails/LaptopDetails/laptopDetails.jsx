// Libraries
import React from "react";
import "../LaptopDetails/laptopDetails.css";

// Components

import SideBar from "../../SearchPc/SideBar/SideBar";
import SearchBar from "../../SearchPc/SearchBar/SearchBar";
import PC from "../PC/PC";
import PcDetails from "../PcDetails";

// Styles
import "../LaptopDetails/laptopDetails.css";

const LaptopDetail = () => {
  return (
    <main className="landing-page-container">
      <div className="main-search">
        <SearchBar />

        <div className="details-container">
         <SideBar/>

          <div className="flex-details-1">
            <PcDetails />
          </div>
          <div className="flex-details-2">
            <PC />
            <button className="flex-details-2-btn"> SEE MORE</button>
          </div>
        </div>
      </div>
    </main>
  );
};
export default LaptopDetail;
