import React, { useEffect, useState } from "react";
import SecondPage from "../pages/SecondPage";
import MenuHighlights from "../pages/MenuHighlights";
import Testimonials from "../pages/Testimonials/Testimonials";
import { motion, useScroll, useTransform } from "framer-motion";
import "./Hero.css";

const Hero = () => {
  const [showText, setShowText] = useState(false);
  const { scrollY } = useScroll();
  
  // Floating animation variants
  const floatingAnimation = {
    animate: {
      y: [0, -10, 0],
      rotate: [0, 5, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Different timing for each falafel
  const floatingAnimations = [
    {
      animate: {
        y: [0, -15, 0],
        rotate: [0, 8, 0],
        transition: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }
    },
    {
      animate: {
        y: [0, -8, 0],
        rotate: [-5, 3, -5],
        transition: {
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }
      }
    },
    {
      animate: {
        y: [0, -12, 0],
        rotate: [0, -6, 0],
        transition: {
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }
      }
    },
    {
      animate: {
        y: [0, -10, 0],
        rotate: [-3, 4, -3],
        transition: {
          duration: 3.8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5
        }
      }
    }
  ];

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Staggered text animation for paragraph
  const paragraphVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: "easeOut"
      }
    }
  };

  // Button animation variants
  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Falafel animations with initial slide-in
  const falafelAnimations = [
    {
      initial: { x: 200, opacity: 0, rotate: -20 },
      animate: {
        x: 0,
        opacity: 0.64,
        rotate: [-20, 0, -20],
        y: [0, -15, 0],
        transition: {
          x: { duration: 0.8, delay: 0.8 },
          opacity: { duration: 0.8, delay: 0.8 },
          rotate: { duration: 4, repeat: Infinity, ease: "linear" },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }
      }
    },
    {
      initial: { x: 200, opacity: 0, rotate: -20 },
      animate: {
        x: 0,
        opacity: 0.64,
        rotate: [-20, 0, -20],
        y: [0, -8, 0],
        transition: {
          x: { duration: 0.8, delay: 1.0 },
          opacity: { duration: 0.8, delay: 1.0 },
          rotate: { duration: 3.5, repeat: Infinity, ease: "linear" },
          y: { duration: 3.5, repeat: Infinity, ease: "easeInOut" }
        }
      }
    },
    {
      initial: { x: 200, opacity: 0, rotate: 15 },
      animate: {
        x: 0,
        opacity: 0.64,
        rotate: [15, 35, 15],
        y: [0, -12, 0],
        transition: {
          x: { duration: 0.8, delay: 1.2 },
          opacity: { duration: 0.8, delay: 1.2 },
          rotate: { duration: 4.5, repeat: Infinity, ease: "linear" },
          y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" }
        }
      }
    },
    {
      initial: { x: 200, opacity: 0, rotate: 30 },
      animate: {
        x: 0,
        opacity: 0.64,
        rotate: [30, 50, 30],
        y: [0, -10, 0],
        transition: {
          x: { duration: 0.8, delay: 1.4 },
          opacity: { duration: 0.8, delay: 1.4 },
          rotate: { duration: 3.8, repeat: Infinity, ease: "linear" },
          y: { duration: 3.8, repeat: Infinity, ease: "easeInOut" }
        }
      }
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section">
        <div className="content">
          <img className="greek-circle" src={process.env.PUBLIC_URL + "/greek-round.png"} alt="circle" />
          <motion.h1 
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="hero-text"
          >
            <span className="span-hero">Rooted in </span>
            <span className="highlight">Tradition</span>
            <span className="span-hero"> Flourishing in </span>
            <span className="highlight">Flavor</span>
          </motion.h1>
          <motion.p 
            initial="hidden"
            animate="visible"
            variants={paragraphVariants}
            className="hero-p-text"
          >
            Savor the vibrant flavors of the Mediterranean with our plant-based
            dishes, thoughtfully prepared using fresh, locally sourced, and seasonal
            ingredients.
          </motion.p>
          <motion.div 
            className="buttons"
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
          >
            <button className="button-secondary">
              <a href="/reservation#/reservation">Dine-In</a>
            </button>
            <button className="button-secondary">
              <a href="/reservation#/menu">Carry Out</a>
            </button>
          </motion.div>
        </div>

        <div className="floating-images">
          {[1, 2, 3, 4].map((index) => (
            <motion.img 
              key={index}
              className={`falafel-${index === 1 ? 'one' : index === 2 ? 'two' : index === 3 ? 'three' : 'four'}`}
              src={process.env.PUBLIC_URL + "/falafel.png"} 
              alt={`Falafel ${index}`}
              initial={falafelAnimations[index - 1].initial}
              animate={falafelAnimations[index - 1].animate}
              whileHover={{
                scale: 1.1,
                rotate: [0, 360],
                transition: { duration: 0.8 }
              }}
            />
          ))}
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