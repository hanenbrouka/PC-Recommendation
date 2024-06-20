import { useState, useEffect } from "react";
import "../Home/Home.css";
import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import SearchMenu from "../SearchMenu/SearchMenu";
import Title from "../Title/Title";
import Carousel from "../CarouselSection/CarouselSection1";


const HomePage = () => {
  const navigate = useNavigate();

  // Define state for price range
  const [priceRange, setPriceRange] = useState([500, 3850]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  
    
  
    // Log selected categories for debugging purposes
    useEffect(() => {
      console.log("Updated selected categories in Home:", selectedCategories);
    }, [selectedCategories]);

  // Log price updates for debugging purposes
  useEffect(() => {
    console.log("Updated price range in Home:", priceRange);
  }, [priceRange]);

  // Function to handle navigation to the search page with the selected price range
  const navigateToSearchPage = () => {
    const [minPrice, maxPrice] = priceRange;
    const filter = {
      min_budget: minPrice,
      max_budget: maxPrice,
      categories: selectedCategories,
      num_pcs: 15 // Example value, 
    };

    navigate(`/search`,{ state: { filter } });
    console.log("Navigating with filter:", minPrice, maxPrice);
  };

  return (
    <section className="landing-page-container">
      <div className="main-landing-page">
        <Title />
        {/* Allow SearchMenu to update the price range */}
        <SearchMenu setValues={setPriceRange} />

        {/* Pass the price range to the CarouselSection for filtering or other purposes */}
        <Carousel minPrice={priceRange[0]} maxPrice={priceRange[1]}  setSelectedCategories={setSelectedCategories} />
        
          <button className="search-btn" onClick={navigateToSearchPage}>
            Search
          </button>
      
      </div>
    </section>
  );
};

export default HomePage;
