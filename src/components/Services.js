import React from "react";
import "./Services.css";
import Service from "./Service";
import {
  PersonSearch,
  Medication,
  Contacts,
  InsertChart,
  MedicalServices,
  ReceiptLong,
} from "@mui/icons-material";

const Services = () => {
  const serviceObj = [
    {
      serviceIcon: PersonSearch,
      serviceHeading: "Search doctor",
      serviceText:
        "Choose your doctor from thousands of specialist, general, and trusted hospitals",
    },
     {
      serviceIcon: Medication,
      serviceHeading: "Online Pharmacy",
      serviceText:
        "Buy  your medicines with our mobile application with a simple delivery system",
    },
     {
      serviceIcon: Contacts,
      serviceHeading: "Consultation",
      serviceText:
        "Free consultation with our trusted doctors and get the best recomendations",
    },
     {
      serviceIcon: InsertChart,
      serviceHeading: "Details info",
      serviceText:
        "Free consultation with our trusted doctors and get the best recomendations",
    },
     {
      serviceIcon: MedicalServices,
      serviceHeading: "Emergency care",
      serviceText:
        "You can get 24/7 urgent care for yourself or your children and your lovely family",
    },
     {
      serviceIcon: ReceiptLong,
      serviceHeading: "Tracking",
      serviceText: "Track and save your medical history and health data",
    },
  ];
  return (
    <section className="services-section" id="services-section">
      <div className="services-header">
        <h1>Our services</h1>

        <p>
          We provide to you the best choiches for you. Adjust it to your health
          needs and make sure your undergo treatment with our highly qualified
          doctors you can consult with us which type of service is suitable for
          your health
        </p>
      </div>
      <div className="services">
        <div className="services-container">
          {(serviceObj).map((anObjectMapped, index) => (
            <Service
              key={index}
              Cardicon={anObjectMapped.serviceIcon}
              Cardheading={anObjectMapped.serviceHeading}
              Cardtext={anObjectMapped.serviceText}
            />
          ))}

          {/* <Service
            Cardicon={Medication}
            Cardheading={"Online pharmacy"}
            Cardtext={
              "Buy  your medicines with our mobile application with a simple delivery system"
            }
          />
          <Service
            Cardicon={Contacts}
            Cardheading={"Consultation"}
            Cardtext={
              "Free consultation with our trusted doctors and get the best recomendations"
            }
          />
          <Service
            Cardicon={InsertChart}
            Cardheading={"Details info"}
            Cardtext={
              "Free consultation with our trusted doctors and get the best recomendations"
            }
          />
          <Service
            Cardicon={MedicalServices}
            Cardheading={"Emergency care"}
            Cardtext={
              "You can get 24/7 urgent care for yourself or your children and your lovely family"
            }
          />
          <Service
            Cardicon={ReceiptLong}
            Cardheading={"Tracking"}
            Cardtext={"Track and save your medical history and health data"}
          /> */}
        </div>
      </div>
      <div className="services-button-container">
        <button className="services-button">Learn More</button>
      </div>
    </section>
  );
};

export default Services;
