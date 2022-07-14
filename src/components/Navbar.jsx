import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/" className="navlink">Input </Link>
      <Link to="/display" className="navlink">Display</Link>
    </div>
  );
}

export default Navbar;
