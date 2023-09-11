import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ColorForm() {
  const [newColor, setNewColor] = useState("");
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., add the new color)
    // After submission, redirect to the colors index
    history.push("/colors");
  };

  return (
    <div>
      <h1>Add New Color</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Color Name:
          <input
            type="text"
            value={newColor}
            onChange={(e) => setNewColor(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ColorForm;
