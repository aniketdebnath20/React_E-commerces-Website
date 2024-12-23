import React, { useState } from 'react';
import { TiTick } from 'react-icons/ti';

const Cart = ({ product }) => {
  const { colors } = product;
  const [color, setColor] = useState(colors[0]);

  // Handle color change on button click
  const handleColorChange = (newColor) => {
    setColor(newColor);
  };

  return (
    <>
      {colors.map((curColor, index) => (
        <button
          key={index}
          style={{ backgroundColor: curColor }}
          className={color === curColor ? "btn selected" : "btn"} // Apply 'selected' class to the active color
          onClick={() => handleColorChange(curColor)} // Change color on click
        >
          {color === curColor ? <TiTick /> : null} {/* Show tick for selected color */}
        </button>
      ))}
    </>
  );
};

export default Cart;
