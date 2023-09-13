import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ColorList from "./ColorList";
import ColorDetail from "./ColorDetail";
import ColorCustomization from "./ColorCustomization";
import Navbar from "./Navbar";
import "./App.css";

const App = () => {
  // Define default colors
  const defaultColors = [
    { name: "Red", value: "#FF0000" },
    { name: "Blue", value: "#0000FF" },
    { name: "Green", value: "#00FF00" },
  ];

  // Initialize state to hold colors
  const [colors, setColors] = useState(defaultColors);

  // Function to add a new color to the state
  const addColor = (newColor) => {
    setColors([...colors, newColor]);
  };

  return (
    <Router>
      <div>
        {/* Include the Navbar component */}
        <Navbar />

        <Routes>
          {/* Route to display the list of colors */}
          <Route path="/colors" element={<ColorList colors={colors} />} />

          {/* Route to display color details */}
          <Route
            path="/colors/:color"
            element={<ColorDetail colors={colors} />}
          />

          {/* Route to customize a new color */}
          <Route
            path="/colors/new"
            element={<ColorCustomization addColor={addColor} />}
          />

          {/* Catch-all route for invalid color pages */}
          <Route path="/colors/*" element={<Navigate to="/colors" />} />

          {/* Catch-all route for invalid URLs */}
          <Route path="*" element={<Navigate to="/colors" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
