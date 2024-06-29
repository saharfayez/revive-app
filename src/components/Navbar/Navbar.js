import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/styles.css";

const Navbar = ({ showButton }) => {
  const navigate = useNavigate();

  const goToNewPage = () => {
    navigate("/ApiPage");
  };

  return (
    <header className="l-header" id="header">
      <nav className="nav bd-container">
        <a href="#" className="nav__logo">
          Revive
        </a>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li>
              <i className="bx bx-moon change-theme" id="theme-button"></i>
            </li>
          </ul>
        </div>

        <div className="nav__toggle" id="nav-toggle">
          <i className="bx bx-menu"></i>
        </div>
        {showButton && (
          <button onClick={goToNewPage} className="nav__button">
            Press
          </button>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
