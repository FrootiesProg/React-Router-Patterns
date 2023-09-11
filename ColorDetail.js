import React from "react";
import { useParams, Outlet, useNavigate } from "react-router-dom";

// Define a list of valid colors or fetch it from your data source
const validColors = ["red", "blue", "green", "yellow"]; // Add more valid colors as needed

function colorIsInvalid(color) {
  // Check if the provided color is in the list of valid colors
  return !validColors.includes(color.toLowerCase());
}

function ColorDetail() {
  // Get the color parameter from the URL
  const { color } = useParams();
  const navigate = useNavigate();

  // Handle the case where the color doesn't exist
  if (colorIsInvalid(color)) {
    navigate("/colors");
  }

  return (
    <div>
      <h1>{color} Color</h1>
      {/* Display the color details here */}
      <Outlet />
    </div>
  );
}

export default ColorDetail;
