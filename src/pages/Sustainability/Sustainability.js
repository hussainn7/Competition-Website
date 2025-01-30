import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion

const Sustainability = () => {
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
      className="prep-process"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <h1 className="farm-title">Sustainability</h1>
      <div className="line1"></div>
      <p className="centered-textt"></p>

      {/* First Box */}
      <motion.div className="dark-brown-boxx" variants={boxVariants}>
        <img
          src={process.env.PUBLIC_URL + "/sustain (1).png"}
          className="box-imagee"
          alt="Partnering with Local Farmers"
        />
        <div className="box-contentt">
          <h2 className="box-titlee">Partnering with Local Farmers</h2>
          <p className="box-textt">
            We work closely with small, family-run farms to source pesticide-free vegetables, grains, and herbs, ensuring ethical and sustainable practices. Our partnerships are built on trust, transparency, and mutual respect, allowing us to support local economies and promote biodiversity.
          </p>
        </div>
      </motion.div>

      {/* Second Box */}
      <motion.div className="dark-brown-boxx" variants={boxVariants}>
        <img
          src={process.env.PUBLIC_URL + "/sustain (2).png"}
          className="box-imagee"
          alt="Organic and Seasonal Produce"
        />
        <div className="box-contentt">
          <h2 className="box-titlee">Emphasizing Organic and Seasonal Produce</h2>
          <p className="box-textt">
            Seasonal, organic ingredients are prioritized to guarantee freshness, optimal taste, and reduced environmental impact. By aligning with nature's cycles, we ensure that our produce is harvested at its peak, retaining maximum nutrients and flavor.
          </p>
        </div>
      </motion.div>

      {/* Third Box */}
      <motion.div className="dark-brown-boxx" variants={boxVariants}>
        <img
          src={process.env.PUBLIC_URL + "/sustain (3).png"}
          className="box-imagee"
          alt="Fresh Delivery"
        />
        <div className="box-contentt">
          <h2 className="box-titlee">Ensuring Fresh Delivery of Ingredients</h2>
          <p className="box-textt">
            Our streamlined delivery process ensures farm-fresh ingredients arrive promptly, preserving their natural flavor and nutritional value. By maintaining a direct and efficient supply chain, we minimize the time from farm to table, reducing food waste and maintaining peak freshness.
          </p>
        </div>
      </motion.div>

      {/* Fourth Box */}
      <motion.div className="dark-brown-boxx" variants={boxVariants}>
        <img
          src={process.env.PUBLIC_URL + "/sustain (4).png"}
          className="box-imagee"
          alt="Transparent Ingredient Sourcing"
        />
        <div className="box-contentt">
          <h2 className="box-titlee">Transparent Ingredient Sourcing</h2>
          <p className="box-textt">
            We provide information about where our ingredients come from, fostering a deeper connection between our customers and their meals. Transparency is at the heart of our mission, and we believe that knowing the origins of your food enhances your dining experience.
          </p>
        </div>
      </motion.div>

      <div className="line2"></div>
    </motion.div>
  );
};

export default Sustainability;
