import React from "react";
import { Link } from "react-router-dom";
import './style.css';

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/news">News</Link>
      <Link to="/profile">Profile</Link>
    </div>
  )
}

export default Navbar;