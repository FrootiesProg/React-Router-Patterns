import React from "react";
import { useParams, Link } from "react-router-dom";

const ColorDetail = ({ colors }) => {
  // Get the 'color' parameter from the URL using useParams hook
  const { color } = useParams();

  // Find the selected color from the 'colors' array
  const selectedColor = colors.find(
    (c) => c.name.toLowerCase() === color.toLowerCase()
  );

  // If the selected color is not found, display a message and a link to go back
  if (!selectedColor) {
    return (
      <div>
        <p>Color not found.</p>
        <Link to="/colors">Back to Colors</Link>
      </div>
    );
  }

  // If the selected color is found, display its name and a colored square
  return (
    <div>
      <h2>{selectedColor.name}</h2>
      <div
        style={{
          backgroundColor: selectedColor.value,
          width: "100px",
          height: "100px",
        }}
      ></div>
      <Link to="/colors">Back to Colors</Link>
    </div>
  );
};

export default ColorDetail;
