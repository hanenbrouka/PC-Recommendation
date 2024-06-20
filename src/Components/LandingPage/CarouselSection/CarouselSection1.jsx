// import React, { useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import img1 from "../Image/pro.jpeg";
// import img2 from "../Image/ultra.jpeg";
// import img3 from "../Image/portable.jpeg";
// // import img4 from "../Image/maac.jpeg";
// import img5 from "../Image/gamer.jpeg";
// import "../CarouselSection/CarouselSection.css";
// import { MdOutlineArrowForwardIos } from "react-icons/md";
// import { MdOutlineArrowBackIosNew } from "react-icons/md";
// import background from "../Image/man-tshirt-looking-laptop-display-with-big-eyes-shocked-with-content-covered-mouth-with-palm 1 (2).png";
// import ellipse6 from "../Image/Ellipse 6.png";
// import ellipse7 from "../Image/Ellipse 7.png";

// // CarouselSection component definition
// const CarouselSection = ({ minPrice, maxPrice }) => {
//   // Initial images and descriptions for the carousel
//   let initialCarouselItems = [
//     { image: img5, alt: "computer type", text: "Gaming", id: 1 },
//     { image: img1, alt: "computer type", text: "Laptop Pro", id: 2 },
//     { image: img2, alt: "computer type", text: "Ultrabook", id: 3 },
//     { image: img3, alt: "computer type", text: "Laptop", id: 4 },
//   ];

//   // Hooks for component's state and lifecycle management
//   const navigate = useNavigate();
//   const [carouselItems, setCarouselItems] = useState(initialCarouselItems);
//   const [visibleImagesCount, setVisibleImagesCount] = useState(1);
//   const [currentImages, setCurrentImages] = useState([]);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [selectedImageText, setSelectedImageText] = useState(null);
//   const [clickedImage, setClickedImage] = useState(null);

//   const resizeListener = useRef(null);

//   // Navigate to search page with selected image parameters
//   const navigateToSearch = () => {
//     navigate(
//       `/search?minPrice=${minPrice}&maxPrice=${maxPrice}&text=${selectedImageText}`
//     );
//   };
//   // Handler to manage selection of an image from the carousel
//   const handleImageSelection = (index) => {
//     setClickedImage(index);
//     setSelectedImageText(initialCarouselItems[index].text);
//     console.log(initialCarouselItems[index].text);
//   };

//   // Effect to listen for window resize and update the count of visible images
//   useEffect(() => {
//     resizeListener.current = updateVisibleImagesCount;

//     window.addEventListener("resize", resizeListener.current);
//     updateVisibleImagesCount();
//     return () => window.removeEventListener("resize", resizeListener.current);
//   }, []);

//   // Update the count of images based on the window size
//   const updateVisibleImagesCount = () => {
//     let visibleCount = 1;
//     // Check window width and set visible count
//     if (window.innerWidth >= 1210) {
//       visibleCount = 4;
//     } else if (window.innerWidth >= 902) {
//       visibleCount = 3;
//     } else if (window.innerWidth >= 615) {
//       visibleCount = 2;
//     }
//     setVisibleImagesCount(visibleCount);
//   };
//   // Effect to set the images currently visible in the carousel
//   useEffect(() => {
//     setCurrentImages(carouselItems.slice(0, visibleImagesCount));
//   }, [carouselItems, visibleImagesCount]);

//   // Handlers to navigate through carousel images
//   const prevItem = () => {
//     const lastItem = carouselItems[carouselItems.length - 1];
//     setCarouselItems([lastItem, ...carouselItems.slice(0, -1)]);
//   };

//   const nextItem = () => {
//     const firstItem = carouselItems[0];
//     setCarouselItems([...carouselItems.slice(1), firstItem]);
//   };
//   // Handlers to manage mouse hover effects on carousel images
//   const handleMouseEnter = (index) => {
//     setSelectedImage(index);
//   };

//   const handleMouseLeave = (index) => {
//     if (index !== clickedImage) {
//       setSelectedImage(null);
//     }
//   };

//   return (
//     <>
//       <section className="carousel-section">
//         <h3>Search By Type</h3>
//         <div className="carousel">
//           <div className="carousel-images">
//             <button className="prev-btn" onClick={prevItem}>
//               <MdOutlineArrowBackIosNew />
//             </button>
//             {/* Render the images in the carousel */}
//             {currentImages?.map((item) => {
//               const itemClass = `carousel-item item-${item.id + 1}`;

//               return (
//                 <div key={item.id}>
//                   <img
//                     src={item.image}
//                     alt={item.alt}
//                     onClick={() => handleImageSelection(item.id)}
//                     onMouseEnter={() => handleMouseEnter(item.id)}
//                     onMouseLeave={() => handleMouseLeave(item.id)}
//                     className={
//                       selectedImage === item.id || clickedImage === item.id
//                         ? "blur"
//                         : ""
//                     }
//                   />
//                   <p style={{ color: "white" }}>{item.text}</p>
//                 </div>
//               );
//             })}

//             <button className="next-btn" onClick={nextItem}>
//               <MdOutlineArrowForwardIos />
//             </button>
//           </div>
//         </div>
//         <div>
//           <button className="search-btn" onClick={navigateToSearch}>
//             Search
//           </button>
//         </div>

