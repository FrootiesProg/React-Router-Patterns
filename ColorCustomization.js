import React, { useState } from "react";
import { Link } from "react-router-dom";

const ColorCustomization = ({ addColor }) => {
  const [newColorName, setNewColorName] = useState("");
  const [newColorValue, setNewColorValue] = useState("#000000"); // Default color value is black

  const handleAddColor = () => {
    // Check if a valid color name and value are entered
    if (newColorName.trim() !== "" && newColorValue.trim() !== "") {
      const newColor = {
        name: newColorName,
        value: newColorValue,
      };
      addColor(newColor);
      setNewColorName(""); // Clear the input field for color name
      setNewColorValue("#000000"); // Reset the color picker
    }
  };

  return (
    <div>
      <h2>Customize Your Color</h2>
      <label>
        Color Name:
        <input
          type="text"
          value={newColorName}
          onChange={(e) => setNewColorName(e.target.value)}
          required
        />
      </label>
      <label>
        Color Value:
        <input
          type="color"
          value={newColorValue}
          onChange={(e) => setNewColorValue(e.target.value)}
          required
        />
      </label>
      <button onClick={handleAddColor}>Add Color</button>
      <Link to="/colors">Back to Colors</Link>
    </div>
  );
};

export default ColorCustomization;
