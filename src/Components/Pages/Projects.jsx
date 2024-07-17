// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import CountUp from "react-countup";
import { ThemeContext } from "./ThemeContext";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

//images
import bg from "../../assets/Images/bg.png";

function Projects() {
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

  const { ref, inView } = useInView({
    triggerOnce: true, // Animate only once when the element comes into view
    threshold: 0.5, // Trigger the animation when 50% of the element is in view
  });

  const { theme } = useContext(ThemeContext);

  return (
    <div>
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
          <div className="mx-auto container">
            <div className="flex flex-col ">
              <div className="md:flex items-center justify-between md:mt-28 ">
                <div className="flex flex-col ">
                  <motion.h1
                    className="lg:text-[50px] text-white text-2xl mt-20 font-poppins font-semibold "
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
                      Some of My Creative
                    </span>{" "}
                    <span>
                      <TypeAnimation
                        sequence={["Works", 2000]}
                        speed={50}
                        className="text-primary"
                        wrapper="span"
                        repeat={Infinity}
                        cursor={false}
                      />{" "}
                    </span>
                  </motion.h1>
                  <p className="text-md mt-4 font-poppins">
                    Some completed projects that can be here
                  </p>
                </div>
                <div className="flex flex-row md:mt-0 mt-8">
                  <div className="flex flex-wrap mt-4" ref={ref}>
                    {inView && (
                      <motion.div className="text-6xl text-primary font-poppins">
                        <CountUp end={3} duration={9} />
                      </motion.div>
                    )}
                    <span className="text-base md:text-xl ml-4">
                      Years of <br />
                      Experience
                    </span>
                  </div>
                  {/* line */}
                  <div className="border-l-4 border-gray-200 py-14 ml-8 space-y-14"></div>
                  <div className="flex flex-wrap mt-4 ml-8" ref={ref}>
                    {inView && (
                      <motion.div className="text-6xl text-primary font-poppins">
                        <CountUp end={10} duration={9} />
                      </motion.div>
                    )}
                    <span className="text-base md:text-xl ml-4">
                      Years of <br />
                      Experience
                    </span>
                  </div>
                </div>
              </div>
              {/* bg */}

              <a
                href="https://grocery-website-zeta.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="border rounded-lg w-[] 700pxh-[489px] bg-primary-800 md:mt-20 mt-10">
                  <img src={bg} alt="" className=" mt-10 rounded-md" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
