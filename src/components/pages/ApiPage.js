import React from 'react';
import Navbar from "../Navbar/Navbar";
import About from '../About/About'; 
import Services from '../Services/Services';
import Example from '../Example/Example';
import Resources from '../Resources/Resources';

const ApiPage = () => {
    return (
      <>
        <Navbar showButton={false} />
        <About
          showtitle={false}
          subtitle="Revive API Store"
          title="We Calculate Carbon Footprint for Individuals and Products"
          description="Store rest API for Revive Application."
          buttonText="View on Github"
          buttonLink="#"
          imageUrl="api_image.jpg"
        />
        <Services />
        <Example />
        <Resources />
      </>
    );
};

export default ApiPage;