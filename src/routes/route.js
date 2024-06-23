import React from "react";
import { Routes, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import Shop from "../pages/shop"; // Import your shop component
import Home from "../pages/home"; // Import your home component
import Blog from "../pages/blog"; // Import your blog component

const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
      </Routes>
    </HashRouter>
  );
};

export default AppRouter;
