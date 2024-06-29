import React , { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import "../Styles/styles.css";


const ContentComponent = () => {
    useEffect(() => {
      const sr = ScrollReveal({
        origin: "top",
        distance: "30px",
        duration: 2000,
        reset: true,
      });

      sr.reveal(
        `
      .home__data, .home__img,
      .about__data, .about__img,
      .services__content, .menu__content,
      .app__data, .app__img,
      .contact__data, .contact__button,
      .footer__content
    `,
        {
          interval: 200,
        }
      );

      // Clean up function to destroy ScrollReveal instance when the component unmounts
      return () => {
        sr.destroy();
      };
    }, []);

  return (
    <section class="services section bd-container" id="services">
      <span class="section-subtitle">What We Offer</span>
      <h2 class="section-title">Our amazing services</h2>
      <section className="about section bd-container" id="about">
        <div className="about__container bd-grid">
          <div className="about__data">
            <h2 className="title about__initial">
              Carbon footprint calculator for individuals
            </h2>

            <p className="about__description">
              By one click you can calculate carbon footprint for each
              individual through his daily activities
            </p>
          </div>

          <img
            src="image1.jpg"
            alt=""
            className="about__img3"
          />
        </div>
      </section>

      <section className="about section bd-container" id="about">
        <div className="about__container bd-grid">
          <div className="about__data">
            <h2 className="title about__initial">
              Carbon footprint report for products
            </h2>
            <p className="about__description">
              You can easily calculate the Carbon dioxide produced during the
              life cycle of a product from the early beginning till product is
              ready
            </p>
          </div>

          <img
            src="image2.jpg"
            alt=""
            className="about__img2"
          />
        </div>
      </section>

      <section className="about section bd-container" id="about">
        <div className="about__container bd-grid">
          <div className="about__data">
            <h2 className="title about__initial">
              Reading Co2 and Co gas levels, Humidity and temperature
            </h2>
            <p className="about__description">
              Sensors are used to measure Co2 and Co gas levels , Humidity and
              temperature in specific area that contains Revive System
            </p>
          </div>

          <img
            src="image3.png"
            alt=""
            className="about__img3"
          />
        </div>
      </section>

      <section className="about section bd-container" id="about">
        <div className="about__container bd-grid">
          <div className="about__data">
            <h2 className="title about__initial">
              Predicting weather conditions
            </h2>
            <p className="about__description">
              Using data inserted by sensors such as Co2, Co, temperature and
              humidity , weather conditions can be predicted
            </p>
          </div>

          <img
            src="image4.jpg"
            alt=""
            className="about__img4"
          />
        </div>
      </section>

      <section className="about section bd-container" id="about">
        <div className="about__container bd-grid">
          <div className="about__data">
            <h2 className="title about__initial">Revive community</h2>
            <p className="about__description">
              Users of Revive System can share their thoughts , add posts , add
              comments and chat with an CHATREV to help you know more about
              Revive
            </p>
           
          </div>

          <img
            src="image5.jpg"
            alt=""
            className="about__img3"
          />
        </div>
      </section>
    </section>
  );
};

export default ContentComponent;
