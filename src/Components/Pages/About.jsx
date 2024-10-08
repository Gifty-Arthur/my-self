/* eslint-disable react/no-unescaped-entities */
// images
import her from "../../assets/Images/her.png";

// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeIn = (direction = "up", duration = 0.7) => {
  return {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
    },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: duration,
        ease: "easeInOut",
      },
    },
  };
};
function About() {
  const { theme } = useContext(ThemeContext);
  // Define the text sequence for the animation
  // eslint-disable-next-line no-unused-vars
  const { ref, inView } = useInView({
    triggerOnce: false, // Animate only once when the element comes into view
    threshold: 0.5, // Trigger the animation when 10% of the element is in view
  });

  return (
    <section
      id="About"
      className={`${
        theme === "dark" ? "bg-tertiary text-white" : "bg-custom3 text-black"
      }`}
    >
      <div
        className={`w-full  md:h-[799px] h-full ${
          theme === "dark" ? "bg-tertiary" : "bg-custom3"
        }`}
      >
        <div className="mx-auto container">
          <div ref={ref} className="md:flex flex-row   md:gap-32">
            <motion.img
              src={her}
              alt=""
              className="md:mt-24 md:pt-0  pt-20 md:w-[314px] md:h-[315px]"
              variants={fadeIn("up", 0.9)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
            />
            <div className="flex flex-col  md:mt-12">
              <motion.h1
                className="lg:text-[50px] text-primary text-3xl  mt-20 md:mt-28 font-poppins font-semibold"
                variants={fadeIn("up", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
              >
                <TypeAnimation
                  sequence={["Services", 1000, ""]}
                  speed={50}
                  className="text-primary"
                  wrapper="span"
                  repeat={Infinity}
                  cursor={false}
                />{" "}
                <span
                  className={`${
                    theme === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  I Offer
                </span>
              </motion.h1>
              <motion.p
                className={`md:text-[21px] text-md font-poppins font-light mt-6 mb-4${
                  theme === "dark" ? "text-[#B0B0B4]" : "text-black"
                }`}
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
              >
                As a Frontend Web Developer, I'm on a mission to exceed my
                clients'expectations and deliver exceptional results. My passion
                for crafting top-notch solutions shines through in every project
                I take on. So if you're looking for a developer who truly cares
                about your goals and delivers outstanding service, look no
                further. Let's bring your vision to life together!.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
