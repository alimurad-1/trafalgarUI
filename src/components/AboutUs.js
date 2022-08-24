import "./AboutUs.css";
import HealtcareProviderImage from "../assets/healthcareProvider.png";

const AboutUs = () => {
  return (
    <section className="about-section" id="about-section">
      <div className="about-section-container">
        <div className="about-section-image">
          <img
            className="about-section-img-tag"
            src={HealtcareProviderImage}
            alt="healthcare_image"
          />
        </div>
        <div className="about-section-text">
          <h1 className="about-section-heading">
            Leading healthcare providers
          </h1>
          <p className="about-section-paragraph">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone. To us, it’s not just
            work. We take pride in the solutions we deliver
          </p>
          <button className="about-section-button">Learn more</button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
