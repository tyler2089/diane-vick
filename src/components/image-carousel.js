import React from "react";
import "../styles/image-carousel.css";
import { Fade } from "react-reveal";
const ImageCarousel = () => {
  return (
    <div className="home-container">
      <div className="overlay">
        <Fade right cascade>
          <div className="overlay-text">
            <h1>
              Transforming threads into timeless elegance. Discover quality
              fabrics for your every creation.
            </h1>
            <div className="line"></div>
            <h1>
              Elevate your style with our curated selection of exquisite
              fabrics. Craftsmanship meets creativity.
            </h1>
          </div>
        </Fade>
      </div>
      <video
        autoPlay={true}
        muted
        loop
        playsInline
        className="background-video"
      >
        <source
          src={require("../static/home-video1.mp4")}
          type="video/mp4"
        ></source>
      </video>
    </div>
  );
};

export default ImageCarousel;
