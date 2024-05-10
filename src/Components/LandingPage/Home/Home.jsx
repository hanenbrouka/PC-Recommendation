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

  // Log price updates for debugging purposes
  useEffect(() => {
    console.log("Updated price range in Home:", priceRange);
  }, [priceRange]);

  // Function to handle navigation to the search page with the selected price range
  const navigateToSearchPage = () => {
    const [minPrice, maxPrice] = priceRange;
    navigate(`/search?minPrice=${minPrice}&maxPrice=${maxPrice}`);
    console.log("Navigating with price range:", minPrice, maxPrice);
  };

  return (
    <section className="landing-page-container">
      <div className="main-landing-page">
        <Title />
        {/* Allow SearchMenu to update the price range */}
        <SearchMenu setValues={setPriceRange} />

        {/* Pass the price range to the CarouselSection for filtering or other purposes */}
        <Carousel minPrice={priceRange[0]} maxPrice={priceRange[1]} />
      </div>
    </section>
  );
};

export default HomePage;
