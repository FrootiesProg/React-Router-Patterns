import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewColorForm = ({ addColor }) => {
  const [newColor, setNewColor] = useState("");
  const navigate = useNavigate(); 

  const handleColorChange = (e) => {
    setNewColor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the new color to your data (you should have a function for this)
    addColor(newColor);
    // Navigate to the colors index page
    navigate("/colors");
  };

  return (
    <div>
      <h1>Add New Color</h1>
      <form onSubmit={handleSubmit}>
        <label>
          New Color:
          <input type="text" value={newColor} onChange={handleColorChange} />
        </label>
        <button type="submit">Add Color</button>
      </form>
    </div>
  );
};

export default NewColorForm;
