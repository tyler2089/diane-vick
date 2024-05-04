import React from "react";
import Navbar from "../components/navbar";
import ImageCarousel from "../components/image-carousel";
import AboutUs from "../components/about-us";
function Home() {
  return (
    <div>
      <Navbar />
      <ImageCarousel />
      <AboutUs />
    </div>
  );
}

export default Home;
