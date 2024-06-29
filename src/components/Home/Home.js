import React from "react";
import "../Styles/styles.css";


const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home__container bd-container bd-grid">
        <div className="home__data">
          <h1 className="home__title">Revive The Earth</h1>
          <h2 className="home__subtitle">Carbon Footprint System</h2>
          <a href="#" className="button">
            Get Started
          </a>
        </div>

        <img src="Picture1.png" alt="" className="home__img" />
      </div>
    </section>
  );
};

export default Home;
