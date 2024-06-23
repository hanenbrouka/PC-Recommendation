import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../SearchBar/SearchBar.css";
import { BiSearch } from "react-icons/bi";
import { RiMoneyDollarBoxLine } from "react-icons/ri";

function SearchBar() {
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const [minPrice, maxPrice] = priceRange
      .split(" - ")
      .map((price) => price.replace("DT", "").trim());

    navigate(
      `/search?minPrice=${minPrice}&maxPrice=${maxPrice}&category=${category}`
    );
  };

  return (
    <div className="searchBar">
      <form onSubmit={handleSubmit}>
        <div className="search-wrapper">
          <div className="input-wrapper2">
            <div className="icon-wrapper1">
              {/* <BiSearch /> */}
            </div>
            {/* <input
              className="first-search"
              type="text"
              placeholder="Price"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            /> */}
          </div>
{/* 
          <button type="submit">Search</button> */}
        </div>
      </form>
    </div>
  );
}

export default SearchBar;

// import React from "react";
// import "../SearchBar/SearchBar.css";
// import { BiSearch } from "react-icons/bi";
// import { RiMoneyDollarBoxLine } from "react-icons/ri";

// function SearchBar() {
//   return (
//     <div className="searchBar">
//       <form action="#">
//         <div className="search-wrapper">
//           <div className="input-wrapper2">
//             <div className="icon-wrapper1">
//               <BiSearch />
//             </div>
//             <input
//               className="first-search"
//               type="text"
//               placeholder="Categories"
//             />
//           </div>
//           <div className="input-wrapper2">
//             <div className="icon-wrapper2">
//               <RiMoneyDollarBoxLine />
//             </div>
//             <input
//               type="text"
//               className="second-search"
//               placeholder="500 - 3850DT"
//             />
//           </div>
//           <button type="submit">Search</button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default SearchBar;
