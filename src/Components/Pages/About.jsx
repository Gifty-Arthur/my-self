//images
import hero from "../../assets/Images/hero.png";

// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { TypeAnimation } from "react-type-animation";

function About() {
  // Define the text sequence for the animation

  return (
    <div className="container ">
      <div className="md:flex ">
        <img src={hero} alt="" />
        <div className="flex flex-col">
          <h1 className="lg:text-[70px] text-primary font-poppins font-semibold">
            Services I <span className="text-white">Offer.</span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default About;
