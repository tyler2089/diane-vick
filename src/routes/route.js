import React from "react";
import { Routes, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import Minky from "../pages/minky"; // Import your shop component
import Home from "../pages/home"; // Import your home component
import Blog from "../pages/blog"; // Import your blog component
import AboutUs from "../pages/aboutus";
import ContactUs from "../pages/contactus";
import Custom from "../pages/custom"; // Import your custom component

const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/minky" element={<Minky />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/aboutus" element={<AboutUs />}></Route>
        <Route path="/custom" element={<Custom />}></Route>
        <Route path='/contact' element={<ContactUs />}></Route>
      </Routes>
    </HashRouter>
  );
};

export default AppRouter;
