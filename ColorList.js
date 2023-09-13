import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ColorList = ({ colors }) => {
  // Use the 'useNavigate' hook from 'react-router-dom' to get the navigation function
  const navigate = useNavigate();

  return (
    <div>
      <h2>Colors</h2>
      <ul>
        {colors.map((color, index) => (
          <li key={index}>
            {/* Create a Link to navigate to the ColorDetail page with the color's name */}
            <Link
              to={`/colors/${color.name.toLowerCase()}`}
              style={{ textDecoration: "none" }}
            >
              {/* Display color information */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {/* Display a colored square */}
                <div
                  style={{
                    backgroundColor: color.value,
                    width: "30px",
                    height: "30px",
                    marginRight: "10px",
                  }}
                ></div>
                {color.name} - {color.value}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ColorList;
