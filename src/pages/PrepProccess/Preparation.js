import React from 'react';
import './Preparation.css';

const Preparation = () => {
  return (
    <div className="prep-process">
      <h1 className="farm-title">Preparation Processess</h1>
      <div className="line1"></div>
      <p className="centered-textt">
      Authenticity is at the heart of every dish we prepare. We take care at every step to stay true to Mediterranean traditions while ensuring exceptional taste.
      </p>

      <div className="dark-brown-boxx">
        <img src='./farm1.png' className="box-imagee" />
        <div className="box-contentt">
          <h2 className="box-titlee">Partnering with Local Farmers</h2>
          <p className="box-textt">
            We work closely with small, family-run farms to source pesticide-free vegetables, grains, and herbs, ensuring ethical and sustainable practices. Our partnerships are built on trust, transparency, and mutual respect, allowing us to support local economies and promote biodiversity.
          </p>
        </div>
      </div>

      <div className="dark-brown-boxx">
        <img src='/farm2.png' className="box-imagee" />
        <div className="box-contentt">
          <h2 className="box-titlee">Emphasizing Organic and Seasonal Produce</h2>
          <p className="box-textt">
            Seasonal, organic ingredients are prioritized to guarantee freshness, optimal taste, and reduced environmental impact. By aligning with nature's cycles, we ensure that our produce is harvested at its peak, retaining maximum nutrients and flavor.
          </p>
        </div>
      </div>

      <div className="dark-brown-boxx">
        <img src='/farm3.png' className="box-imagee" />
        <div className="box-contentt">
          <h2 className="box-titlee">Ensuring Fresh Delivery of Ingredients</h2>
          <p className="box-textt">
            Our streamlined delivery process ensures farm-fresh ingredients arrive promptly, preserving their natural flavor and nutritional value. By maintaining a direct and efficient supply chain, we minimize the time from farm to table, reducing food waste and maintaining peak freshness.
          </p>
        </div>
      </div>

      <div className="dark-brown-boxx">
        <img src='/farm4.png' className="box-imagee" />
        <div className="box-contentt">
          <h2 className="box-titlee">Transparent Ingredient Sourcing</h2>
          <p className="box-textt">
            We provide information about where our ingredients come from, fostering a deeper connection between our customers and their meals. Transparency is at the heart of our mission, and we believe that knowing the origins of your food enhances your dining experience.
          </p>
        </div>
      </div>

      <div className="line2"></div>
    </div>
  );
};

export default Preparation;
