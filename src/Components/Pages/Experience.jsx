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
  // eslint-disable-next-line no-unused-vars
  useInView({
    triggerOnce: false, // Animate only once when the element comes into view
    threshold: 0.5, // Trigger the animation when 10% of the element is in view
  });

  return (
    <section id="Experience">
      <div
        className={`${
          theme === "dark" ? "bg-tertiary text-white" : "bg-custom3 text-black"
        }`}
      >
        <div
          className={`w-full h-full ${
            theme === "dark" ? "bg-tertiary" : "bg-custom3"
          }`}
        >
          <motion.div className="mx-auto container">
            <div className="md:flex items-start justify-between ">
              <motion.div
                className="flex flex-col "
                variants={fadeIn("up", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
              >
                <div className="">
                  <motion.h1
                    className="lg:text-[50px] text-white text-3xl mt-20 font-poppins font-semibold "
                    variants={fadeIn("up", 0.5)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.3 }}
                  >
                    <span
                      className={`${
                        theme === "dark" ? "text-white" : "text-black"
                      }`}
                    >
                      My
                    </span>{" "}
                    <span>
                      <TypeAnimation
                        sequence={["Education", 1000]}
                        speed={50}
                        wrapper="span"
                        repeat={Infinity}
                        cursor={false}
                        className={`${
                          theme === "dark" ? "text-white" : "text-black"
                        }`}
                      />{" "}
                    </span>
                  </motion.h1>
                  {/* year */}
                  <div className="flex flex-row">
                    <div className="flex flex-col gap-36 mt-20">
                      <p className="timeline-date md:text-2xl text-sm font-poppins md:mt-20 mt-16 ">
                        2019-2023
                      </p>
                      <div className="text-center">
                        <p className="timeline-date md:text-2xl text-sm font-poppins md:mt-16 mt-4">
                          Nov-Dec <br />
                          2023
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="timeline-date md:text-2xl text-sm font-poppins md:mt-8 mt-8 ">
                          July-Till
                          <br />
                          2024
                        </p>
                      </div>
                    </div>
                    <div className="timeline mt-20 flex flex-col gap-16">
                      <div className="relative">
                        <div className="dot md:-mt-4 -mt-8 md:-left-2.5 md:h-4 md:w-4"></div>
                        <div className="pl-8 md:text-3xl text-md ">
                          <span className="text-primary md:mt-0">Bsc</span>
                          <h3 className="font-bold font-poppins">
                            Computer Science
                          </h3>
                          <h3 className="font-bold text-secondary">
                            University of Ghana
                          </h3>
                        </div>
                      </div>
                      <div className="relative">
                        <div className="dot md:-mt-0 -mt-6 md:-left-2.5 md:h-4 md:w-4"></div>
                        <div className="pl-8 md:text-3xl text-md md:mt-0">
                          <span className="text-primary">Certifications</span>
                          <h3 className="font-bold font-poppins mt-2">
                            Soft Skills Certification
                          </h3>
                          <h3 className="font-bold text-secondary mt-2">
                            JobberMan Ghana
                          </h3>
                        </div>
                      </div>
                      <div className="relative">
                        <div
                          className="dot md:-mt-0 -mt-4 md:-left-2.5  md:h-4 md:w-4"
                          title="current event"
                        >
                          <div className="dot absolute -top-1.5 -left-1 animate-ping"></div>
                        </div>
                        <div className="pl-8 md:text-3xl text-md">
                          <h3 className="font-bold font-poppins md:mt-12 mt-8">
                            Full Stack Web Development
                          </h3>
                          <h3 className="font-bold text-secondary">Udemy</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="flex flex-col mt-20 md:mt-20"
                variants={fadeIn("up", 0.9)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
              >
                <div className="">
                  <motion.h1
                    className="lg:text-[50px] text-white text-3xl font-poppins font-semibold "
                    variants={fadeIn("up", 0.5)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.3 }}
                  >
                    <span
                      className={`${
                        theme === "dark" ? "text-white" : "text-black"
                      }`}
                    >
                      My
                    </span>{" "}
                    <span>
                      <TypeAnimation
                        sequence={["Experience", 1000]}
                        speed={50}
                        wrapper="span"
                        repeat={Infinity}
                        cursor={false}
                        className={`${
                          theme === "dark" ? "text-white" : "text-black"
                        }`}
                      />{" "}
                    </span>
                  </motion.h1>
                  {/* year */}
                  <div className="flex flex-row">
                    <div className="flex flex-col gap-28 mt-20">
                      <p
                        className={`timeline-date md:text-2xl text-sm font-poppins md:mt-16 mt-14 ${
                          theme === "dark" ? "border-black" : "border-gray-200"
                        }`}
                      >
                        2019-2023
                      </p>
                    </div>
                    <div
                      className={`timeline mt-20 flex flex-col gap-16${
                        theme === "dark" ? "border-black" : "border-gray-200"
                      }`}
                    >
                      <div className="relative">
                        <div className="dot md:-mt-4 -mt-8 md:-left-2.5 md:h-4 md:w-4"></div>
                        <div className="pl-8 md:text-3xl text-md ">
                          <span className="text-primary md:mt-0">OddHaus</span>
                          <h3 className="font-bold text-secondary">
                            Internship
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
