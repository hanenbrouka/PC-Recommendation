import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from '../Image/04.png';
import img2 from '../Image/03.png';
import img3 from '../Image/02.png';
import img4 from '../Image/01.png';
import '../CarouselSection/CarouselSection.css';
import ellipse6 from '../Image/Ellipse 6.png';
import ellipse120 from '../Image/Ellipse 120.png';
import ellipse7 from '../Image/Ellipse 7.png';
import ellipse122 from '../Image/Ellipse 122.png';


import background from '../Image/man-tshirt-looking-laptop-display-with-big-eyes-shocked-with-content-covered-mouth-with-palm 1 (2).png'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Carousel = ({ minPrice, maxPrice }) => {
    // Hooks for component's state and lifecycle management
  const navigate = useNavigate()
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImageText, setSelectedImageText] = useState(null)
  const [selectedImage, setSelectedImage] = useState(null)
  const [clickedImage, setClickedImage] = useState(null)
   // Initial images and descriptions for the carousel
  const pcImages = [
    { src: img1, type: 'Gaming' },
    { src: img2, type: 'Laptop Pro' },
    { src: img3, type: 'Laptop' },
    { src: img4, type: 'Gaming' },
  ];
  // Navigate to search page with selected image 
  const navigateToSearch = () => {
    navigate(
      `/search?minPrice=${minPrice}&maxPrice=${maxPrice}&text=${selectedImageText}`
    )
  }
  const handleImageSelection = (index) => {
    setClickedImage(index)
    setSelectedImageText(pcImages[index].text)
    console.log(pcImages[index].text)
  }

  const goToPrevSlide = () => {
    const index = (currentIndex - 1 + pcImages.length) % pcImages.length;
    setCurrentIndex(index);
  };

  const goToNextSlide = () => {
    const index = (currentIndex + 1) % pcImages.length;
    setCurrentIndex(index);
  };
   // Handlers to manage mouse hover effects on carousel images
   const handleMouseEnter = (index) => {
    setSelectedImage(index)
  }

  const handleMouseLeave = (index) => {
    if (index !== clickedImage) {
      setSelectedImage(null)
    }
  }

  return (
    <div>
    <div className="carousel-container">
      <div>
        <h3 className='type'>Search By Type</h3>
      </div>
      <button className="carousel-button" onClick={goToPrevSlide}>
        <FaChevronLeft />
      </button>
      <div className="carousel-slide">
        {pcImages.map((image, index) => (
          index === currentIndex && (
            <div  key={index}>
              <img 
              src={image.src} 
              alt={image.type} 
              onClick={() => handleImageSelection(index)} 
              onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index)}
               />
              <p className='type'>Type: {image.type}</p>
            </div>
          )
        ))}
      </div>
      <button className="carousel-button" onClick={goToNextSlide}>
        <FaChevronRight />
      </button>
       <button className="search-btn" onClick={navigateToSearch} >
          Search
        </button>
    </div>
    <div>
    <div className="background-shapes">
          <img src={background} alt="Background Shapes" />
        </div>
    </div>
    
{/*     
        <div className="*">
        <img src={ellipse7} className='ellipse7'/>
        </div>
        <div className="*"> 
        <img src={ellipse6} className='ellipse6'/>
        </div>
        <div className="*">
        <img src={ellipse120} className='ellipse120'/>
        </div>
        <div className="ellipse122">
        <img src={ellipse122} className='ellipse122'/>
        </div>  */}
    </div>
  );
};

export default Carousel;
