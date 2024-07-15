// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Experience() {
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
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <div
        className={`${
          theme === "dark" ? "bg-tertiary text-white" : "bg-custom3 text-black"
        }`}
      >
        <div
          className={`w-full  h-[1100px]  ${
            theme === "dark" ? "bg-tertiary" : "bg-custom3"
          }`}
        >
          <div className="mx-auto container">
            <div className="flex flex-col">
              <div>
                <motion.h1
                  className="lg:text-[50px] text-primary text-3xl md:mt-10  sm:mt-52 font-poppins font-semibold "
                  variants={fadeIn("up", 0.5)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.3 }}
                >
                  My &nbsp;
                  <span>
                    <TypeAnimation
                      sequence={["Experience", 1000]}
                      speed={50}
                      className="text-white"
                      wrapper="span"
                      repeat={Infinity}
                      cursor={false}
                    />{" "}
                  </span>
                </motion.h1>
                {/* year */}
                <div className="flex flex-row">
                  <div className="flex flex-col gap-36 md:mt-28 mt-20">
                    <p className="timeline-date md:text-2xl  font-poppins md:mt-8 mt-16 ">
                      2019-2023
                    </p>
                    <div className="text-center">
                      <p className="timeline-date md:mt-10 font-poppins ">
                        Nov-Dec <br />
                        2023
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="timeline-date mt-10 font-poppins ">
                        July-Till
                        <br />
                        2024
                      </p>
                    </div>
                  </div>

                  <div className="timeline mt-20">
                    <div className="relative">
                      <div className="dot"></div>
                      <div className="pl-8  md:text-3xl text-md ">
                        <span className=" font-bold text-primary">Bsc</span>
                        <h3 className=" font-bold font-poppins">
                          Computer Science
                        </h3>
                        <h3 className=" font-bold text-secondary">
                          University of Ghana
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
