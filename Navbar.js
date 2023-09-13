import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/colors" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/colors/new" className="nav-link">
            Add Color
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
