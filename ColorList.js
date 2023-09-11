import React from 'react';
import { Link } from 'react-router-dom';

function ColorList() {
  // Fetch and display the list of available colors
  return (
    <div>
      <h1>Colors</h1>
      {/* Display the list of colors with links to their detail pages */}
      <ul>
        <li>
          <Link to="/colors/red">Red</Link>
        </li>
        {/* Add more colors here */}
      </ul>
    </div>
  );
}

export default ColorList;
