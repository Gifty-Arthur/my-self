import { useContext } from "react";
import { ThemeContext } from "./Pages/ThemeContext";
import { TypeAnimation } from "react-type-animation";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "flowbite";

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

const progressBarVariants = {
  hidden: { width: 0 },
  visible: (custom) => ({
    width: custom,
    transition: { duration: 1, ease: "easeInOut" },
  }),
};

function Skills() {
  const { theme } = useContext(ThemeContext);
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true });

  if (inView) {
    controls.start("visible");
  }

  return (
    <div>
      <div
        className={`${
          theme === "dark" ? "bg-tertiary text-white" : "bg-custom3 text-black"
        }`}
      >
        <div
          className={`w-full h-[1100px] ${
            theme === "dark" ? "bg-tertiary" : "bg-custom3"
          }`}
        >
          <div className="container">
            <div className="flex flex-col">
              <motion.h1
                className="lg:text-[50px] text-white text-3xl md:mt-24 mt-10 font-poppins font-semibold"
                variants={fadeIn("left", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
              >
                My &nbsp;
                <span>
                  <TypeAnimation
                    sequence={["Skills", 1000, ""]}
                    speed={50}
                    className="text-primary"
                    wrapper="span"
                    repeat={Infinity}
                    cursor={false}
                  />{" "}
                </span>
              </motion.h1>
              <h2 className="mt-8 font-poppins md:text-lg font-bold text-md">
                Here's what sets me apart from the rest
              </h2>

              {/* skills bar */}
              <div className="mt-12">
                <p className="mt-2 text-md font-poppins">HTML/CSS</p>
                <div className="md:w-[753px] bg-white-500 w-full rounded-full h-2.5 dark:bg-white mt-4">
                  <motion.div
                    className="bg-[#73A4CF] h-2.5 rounded-full w-[323px] md:[687px]"
                    custom="687px" // Define the width you want to animate to
                    initial="hidden"
                    animate={controls}
                    variants={progressBarVariants}
                    ref={ref}
                  ></motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
