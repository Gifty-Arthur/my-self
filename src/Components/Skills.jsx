import { useEffect } from "react";
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

const htmlCssVariants = {
  hidden: { width: 0 },
  visible: { width: "90%", transition: { duration: 2 } },
};

const jsVariants = {
  hidden: { width: 0 },
  visible: { width: "80%", transition: { duration: 2 } },
};

const reactVariants = {
  hidden: { width: 0 },
  visible: { width: "85%", transition: { duration: 2 } },
};

const tailwindVariants = {
  hidden: { width: 0 },
  visible: { width: "75%", transition: { duration: 2 } },
};

function Skills() {
  const { theme } = useContext(ThemeContext);
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

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
                className="lg:text-[50px] text-white text-3xl md:mt-14 mt-10 font-poppins font-semibold"
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
              <div className="mt-10">
                <p className=" text-md font-poppins">HTML/CSS</p>
                <div className="md:w-[753px] bg-white-500 w-full rounded-full h-3 dark:bg-white mt-2">
                  <motion.div
                    className="bg-[#73A4CF] h-3 rounded-full w-[323px] md:w-[687px]"
                    initial="hidden"
                    animate={controls}
                    variants={htmlCssVariants}
                    ref={ref}
                  ></motion.div>
                </div>
                {/* 2nd bar */}
                <div className="mt-6">
                  <p className=" text-md font-poppins">JavaScript</p>
                  <div className="md:w-[753px] bg-white-500 w-full rounded-full h-3 dark:bg-white ">
                    <motion.div
                      className="bg-[#73A4CF] h-3 rounded-full w-[323px] md:w-[687px]"
                      initial="hidden"
                      animate={controls}
                      variants={jsVariants}
                      ref={ref}
                    ></motion.div>
                  </div>
                </div>
                {/* 3rd bar */}
                <div className="mt-6">
                  <p className="mt-2 text-md font-poppins">React</p>
                  <div className="md:w-[753px] bg-white-500 w-full rounded-full h-3 dark:bg-white ">
                    <motion.div
                      className="bg-[#73A4CF] h-3 rounded-full w-[323px] md:w-[687px]"
                      initial="hidden"
                      animate={controls}
                      variants={reactVariants}
                      ref={ref}
                    ></motion.div>
                  </div>
                </div>
                {/* 4th */}
                <div className="mt-6">
                  <p className="mt-2 text-md font-poppins">TailwindCSS</p>
                  <div className="md:w-[753px] bg-white-500 w-full rounded-full h-3 dark:bg-white ">
                    <motion.div
                      className="bg-[#73A4CF] h-3 rounded-full w-[323px] md:w-[687px]"
                      initial="hidden"
                      animate={controls}
                      variants={tailwindVariants}
                      ref={ref}
                    ></motion.div>
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

export default Skills;
