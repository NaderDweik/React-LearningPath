import React, { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#000000");

  const ColorFunc = (event) => {
    setColor(event.target.value);
  };

  const isBlack = color === "#000000"; // check if selected color is black

  return (
    <div className="color-picker-container">
      <h1>Pick a color</h1>

      <div className="color-display" style={{ backgroundColor: color }}>
        { isBlack ? (
          <p style={{ color: "white" }} className="GG">
            Selected color: {color}
          </p>
        ) : (
          <p className="GG">Selected color: {color}</p>
        )}
      </div>

      <label className="color-picker">
        Select a color
        <input type="color" value={color} onChange={ColorFunc} />
      </label>
    </div>
  );
}

export default ColorPicker;
