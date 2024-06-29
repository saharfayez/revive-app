import React from "react";
import "../Styles/styles.css"; // Assume you have moved styles related to About into this file.

const About = ({
  showtitle,
  subtitle,
  title,
  description,
  buttonText,
  imageUrl,
  buttonLink,
}) => {
  return (
    <section className="about section bd-container" id="about">
      <div className="about__container bd-grid">
        <div className="about__data">
          <span className="section-subtitle about__initial">{subtitle}</span>
          {showtitle && (
            <h2 className="section-title about__initial">{title}</h2>
          )}

          <p className="about__description">{description}</p>
          <a href={buttonLink} className="button">
            {buttonText}
          </a>
        </div>

        <img src={imageUrl} alt="" className="about__img" />
      </div>
    </section>
  );
};

export default About;