//         <div className="background-shapes">
//           <img src={background} alt="Background Shapes" />
//         </div>
//       </section>
//       <div className="ellipse6">
//         <img src={ellipse6} alt="#" />
//       </div>
//       <div className="ellipse7">
//         <img src={ellipse7} alt="#" />
//       </div>
//       {/* <div className="ellipse121">
//           <img src={ellipse121} alt='#'/>
//       </div>
//       <div className="ellipse120">
//           <img src={ellipse120} alt='#'/>
//       </div> */}
//     </>
//   );
// };
// export default CarouselSection;


import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../Image/pro.jpeg";
import img2 from "../Image/ultra.jpeg";
import img3 from "../Image/portable.jpeg";
import img5 from "../Image/gamer.jpeg";
import "../CarouselSection/CarouselSection.css";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import background from "../Image/man-tshirt-looking-laptop-display-with-big-eyes-shocked-with-content-covered-mouth-with-palm 1 (2).png";
import ellipse6 from "../Image/Ellipse 6.png";
import ellipse7 from "../Image/Ellipse 7.png";

const CarouselSection = ({ minPrice, maxPrice }) => {
  let initialCarouselItems = [
    { image: img5, alt: "computer type", text: "Gaming", id: 1 },
    { image: img1, alt: "computer type", text: "Laptop Pro", id: 2 },
    { image: img2, alt: "computer type", text: "Ultrabook", id: 3 },
    { image: img3, alt: "computer type", text: "Laptop", id: 4 },
  ];

  const navigate = useNavigate();
  const [carouselItems, setCarouselItems] = useState(initialCarouselItems);
  const [visibleImagesCount, setVisibleImagesCount] = useState(1);
  const [currentImages, setCurrentImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageText, setSelectedImageText] = useState(null);
  const [clickedImage, setClickedImage] = useState(null);

  const resizeListener = useRef(null);

  const navigateToSearch = () => {
    navigate(
      `/search?minPrice=${minPrice}&maxPrice=${maxPrice}&text=${selectedImageText}`
    );
  };

  const handleImageSelection = (index) => {
    setClickedImage(index);
    setSelectedImageText(initialCarouselItems.find(item => item.id === index).text);
    console.log(initialCarouselItems.find(item => item.id === index).text);
  };

  useEffect(() => {
    resizeListener.current = updateVisibleImagesCount;

    window.addEventListener("resize", resizeListener.current);
    updateVisibleImagesCount();
    return () => window.removeEventListener("resize", resizeListener.current);
  }, []);

  const updateVisibleImagesCount = () => {
    let visibleCount = 1;
    if (window.innerWidth >= 1210) {
      visibleCount = 4;
    } else if (window.innerWidth >= 902) {
      visibleCount = 3;
    } else if (window.innerWidth >= 615) {
      visibleCount = 2;
    }
    setVisibleImagesCount(visibleCount);
  };

  useEffect(() => {
    setCurrentImages(carouselItems.slice(0, visibleImagesCount));
  }, [carouselItems, visibleImagesCount]);

  const prevItem = () => {
    const lastItem = carouselItems[carouselItems.length - 1];
    setCarouselItems([lastItem, ...carouselItems.slice(0, -1)]);
  };

  const nextItem = () => {
    const firstItem = carouselItems[0];
    setCarouselItems([...carouselItems.slice(1), firstItem]);
  };

  const handleMouseEnter = (index) => {
    setSelectedImage(index);
  };

  const handleMouseLeave = (index) => {
    if (index !== clickedImage) {
      setSelectedImage(null);
    }
  };

  return (
    <>
      <section className="carousel-section">
        <h3>Search By Type</h3>
        <div className="carousel">
          <div className="carousel-images">
            <button className="prev-btn" onClick={prevItem}>
              <MdOutlineArrowBackIosNew />
            </button>
            {currentImages?.map((item) => {
              const isSelected = selectedImage === item.id || clickedImage === item.id;
              const itemClass = `carousel-item item-${item.id + 1} ${isSelected ? "selected" : ""}`;

              return (
                <div key={item.id}>
                  <img
                    src={item.image}
                    alt={item.alt}
                    onClick={() => handleImageSelection(item.id)}
                    onMouseEnter={() => handleMouseEnter(item.id)}
                    onMouseLeave={() => handleMouseLeave(item.id)}
                    className={
                      selectedImage === item.id || clickedImage === item.id
                        ? "selected"
                        : ""
                    }
                  />
                  <p style={{ color: "white" }}>{item.text}</p>
                </div>
              );
            })}
            <button className="next-btn" onClick={nextItem}>
              <MdOutlineArrowForwardIos />
            </button>
          </div>
        </div>
        

        <div className="background-shapes">
          <img src={background} alt="Background Shapes" />
        </div>
      </section>
      <div className="ellipse6">
        <img src={ellipse6} alt="#" />
      </div>
      <div className="ellipse7">
        <img src={ellipse7} alt="#" />
      </div>
    </>
  );
};
export default CarouselSection;
