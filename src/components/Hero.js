import React, { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import SecondPage from "../pages/SecondPage";
import MenuHighlights from "../pages/MenuHighlights";
import Testimonials from "../pages/Testimonials/Testimonials";
import "./Hero.css";

const Hero = () => {
  const [showText, setShowText] = useState(false);

  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section">

        <div className="content">
          <img className="greek-circle" src="greek-round.png" alt="circle" />
          <div className="hero-text">
            <h1>
              <span className="span-hero">Rooted in </span>
              <span className="highlight">Tradition</span>
              <span className="span-hero"> Flourishing in </span>
              <span className="highlight">Flavor</span>
            </h1>
            <p>
              Savor the vibrant flavors of the Mediterranean with our plant-based
              dishes, thoughtfully prepared using fresh, locally sourced, and seasonal
              ingredients.
            </p>
          </div>
          <div className="buttons">
            <button className="button-secondary">
              <a href="/reservation">Dine-In</a>
            </button>
            <button className="button-secondary">
              <a href="/menu">Carry Out</a>
            </button>
          </div>
        </div>

        <div className="floating-images">
          <img className="falafel-one" src="/falafel.png" alt="Falafel" />
          <img className="falafel-two" src="/falafel.png" alt="Falafel" />
          <img className="falafel-three" src="/falafel.png" alt="Falafel" />
          <img className="falafel-four" src="/falafel.png" alt="Falafel" />
        </div>
      </div>

      {/* Second Page Section */}
      <SecondPage />
      <MenuHighlights />
      <Testimonials />
    </div>
  );
};

export default Hero;