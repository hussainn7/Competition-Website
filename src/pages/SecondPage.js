import React from "react";
import "./SecondPage.css";
const SecondPage = () => {
  return (
    <div className="second-page">
      
  <h1 className="second-page-title">A Culinary Journey of Sahara</h1>
  
  <div className="quote-highlight">
    <p className="second-page-text">
      "Sahara brings the vibrant flavors of the Mediterranean to your plate. 
      Our dishes are crafted with locally sourced, fresh ingredients, blending 
      tradition and innovation to deliver an unforgettable dining experience."
    </p>
  </div>

  <div className="content-container">
    {/* Left Image */}
    <div className="main-image">
      <img src="/4.png" alt="Mediterranean Dish" />
    </div>

    <div className="features">
  {/* Feature 1: Image on the left, text on the right */}
  <div className="feature-item">
    <img className="feature-image-left" src="/3.png" alt="Fresh Ingredients" />
    <div className="feature-text-right">
      <h3>Freshness</h3>
      <p>Our dishes are made with the finest, freshest ingredients for vibrant, delicious meals.</p>
    </div>
  </div>

  {/* Feature 2: Image on the right, text on the left */}
  <div className="feature-item">
    <div className="feature-text-left">
      <h3>Authentic</h3>
      <p>Sahara stays true to Mediterranean traditions with time-honored recipes and flavors.</p>
    </div>
    <img className="feature-image-right" src="/2.png" alt="Authentic Dish" />
  </div>

  {/* Feature 3: Image on the left, text on the right */}
  <div className="feature-item">
    <img className="feature-image-left" src="/1.png" alt="Mediterranean History" />
    <div className="feature-text-right">
      <h3>History</h3>
      <p>Inspired by Mediterranean culture, Sahara reflects the region’s rich culinary heritage.</p>
    </div>
  </div>
    </div>
  </div>
</div>
  );
};

export default SecondPage;
