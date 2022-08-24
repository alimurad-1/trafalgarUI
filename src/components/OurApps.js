import "./OurApps.css";
import OurAppsImg from "../assets/Apps.png";

const OurApps = () => {
  return (
    <section className="app-section" id="app-section">
      <div className="app-section-container">
        <div className="app-section-text">
          <h1 className="app-section-heading">Download our mobile apps</h1>
          <p className="app-section-paragraph">
            Our dedicated patient engagement app and web portal allow you to
            access information instantaneously (no tedeous form, long calls, or
            administrative hassle) and securely
          </p>
          <button className="app-section-button">Download</button>
        </div>

        <div className="app-section-image">
          <img
            className="app-section-img-tag"
            src={OurAppsImg}
            width="600px"
            alt="healthcare_image"
          />
        </div>
      </div>
    </section>
  );
};

export default OurApps;
