import React, { useState, useEffect } from "react";
import "../styles/navbar.css";
import "../styles/mobile-navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const mobile = /iphone|ipad|ipod|android/i.test(userAgent);
    setIsMobile(mobile);
  }, []);

  
  if (!isMobile){
    return (
    <nav className="navbar">
      <div className="navbar-group">
        <h1 onClick={() => navigate("/")}>HOME</h1>
        <h1 onClick={() => navigate("/minky")}>MINKY</h1>
        <h1 onClick={() => navigate("/custom")}>CUSTOM</h1>
        <h1 onClick={() => navigate("/aboutus")}>ABOUT US</h1>
        <h1 onClick={() => navigate("/blog")}>BLOG</h1>
        <h1 onClick={() => navigate("/contact")}>CONTACT US</h1>
      </div>
    </nav>
  );
} else {
  return (
  <div className="mobile-navbar">
    <div id="menuToggle">
    <input type="checkbox" />
    
    <span></span>
    <span></span>
    <span></span>
    

    <ul id="menu">
      <li onClick={() => navigate("/")}>HOME</li>
      <li onClick={() => navigate("/minky")}>MINKY</li>
      <li onClick={() => navigate("/custom")}>CUSTOM</li>
      <li onClick={() => navigate("/aboutus")}>ABOUT US</li>
      <li onClick={() => navigate("/blog")}>BLOG</li>
      <li onClick={() => navigate("/contact")}>CONTACT US</li>
    </ul>
  </div>
  </div>
  );
}
};

export default Navbar;