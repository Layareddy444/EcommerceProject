// import React from "react";
// import "./HeroSection.css";

// const HeroSection = ({ categories }) => {
//   return (
//     <div className="hero-container">
//       {categories.map((category) => (
//         <div className="hero-item" key={category.id}>
//           <img src={category.image} alt={category.cat_name} />
//           <h2>{category.cat_name}</h2>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default HeroSection;


import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HeroSection.css";

const HeroSection = ({ categories }) => {
  const sliderRef = useRef(null);

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className="hero-slider">
      <Slider ref={sliderRef} >
        {categories.map((category, index) => (
          <div className="hero-item" key={index}>
            <h2>{category.cat_name}</h2>
            <img src={category.image} alt={category.cat_name} onClick={nextSlide} />
            
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSection;
