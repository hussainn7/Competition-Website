import React from 'react';
import "./Farm.css";

const farm = () => {
  return (
    <div className="farm">
      <h1 className="farm-title">Our Farm-to-Table Approach</h1>
      <div className="line1"></div>
      <p className="centered-text">
        We believe great taste begins with great sourcing. Our farm-to-table approach ensures every ingredient is fresh, seasonal, and sustainable.
      </p>

      <div className="dark-brown-box">
        <img src='./anubhav (2).png' className="box-image" />
        <div className="box-content">
          <h2 className="box-title">Partnering with Local Farmers</h2>
          <p className="box-text">
            We work closely with small, family-run farms to source pesticide-free vegetables, grains, and herbs, ensuring ethical and sustainable practices. Our partnerships are built on trust, transparency, and mutual respect, allowing us to support local economies and promote biodiversity.
          </p>
        </div>
      </div>

      <div className="dark-brown-box">
        <img src='/anubhav (1).png' className="box-image" />
        <div className="box-content">
          <h2 className="box-title">Emphasizing Organic and Seasonal Produce</h2>
          <p className="box-text">
            Seasonal, organic ingredients are prioritized to guarantee freshness, optimal taste, and reduced environmental impact. By aligning with nature's cycles, we ensure that our produce is harvested at its peak, retaining maximum nutrients and flavor.
          </p>
        </div>
      </div>

      <div className="dark-brown-box">
        <img src='/anubhav (3).png' className="box-image" />
        <div className="box-content">
          <h2 className="box-title">Ensuring Fresh Delivery of Ingredients</h2>
          <p className="box-text">
            Our streamlined delivery process ensures farm-fresh ingredients arrive promptly, preserving their natural flavor and nutritional value. By maintaining a direct and efficient supply chain, we minimize the time from farm to table, reducing food waste and maintaining peak freshness.
          </p>
        </div>
      </div>

      <div className="dark-brown-box">
        <img src='/anubhav (4).png' className="box-image" />
        <div className="box-content">
          <h2 className="box-title">Transparent Ingredient Sourcing</h2>
          <p className="box-text">
            We provide information about where our ingredients come from, fostering a deeper connection between our customers and their meals. Transparency is at the heart of our mission, and we believe that knowing the origins of your food enhances your dining experience.
          </p>
        </div>
      </div>

      <div className="line2"></div>
    </div>
  );
};

export default farm;