import React from "react";
import "../styles/navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-group">
        <h1 onClick={() => navigate("/shop")}>SHOP</h1>
        <h1 onClick={() => navigate("/blog")}>BLOG</h1>
      </div>
      <div className="navbar-logo">
        <img
          src={require("../static/banner-icon.png")}
          onClick={() => navigate("/")}
        ></img>
      </div>
      <div className="navbar-group">
        <h1 onClick={() => window.open("https://www.facebook.com/p/Lizzys-Biz-Fabric-100038794872267/", "_blank")}>FACEBOOK</h1>
        <h1 onClick={() => window.open("https://www.etsy.com/shop/lizzysbizfabric", "_blank")}>ETSY</h1>
      </div>
    </nav>
  );
};

export default Navbar;
