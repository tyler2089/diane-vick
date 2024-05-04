import React from "react";
import "../styles/about-us.css";
import { Fade } from "react-reveal";
const AboutUs = () => {
  const mobile = 768;
  const tablet = 1024;

  const AboutUsImage = () => {
    if (window.innerWidth > tablet) {
      return (
        <Fade right cascade>
          <div className="about-us-right">
            <img src={require("../static/aboutus-image1.jpg")}></img>
          </div>
        </Fade>
      );
    }
  };
  return (
    <div className="about-us-container">
      <Fade left cascade>
        <div className="about-us-left">
          <h1>About Us</h1>
          <p>
            Lizzy's Biz was created in 2008 as my love for sewing. My shop was
            named after my mother whom I learned to sew from. I created Lizzy's
            Biz Fabric to offer my customers a larger variety of minky and
            cotton fabrics. All my fabrics are of the best quality and as a
            customer, you can email me if you have problems or looking for
            something specific.
          </p>
        </div>
      </Fade>
      <AboutUsImage />
    </div>
  );
};

export default AboutUs;
