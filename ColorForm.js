import React, { useState } from "react";

const ColorForm = ({ addColor }) => {
  // Create state to track the new color input and initialize it with an empty string
  const [newColor, setNewColor] = useState("");

  // Define a function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Check if a valid color is entered (a non-empty color)
    if (newColor.trim() !== "") {
      // Call the 'addColor' function passed as a prop to add the new color
      addColor(newColor);
      setNewColor(""); // Clear the input field after adding the color
    }
  };

  return (
    <div>
      <h2>Add a New Color</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Color:
          {/* Input field for entering a new color */}
          <input
            type="text"
            value={newColor}
            onChange={(e) => setNewColor(e.target.value)}
          />
        </label>
        {/* Button to submit the form */}
        <button type="submit">Add Color</button>
      </form>
    </div>
  );
};

export default ColorForm;
