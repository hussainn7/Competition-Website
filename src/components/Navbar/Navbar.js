import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa';
// import { useCart } from '.src/pages/Cart/CartContext.js'; // Adjust the path based on your structure
import './Navbar.css';


const Navbar = () => {
  const location = useLocation();
  // const { cart } = useCart(); // Access the cart from context
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getNavClass = () => {
    let baseClass = '';
    switch (location.pathname) {
      case '/registration':
        baseClass = 'nav-registration';
        break;
      case '/conferences':
        baseClass = 'nav-conferences';
        break;
      case '/photodb':
        baseClass = 'nav-workshops';
        break;
      case '/volunteer':
        baseClass = 'nav-volunteer';
        break;
      case '/events':
        baseClass = 'nav-events';
        break;
      case '/aed':
        baseClass = 'nav-aed';
        break;
      default:
        baseClass = 'nav-default';
        break;
    }
    return `${baseClass} ${isScrolled ? 'scrolled' : ''}`;
  };

  return (
    <nav className={getNavClass()}>
      <a href="/">
    <img className="logo-nav" src="../logo.png" alt="Logo" />
</a>
      <span className="menu-toggle" onClick={toggleMenu}>
        ☰
      </span>
      <ul className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
        <li><a href="/preparation">Processes</a></li>
        <li><a href="/farm">Farm-To-Table</a></li>
        <li><a href="/Sustainability">Sustainability</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/reservation">Reservation</a></li>
        <li>

        </li>
        <li>
          {/* <a href="/cart">Cart ({cart.length})</a> Display cart count */}
        </li>
      </ul>
      <div className={`sliding-menu ${isMenuOpen ? 'open' : ''}`}>
        <span className="close-btn" onClick={toggleMenu}>
          ✖
        </span>
        <ul>
          <li><a href="/preparation" onClick={toggleMenu}>Processes</a></li>
          <li><a href="/farm" onClick={toggleMenu}>Farm-To-Table</a></li>
          <li><a href="/sustainability" onClick={toggleMenu}>Sustainability</a></li>
          <li><a href="/menu" onClick={toggleMenu}>Menu</a></li>
          <li><a href="/reservation" onClick={toggleMenu}>Reservation</a></li>
        </ul>
      </div>

      <div className='cart'>
      <Link to="/cart" className="cart-icon">
  <FaShoppingCart size={32} />
</Link> 
    </div>
</nav>
  );
};

export default Navbar;