import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "..//Footer/Footer";

import Home from "../Home/Home";
import About from "../About/About";

import Contact from "../Contact/Contact";
import ContentComponent from "../Content/ContentComponent";

const Main = () => {
  return (
    <div>
      <Navbar showButton={true} />
      <Home />
      <About
      showtitle={true}
        subtitle="About Us"
        title="We Calculate Carbon Footprint for Individuals and Products"
        description="We calculate carbon footprint for individuals and products in an efficient way with accurate results."
        buttonText="Explore History"
        buttonLink="#"
        imageUrl="BCD-ME-carbon-calculator.webp"
      />
      <ContentComponent />

      <Contact />
      <Footer />
    </div>
  );
};

export default Main;
