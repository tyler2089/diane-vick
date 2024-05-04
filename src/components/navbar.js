import React from "react";
import "../styles/navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-group">
        <h1>SHOP</h1>
        <h1>BLOG</h1>
      </div>
      <div className="navbar-logo">
        <img src={require("../static/banner-icon.png")}></img>
      </div>
      <div className="navbar-group">
        <h1>FACEBOOK</h1>
        <h1>ETSY</h1>
      </div>
    </nav>
  );
};

export default Navbar;
