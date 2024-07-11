//images
import hero from "../../assets/Images/hero.png";

// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { TypeAnimation } from "react-type-animation";

function About() {
  // Define the text sequence for the animation

  return (
    <div className="container">
      <div className="md:flex flex-row md:mt-20 md:gap-32">
        <img src={hero} alt="" />
        <div className="flex flex-col md:mt-20">
          <h1 className="lg:text-[70px] text-primary font-poppins font-semibold">
            Services I
          </h1>
          <p className="text-[21px] font-poppins font-light">
            As a Frontend Web Developer, I'm on a mission to exceed my
            clients'expectations and deliver exceptional results. My passion for
            crafting top-notch solutions shines through in every project I take
            on. So if you're looking for a developer who truly cares about your
            goals and delivers outstanding service, look no further. Let's bring
            your vision to life together!.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
