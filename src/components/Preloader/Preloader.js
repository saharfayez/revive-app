// Preloader.js
import React from "react";
import { PropagateLoader } from "react-spinners";
import "./Preloader.css";

const Preloader = () => {
  return (
    <div className="preloader-container">
      <div className="preloader">
        <PropagateLoader color= "rgb(12, 80, 29)" loading={true} size={30} />
      </div>
    </div>
  );
};

export default Preloader;
