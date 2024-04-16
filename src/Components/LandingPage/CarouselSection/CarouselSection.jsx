import React from 'react';
// import { MdOutlineArrowForwardIos, MdOutlineArrowBackIosNew } from 'react-icons/md';

import '../CarouselSection/CarouselSection.css';
import img1 from '../Image/04.png';
import img2 from '../Image/03.png';
import img3 from '../Image/02.png';
import img4 from '../Image/01.png';
import background from '../Image/man-tshirt-looking-laptop-display-with-big-eyes-shocked-with-content-covered-mouth-with-palm 1 (2).png';
import ellipse6 from '../Image/Ellipse 6.png';
import ellipse120 from '../Image/Ellipse 120.png';
import ellipse7 from '../Image/Ellipse 7.png';
import ellipse122 from '../Image/Ellipse 122.png';


const CarouselSection = () => {

return(
  <div>
  
        {/* <button className="search-btn" >
          Search
        </button> */}
       
    
        <div className="background-shapes">
          <img src={background} alt="Background Shapes" />
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
        </div> */}
        
        </div>
    
  
  );
};

export default CarouselSection;
