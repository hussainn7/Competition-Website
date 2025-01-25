import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom'; 
import { FaShoppingCart } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
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
      {/* Logo section with link */}
      <Link to="/">
        <img className="logo-nav" src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo" />
      </Link>

      {/* Menu Toggle */}
      <span className="menu-toggle" onClick={toggleMenu}>
        ☰
      </span>

      {/* Main Navigation Links */}
      <ul className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
        <li><Link to="/preparation">Processes</Link></li>
        <li><Link to="/farm">Farm-To-Table</Link></li>
        <li><Link to="/sustainability">Sustainability</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/reservation">Reservation</Link></li>
        <li><Link to="/references">References</Link></li>
      </ul>

      {/* Sliding Menu for Mobile */}
      <div className={`sliding-menu ${isMenuOpen ? 'open' : ''}`}>
        <span className="close-btn" onClick={toggleMenu}>
          ✖
        </span>
        <ul>
          <li><Link to="/preparation" onClick={toggleMenu}>Processes</Link></li>
          <li><Link to="/farm" onClick={toggleMenu}>Farm-To-Table</Link></li>
          <li><Link to="/sustainability" onClick={toggleMenu}>Sustainability</Link></li>
          <li><Link to="/menu" onClick={toggleMenu}>Menu</Link></li>
          <li><Link to="/reservation" onClick={toggleMenu}>Reservation</Link></li>
        </ul>
      </div>

      {/* Cart Icon with Link */}
      <div className='cart'>
        <Link to="/cart" className="cart-icon">
          <FaShoppingCart size={32} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
