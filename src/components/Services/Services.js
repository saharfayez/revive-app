import React from "react";
import "../Styles/api_styles.css";

const Services = () => {
  return (
    <section className="services section bd-container" id="services">
      <span className="section-subtitle">Get tired of Lorem ipsum data?! </span>
      <h2 className="section-title">
        Didn't you find any free carbon footprint API?!
      </h2>
      <div className="services__container bd-grid">
        <p className="about__description">
          Revive Store API is a free online REST API that you can use whenever
          you need Pseudo-real data for your carbon footprint application
          without running any server-side code. It's awesome for teaching
          purposes, sample codes, tests, etc.
        </p>
      </div>
    </section>
  );
};

export default Services;
