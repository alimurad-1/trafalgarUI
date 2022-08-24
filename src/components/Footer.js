import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
      <footer className="footer-section">
        <div className="company-overview">
          <h1>
            <span>T</span>Trafalagr
          </h1>
          <p>
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </p>
          <p>©Trafalgar PTY LTD 2020. All rights reserved</p>
        </div>
        <div className="footer-list country">
          <h1>Company</h1>
          <ul>
            <li>About</li>
            <li>Find a doctor</li>
            <li>Testimonial</li>
            <li>App</li>
          </ul>
        </div>
        <div className="footer-list region">
          <h1>Region</h1>
          <ul>
            <li>Indonesia</li>
            <li>Singapore</li>
            <li>Hongkong</li>
            <li>Canada</li>
          </ul>
        </div>
        <div className="footer-list help">
          <h1>Help</h1>
          <ul>
            <li>Help center</li>
            <li>Contact support</li>
            <li>Instructions</li>
            <li>How it works</li>
          </ul>
        </div>
      </footer>
    );
}

export default Footer