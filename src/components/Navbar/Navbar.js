import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom'; 
import { FaShoppingCart } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'unset';
  };

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  const linkVariants = {
    closed: { x: 50, opacity: 0 },
    open: i => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    })
  };

  const navLinks = [
    { to: "/preparation", text: "Processes" },
    { to: "/farm", text: "Farm-To-Table" },
    { to: "/sustainability", text: "Sustainability" },
    { to: "/menu", text: "Menu" },
    { to: "/reservation", text: "Reservation" },
    { to: "/references", text: "References" }
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <Link to="/" className="logo-container">
        <img className="logo-nav" src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo" />
      </Link>

      {/* Desktop Navigation */}
      <ul className="nav-links desktop-nav">
        {navLinks.map((link) => (
          <li key={link.to}>
            <Link to={link.to}>{link.text}</Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button 
        className="menu-toggle" 
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Cart Icon */}
      <Link to="/cart" className="cart-icon-container">
        <FaShoppingCart size={24} />
      </Link>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="mobile-menu"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="mobile-menu-header">
              <img className="mobile-logo" src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo" />
              <button className="close-menu" onClick={toggleMenu}>×</button>
            </div>

            <ul className="mobile-nav-links">
              {navLinks.map((link, i) => (
                <motion.li 
                  key={link.to}
                  custom={i}
                  variants={linkVariants}
                >
                  <Link 
                    to={link.to} 
                    onClick={toggleMenu}
                    className={location.pathname === link.to ? 'active' : ''}
                  >
                    {link.text}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
