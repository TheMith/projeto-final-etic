import React from "react";
import "./Hero.css";
import hero_image from "../Assets/hero_image.png";
import hand_icon from "../Assets/hand_icon.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>components</p>
          <p>for everyone</p>
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
