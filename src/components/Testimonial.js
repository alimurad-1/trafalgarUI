import React, { useState } from "react";
import "./Testimonial.css";
import ManImage1 from "../assets/guy1.jpg";
import ManImage2 from "../assets/guy2.jpg";
import ManImage3 from "../assets/guy3.jpg";
import ManImage4 from "../assets/guy4.jpg";
import { css} from "@emotion/css";


const Testimonial = () => {
  const testimonials = [
    {
      client: "Edward Newgate",
      title: "Founder Circle",
      quote:
        "Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely",
      pic: ManImage1,
    },
    {
      client: "Ali Murad",
      title: "DevDude",
      quote:
        "Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely",
      pic: ManImage2,
    },
    {
      client: "Homelander",
      title: "Vought International",
      quote:
        "Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely",
      pic: ManImage3,
    },
    {
      client: "Matthew Murdock",
      title: "Nelson & Murdock",
      quote:
        "Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely",
      pic: ManImage4,
    },
  ];

  const [active, setActive] = useState(0);
  const [currentClient, setCurrentClient] = useState(testimonials[active]);

  const handleSetClink = (event) => {
    setActive(event.target.getAttribute("data-quote"));
    setCurrentClient(testimonials[event.target.getAttribute("data-quote")]);
    console.log(active);
  };

  return (
    <section className="testimonial-section" id="testimonial-section">
      <div className="testimonial-container">
        <h1>What our customer are saying</h1>
        <div className="testimonial">
          <img
            className="testimonial-img"
            src={currentClient.pic}
            alt="person"
            width={143}
            height={143}
          />
          <div className="testimonial-img-heading">
            <h1>{currentClient.client}</h1>
            <p>{currentClient.title}</p>
          </div>
          <div className="testimonial-img-text">
            <p>{`“${currentClient.quote}”`}</p>
          </div>
        </div>
      </div>
      <div className="circles-container">
        <div
          //className="circles"
          className={css`
            display: flex;
            margin: 0 auto;
            width: fit-content;
            height: fit-content;

            span {
              height: 3rem;
              width: 3rem;
              margin: 0 3px;
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
            }

            span::before {
              content: "";
              height: 1rem;
              width: 1rem;
              background-color: #d8e3f3;
              border-radius: 50%;
              transition: background-color 0.3s ease;
            }

            span:hover::before {
              background-color: #458ff6;
            }

            span[data-quote="${active}"]::before {
              background-color: #458ff6;
            }
          `}
        >
          {Object.keys(testimonials).map((index) => (
            <span
              onClick={(event) => handleSetClink(event)}
              data-quote={index}
              key={index}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
