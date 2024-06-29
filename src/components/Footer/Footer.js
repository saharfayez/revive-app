import React from 'react';
import "../Styles/styles.css";


const Footer = () => {
  return (
    <>
      <footer class="footer section bd-container">
        <div class="footer__container bd-grid">
          <div class="footer__content">
            <a href="#" class="footer__logo">
              Revive
            </a>
            {/* <span class="footer__description">Carbon Footprint System</span> */}
            <span class="carbon">Carbon Footprint System</span>
            <div>
              <a href="#" class="footer__social">
                <i class="bx bxl-facebook"></i>
              </a>
              <a href="#" class="footer__social">
                <i class="bx bxl-instagram"></i>
              </a>
              <a href="#" class="footer__social">
                <i class="bx bxl-twitter"></i>
              </a>
            </div>
          </div>
          <div class="footer__content">
            <h3 class="footer__title">Information</h3>
            <ul>
              <li>
                <a href="#" class="footer__link">
                  Event
                </a>
              </li>
              <li>
                <a href="#" class="footer__link">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" class="footer__link">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="#" class="footer__link">
                  Terms of services
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p class="footer__copy">&#169; 2020 Bedimcode. All right reserved</p>
      </footer>
    </>
  );
};

export default Footer;