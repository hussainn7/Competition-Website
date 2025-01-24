import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faClock, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="grid">
          {/* Contact Section */}
          <div className="footer-section">
            <h3 className="footer-title">Contact</h3>
            <div className="footer-contact">
              <p className="footer-item">
                <FontAwesomeIcon icon={faLocationDot} className="footer-icon" /> WHITE NIGGA
              </p>
              <p className="footer-item">
                <FontAwesomeIcon icon={faPhone} className="footer-icon" /> (555) 123-4567
              </p>
              <p className="footer-item">
                <FontAwesomeIcon icon={faClock} className="footer-icon" /> Mon-Sun: 11AM-10PM
              </p>
            </div>
          </div>

          {/* Follow Us Section */}
          <div className="footer-section">
            <h3 className="footer-title">Follow Us</h3>
            <div className="footer-social">
              <a href="#" className="footer-link">
                <FontAwesomeIcon icon={faInstagram} className="social-icon" />
              </a>
              <a href="#" className="footer-link">
                <FontAwesomeIcon icon={faFacebook} className="social-icon" />
              </a>
              <a href="#" className="footer-link">
                <FontAwesomeIcon icon={faTwitter} className="social-icon" />
              </a>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="footer-section">
            <h3 className="footer-title">Newsletter</h3>
            <form className="footer-form">
              <input
                type="email"
                placeholder="Your email"
                className="footer-input"
              />
              <button type="submit" className="footer-button">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© 2024 Sahara. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
