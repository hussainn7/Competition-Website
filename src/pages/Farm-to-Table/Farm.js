import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion

import "./Farm.css";

const Farm = () => {
  
  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.9, // Delay each child animation by 0.9s
      },
    },
  };

  // Animation variants for the boxes
  const boxVariants = {
    hidden: { opacity: 0, x: '-20vw' }, // Start off-screen (left)
    visible: { opacity: 1, x: 0 }, // Slide into view
  };

  return (
    <motion.div
      className="farm"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <h1 className="farm-title">Our Farm-to-Table Approach</h1>
      <div className="line1"></div>
      <p className="centered-text">
        We believe great taste begins with great sourcing. Our farm-to-table approach ensures every ingredient is fresh, seasonal, and sustainable.
      </p>

      <motion.div className="dark-brown-box" variants={boxVariants}>
        <img 
          src={process.env.PUBLIC_URL + '/anubhav (2).png'} 
          className="box-imagee"
          alt="Partnering with Local Farmers"
        />
        <div className="box-content">
          <h2 className="box-title">Partnering with Local Farmers</h2>
          <p className="box-text">
            We work closely with small, family-run farms to source pesticide-free vegetables, grains, and herbs, ensuring ethical and sustainable practices. Our partnerships are built on trust, transparency, and mutual respect, allowing us to support local economies and promote biodiversity.
          </p>
        </div>
      </motion.div>

      <motion.div className="dark-brown-box" variants={boxVariants}>
        <img 
          src={process.env.PUBLIC_URL + '/anubhav (1).png'} 
          className="box-imagee"
          alt="Organic and Seasonal Produce"
        />
        <div className="box-content">
          <h2 className="box-title">Emphasizing Organic and Seasonal Produce</h2>
          <p className="box-text">
            Seasonal, organic ingredients are prioritized to guarantee freshness, optimal taste, and reduced environmental impact. By aligning with nature's cycles, we ensure that our produce is harvested at its peak, retaining maximum nutrients and flavor.
          </p>
        </div>
      </motion.div>

      <motion.div className="dark-brown-box" variants={boxVariants}>
        <img 
          src={process.env.PUBLIC_URL + '/anubhav (3).png'} 
          className="box-imagee"
          alt="Fresh Delivery"
        />
        <div className="box-content">
          <h2 className="box-title">Ensuring Fresh Delivery of Ingredients</h2>
          <p className="box-text">
            Our streamlined delivery process ensures farm-fresh ingredients arrive promptly, preserving their natural flavor and nutritional value. By maintaining a direct and efficient supply chain, we minimize the time from farm to table, reducing food waste and maintaining peak freshness.
          </p>
        </div>
      </motion.div>

      <motion.div className="dark-brown-box" variants={boxVariants}>
        <img 
          src={process.env.PUBLIC_URL + '/anubhav (4).png'} 
          className="box-imagee"
          alt="Transparent Sourcing"
        />
        <div className="box-content">
          <h2 className="box-title">Transparent Ingredient Sourcing</h2>
          <p className="box-text">
            We provide information about where our ingredients come from, fostering a deeper connection between our customers and their meals. Transparency is at the heart of our mission, and we believe that knowing the origins of your food enhances your dining experience.
          </p>
        </div>
      </motion.div>

      <div className="line2"></div>
    </motion.div>
  );
};

export default Farm;
