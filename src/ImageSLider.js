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
      <div className="image-slider">
        <img src={slides[currentIndex].src} alt={slides[currentIndex].alt} className="image" />
      </div>
      <div className='slider-button'>

      <button className="prev-btn" onClick={handlePrevClick}>Prev</button>
      <button className="next-btn" onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
}

export default ImageSlider;


// https: //media.istockphoto.com/id/2172315171/photo/full-length-photo-of-cheerful-charming-girl-dressed-striped-clothes-working-modern-gadget.jpg?s=612x612&w=0&k=20&c=lmY1hTLyRjG8TjSqzq1PUkbfC4l9SpKXgBz9OIGkZZQ=
// https: //media.istockphoto.com/id/2160201789/photo/portrait-asian-happy-beautiful-young-woman-teen-shopper-smiling-standing-excited-holding.jpg?s=612x612&w=0&k=20&c=Ccgo4XiziuRSZaBd4aOVinnqSID7ppNCNvidw4AhPkA=
// https: //media.istockphoto.com/id/2156607403/photo/rail-with-earth-tone-sweater-collection-in-designer-clothes-store.jpg?s=612x612&w=0&k=20&c=vTfyGd9inYOQLXy5_xqNKqz-rEnZwitKVqj9xz6CSl0=