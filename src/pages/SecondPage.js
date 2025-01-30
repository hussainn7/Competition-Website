import React from "react";
import { motion } from "framer-motion";
import "./SecondPage.css";

const SecondPage = () => {
  // Animation variants for title
  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Animation variants for quote
  const quoteVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: "easeOut"
      }
    }
  };

  // Animation variants for features
  const featureVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.2 + 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <div className="second-page">
      <motion.h1 
        className="second-page-title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={titleVariants}
      >
        A Culinary Journey of Sahara
      </motion.h1>
      
      <motion.div 
        className="quote-highlight"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={quoteVariants}
      >
        <p className="second-page-text">
          "Sahara brings the vibrant flavors of the Mediterranean to your plate. 
          Our dishes are crafted with locally sourced, fresh ingredients, blending 
          tradition and innovation to deliver an unforgettable dining experience."
        </p>
      </motion.div>

      <div className="content-container">
        <motion.div 
          className="main-image"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img src={process.env.PUBLIC_URL + "/4.png"} alt="Mediterranean Dish" />
        </motion.div>

        <div className="features">
          {/* Feature 1 */}
          <motion.div 
            className="feature-item"
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={featureVariants}
          >
            <img className="feature-image-left" src={process.env.PUBLIC_URL + "/3.png"} alt="Fresh Ingredients" />
            <div className="feature-text-right">
              <h3>Freshness</h3>
              <p>Our dishes are made with the finest, freshest ingredients for vibrant, delicious meals.</p>
            </div>
          </motion.div>

          {/* Feature 2 */}
          <motion.div 
            className="feature-item"
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={featureVariants}
          >
            <div className="feature-text-left">
              <h3>Authentic</h3>
              <p>Sahara stays true to Mediterranean traditions with time-honored recipes and flavors.</p>
            </div>
            <img className="feature-image-right" src={process.env.PUBLIC_URL + "/2.png"} alt="Authentic Dish" />
          </motion.div>

          {/* Feature 3 */}
          <motion.div 
            className="feature-item"
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={featureVariants}
          >
            <img className="feature-image-left" src={process.env.PUBLIC_URL + "/1.png"} alt="Mediterranean History" />
            <div className="feature-text-right">
              <h3>History</h3>
              <p>Inspired by Mediterranean culture, Sahara reflects the region's rich culinary heritage.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
