import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import './Preparation.css';

const Preparation = () => {
  // Animation variants for the parent container
  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.9, // Delay each child animation by 0.5s
      },
    },
  };

  // Animation variants for the boxes
  const boxVariants = {
    hidden: { opacity: 0, x: '-20vw' }, // Start off-screen (left)
    visible: { opacity: 1, x: 0 }, // Slide into view
  };

  const dishes = [
    {
      id: 1,
      title: "Partnering with Local Farmers",
      text: "We work closely with small, family-run farms to source pesticide-free vegetables, grains, and herbs, ensuring ethical and sustainable practices. Our partnerships are built on trust, transparency, and mutual respect, allowing us to support local economies and promote biodiversity.",
      image: process.env.PUBLIC_URL + '/farm1.png',
    },
    {
      id: 2,
      title: "Emphasizing Organic and Seasonal Produce",
      text: "Seasonal, organic ingredients are prioritized to guarantee freshness, optimal taste, and reduced environmental impact. By aligning with nature's cycles, we ensure that our produce is harvested at its peak, retaining maximum nutrients and flavor.",
      image: process.env.PUBLIC_URL + '/farm2.png',
    },
    {
      id: 3,
      title: "Ensuring Fresh Delivery of Ingredients",
      text: "Our streamlined delivery process ensures farm-fresh ingredients arrive promptly, preserving their natural flavor and nutritional value. By maintaining a direct and efficient supply chain, we minimize the time from farm to table, reducing food waste and maintaining peak freshness.",
      image: process.env.PUBLIC_URL + '/farm3.png',
    },
    {
      id: 4,
      title: "Transparent Ingredient Sourcing",
      text: "We provide information about where our ingredients come from, fostering a deeper connection between our customers and their meals. Transparency is at the heart of our mission, and we believe that knowing the origins of your food enhances your dining experience.",
      image: process.env.PUBLIC_URL + '/farm4.png',
    },
  ];

  return (
    <motion.div
      className="prep-process"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <h1 className="farm-title">Preparation Process</h1>
      <div className="line1"></div>
      <p className="centered-text">
        Authenticity is at the heart of every dish we prepare. We take care at every step to stay true to Mediterranean traditions while ensuring exceptional taste.
      </p>

      {dishes.map((dish) => (
        <motion.div className="dark-brown-box" key={dish.id} variants={boxVariants}>
          <img
            src={dish.image}
            className="box-imagee"
            alt={dish.title}
          />
          <div className="box-content">
            <h2 className="box-title">{dish.title}</h2>
            <p className="box-text">{dish.text}</p>
          </div>
        </motion.div>
      ))}

      <div className="line2"></div>
    </motion.div>
  );
};

export default Preparation;
