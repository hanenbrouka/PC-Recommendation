import React from "react";
import "../SearchBar/SearchBar.css";
import { BiSearch } from "react-icons/bi";
import { RiMoneyDollarBoxLine } from "react-icons/ri";

function SearchBar() {
  return (
    <div className="searchBar">
      <form action="#">
        <div className="search-wrapper">
          <div className="input-wrapper2">
            <div className="icon-wrapper1">
              <BiSearch />
            </div>
            <input
              className="first-search"
              type="text"
              placeholder="Categories"
            />
          </div>
          <div className="input-wrapper2">
            <div className="icon-wrapper2">
              <RiMoneyDollarBoxLine />
            </div>
            <input
              type="text"
              className="second-search"
              placeholder="500 - 3850DT"
            />
          </div>
          <button type="submit">Search</button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
