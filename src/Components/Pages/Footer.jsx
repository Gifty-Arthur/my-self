/* eslint-disable react/no-unescaped-entities */
// images
import sup from "../../assets/Images/sup.png";
import insta from "../../assets/Images/insta.png";

// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

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

function Footer() {
  const { theme } = useContext(ThemeContext);
  // Define the text sequence for the animation
  // eslint-disable-next-line no-unused-vars
  const { ref, inView } = useInView({
    triggerOnce: false, // Animate only once when the element comes into view
    threshold: 0.5, // Trigger the animation when 50% of the element is in view
  });

  return (
    <section
      id="Footer"
      className={`${
        theme === "dark" ? "bg-tertiary text-white" : "bg-custom3 text-black"
      } flex items-center justify-center`}
    >
      <div
        className={`w-full md:h-[799px] h-full ${
          theme === "dark" ? "bg-tertiary" : "bg-custom3"
        } flex items-center justify-center`}
      >
        <div className="container mx-auto">
          <div ref={ref} className="flex flex-col items-center text-center">
            <div className="flex flex-col mt-20 md:mt-28">
              <motion.h1
                className="lg:text-[50px] text-3xl mt-20 md:mt-28 font-poppins font-bold flex"
                variants={fadeIn("up", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
              >
                Let's Work Together
              </motion.h1>
              <motion.div
                className="md:text-[21px] text-md font-poppins font-light mt-6 mb-4 flex flex-col"
                variants={fadeIn("up", 0.9)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
              >
                <p className="text-[21px] font-poppins mt-2">Gifty Arthur</p>
                <p className="text-[21px] font-poppins mt-2">
                  giftyarthur031@gmail.com
                </p>
                <p className="text-[21px] font-poppins mt-2">+233248373574</p>
                <div className="flex flex-row items-center justify-center mt-10 gap-10 ">
                  <a
                    href="https://wa.me/233248373574"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={sup} alt="" />
                  </a>

                  <a
                    href="https://www.instagram.com/tiitt_y?igsh=MTMzZG43ZmFianBxYw%3D%3D&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={insta} alt="" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
