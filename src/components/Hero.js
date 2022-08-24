import React from "react";
import './Hero.css'
import HealthcareImage from '../assets/hero-img.jpg'
import { FaLinkedinIn } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero-section" id="hero-section">
      <div className="hero-section-container">
        <div className="hero-section-text">
          <h1 className="hero-section-heading">Virtual healthcare for you</h1>
          <p className="hero-section-paragraph">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </p>
          <button className="hero-section-button">Consult today</button>
        </div>

        <div className="hero-section-image">
          <img
            className="hero-section-img-tag"
            src={HealthcareImage}
            width="600px"
            alt={""}
          />
        </div>
      </div>
      <div className="responisve-message">
        <h1>My design might not be responsive, but I am{"\n"}</h1>
        <p>Connet me on LinkedIn</p>
        <a href="https://www.linkedin.com/in/ali-murad-6ba258204/">
          <FaLinkedinIn />
        </a>
      </div>
    </section>
  );
};

export default Hero;
