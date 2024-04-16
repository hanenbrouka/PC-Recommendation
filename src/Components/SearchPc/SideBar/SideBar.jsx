import React, {useState} from "react";
import '../SideBar/SideBar.css';
import { BiSearch } from 'react-icons/bi';
import Filtre from "../Filtrage/Filtre";

function SideBar() {
  

  return (
    <div className="side-container">
      <div className="side-flex-container">
        <div className="newsLetter-container">
          <h6>Join our Newsletter</h6>
          <p>Join our newsletter for updates to the system</p>
          <form action="#">
            <div className="email-wrapper">
              <div className="email-input">
                <div className="icon-container">
                  <BiSearch />
                </div>
                <input
                  type="email"
                  className="write-email"
                  placeholder="type your email"
                />
              </div>
              <button type="submit">Activate</button>
            </div>
          </form>
        </div>
        <div className="categorie-chackbox">
          
        </div>
      
        <Filtre/>
          </div>
        </div>
     
  );
}

export default SideBar;
