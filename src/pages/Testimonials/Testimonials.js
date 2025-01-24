import React from 'react'
import "./Testimonials.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';


const Testimonials = () => {
  return (
    <div className="testimonial-page">
        <h1 className="testimonial-page-title"> 
            Testimonials
        </h1>

        <div class="line1"></div>
        <div className="quote-container">
        <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
        </div>
        <p className="testimonials-text">The flavors are incredible, and the < br /> atmosphere is so welcoming.< br />Sahara has become my go-to spot< br />for Mediterranean food!< br /> – Sarah T.</p>
<div className="quote-container">
        <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
        </div>
        <div class="line2"></div>
    </div>
  )
}

export default Testimonials
