import React from "react";
import { BrowserRouter } from "react-router-dom";
import { NavHashLink as Link } from "react-router-hash-link";
import "./Navbar.css";

const Navbar = () => {
  return (
    <BrowserRouter>
      <nav className="main-nav">
        {/* logo */}
        <div className="logo">
          <h1>
            <span className="logo-initial">T</span>Trafalagr
          </h1>
        </div>
        {/* Links */}
        <div className="pages-links">
          <ul>
            <li>
              <Link
                smooth
                // exact
                to="#hero-section"
                className="navlink"
              >
                Home
              </Link>
            </li>
            <li>
              <Link smooth to="#about-section" className="navlink">
                About us
              </Link>
            </li>
            <li>
              <Link smooth to="#services-section" className="navlink">
                Services
              </Link>
            </li>
            <li>
              <Link smooth to="#app-section" className="navlink">
                Apps
              </Link>
            </li>
            <li>
              <Link smooth to="#testimonial-section" className="navlink">
                Testimonial
              </Link>
            </li>
            <li>
              <Link to="#blog-section" smooth className="navlink">
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </BrowserRouter>
    
  );
};

export default Navbar;
