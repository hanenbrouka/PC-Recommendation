import "../Home/Home.css";
import { useNavigate } from "react-router-dom";
import SearchMenu from "../SearchMenu/SearchMenu";
import Title from "../Title/Title";
import Carousel from "../CarouselSection/CarouselSection1";

const HomePage = () => {
  const navigate = useNavigate();

  // Function to handle navigation to the search page with the selected price range
  const navigateToSearchPage = () => {
    navigate(`/search`);
  };

  return (
    <section className="landing-page-container">
      <div className="main-landing-page">
        <Title />
        {/* Allow SearchMenu to update the price range */}
        <SearchMenu />

        {/* Pass the price range to the CarouselSection for filtering or other purposes */}
        <Carousel />

        <button className="search-btn" onClick={navigateToSearchPage}>
          Search
        </button>
      </div>
    </section>
  );
};

export default HomePage;
