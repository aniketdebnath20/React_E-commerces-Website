import React, { useState } from 'react';
import data from './Image-Api/Image.json';  // Importing as the default export

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { slides } = data; // Extract slides from the imported data

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="image-slider-container">
      <button className="prev-btn" onClick={handlePrevClick}>Prev</button>
      <div className="image-slider">
        <img src={slides[currentIndex].src} alt={slides[currentIndex].alt} className="image-1" />
      </div>
      <button className="next-btn" onClick={handleNextClick}>Next</button>
    </div>
  );
}

export default ImageSlider;
