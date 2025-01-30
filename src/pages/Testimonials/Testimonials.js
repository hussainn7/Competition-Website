import React from 'react';
import { motion } from "framer-motion";
import "./Testimonials.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const Testimonials = () => {
  // Split text into words for individual animation
  const testimonialText = "The flavors are incredible, and the atmosphere is so welcoming. Sahara has become my go-to spot for Mediterranean food! – Sarah T.";
  const words = testimonialText.split(" ");

  const titleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const lineVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        duration: 1,
        ease: "easeInOut"
      }
    }
  };

  const quoteIconVariants = {
    hidden: { opacity: 0, rotate: -180, scale: 0.5 },
    visible: {
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: i * 0.1,
        ease: [0.2, 0.65, 0.3, 0.9]
      }
    })
  };

  return (
    <div className="testimonial-page">
      <motion.h1 
        className="testimonial-page-title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={titleVariants}
      >
        Testimonials
      </motion.h1>

      <motion.div 
        className="line1"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={lineVariants}
      />

      <motion.div 
        className="quote-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={quoteIconVariants}
      >
        <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
      </motion.div>

      <div className="testimonials-text">
        {words.map((word, i) => (
          <motion.span
            key={i}
            style={{ display: 'inline-block', marginRight: '8px' }}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={wordVariants}
          >
            {word}
          </motion.span>
        ))}
      </div>

      <motion.div 
        className="quote-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={quoteIconVariants}
      >
        <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
      </motion.div>

      <motion.div 
        className="line2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={lineVariants}
      />
    </div>
  );
};

export default Testimonials;
