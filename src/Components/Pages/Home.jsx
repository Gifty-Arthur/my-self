/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import her from "../../assets/Images/her.png";
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";

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

function Home() {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      id="Home"
      className={`${
        theme === "dark" ? "bg-tertiary text-white" : "bg-custom3 text-black"
      }`}
    >
      <div
        className={`w-full md:h-[877px] h-full${
          theme === "dark" ? "bg-tertiary" : "bg-custom3"
        }`}
      >
        <div className="container">
          <div className="md:flex items-center justify-between">
            <div className="flex-col flex">
              <motion.img
                src={her}
                alt=""
                className="mt-20 flex md:hidden w-full "
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
              />
              <motion.h1
                className="text-[36px] font-poppins lg:text-[50px] font-bold lg:mt-40"
                variants={fadeIn("up", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
              >
                Hi,
              </motion.h1>
              <motion.h1
                className="text-[36px] font-poppins lg:text-4xl font-bold"
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                animate="show"
              >
                I am&nbsp;
                <span className="text-[36px] font-poppins lg:text-4xl font-extrabold">
                  <TypeAnimation
                    sequence={["Gifty", 2000, "", "Gifty", 2000]}
                    speed={50}
                    className="text-primary"
                    wrapper="span"
                    repeat={Infinity}
                    cursor={true}
                  />
                </span>
              </motion.h1>
              <motion.h1
                className="text-[36px] font-poppins lg:text-4xl font-extrabold"
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
              >
                <TypeAnimation
                  sequence={["Arthur", 2000]}
                  speed={50}
                  className="text-primary"
                  wrapper="span"
                  repeat={Infinity}
                  cursor={false}
                />
              </motion.h1>

              <motion.h1
                className="lg:text-3xl text-[26px] font-semibold font-poppins"
                variants={fadeIn("up", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
              >
                Frontend Web Developer
              </motion.h1>
              <motion.p
                className={`font-poppins text-md md:text-[21px] mt-2 ${
                  theme === "dark" ? "text-[#B0B0B4]" : "text-black"
                }`}
                variants={fadeIn("up", 0.7)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
              >
                Ready to boost your brand and grow your business? <br />
                Let's team up! As a skilled developer, I'm here to help
                <br /> turn your vision into reality.
                <span className="text-primary"> Let's make it happen!.</span>
              </motion.p>

              <div>
                <motion.button
                  className="relative group w-[188px] h-[52px] bg-primary md:mt-12 mt-8 before:absolute before:inset-0 before:bg-red-700 before:scale-x-0 before:origin-right before:transition before:duration-300 hover:before:scale-x-100 hover:before:origin-left"
                  variants={fadeIn("up", 0.7)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                >
                  <span className="relative uppercase text-xl text-white font-poppins">
                    Hire Me
                  </span>
                </motion.button>

                <motion.div
                  className="flex-wrap gap-6 mt-6 flex sm:hidden"
                  variants={fadeIn("up", 0.7)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                >
                  <a
                    href="https://www.instagram.com/tiitt_y?igsh=MTMzZG43ZmFianBxYw%3D%3D&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram
                      className={`${
                        theme === "dark" ? "text-white" : "text-black"
                      } w-[28px] h-[28px] sm:w-[32px] sm:h-[32px]`}
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/gifty-arthur-95316a1b5/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin
                      className={`${
                        theme === "dark" ? "text-white" : "text-black"
                      } w-[28px] h-[28px] sm:w-[32px] sm:h-[32px]`}
                    />
                  </a>
                  <a
                    href="https://github.com/Gifty-Arthur"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub
                      className={`${
                        theme === "dark" ? "text-white" : "text-black"
                      } w-[28px] h-[28px] sm:w-[32px] sm:h-[32px]`}
                    />
                  </a>
                </motion.div>
              </div>
            </div>
            <div>
              <motion.img
                src={her}
                alt=""
                className="md:w-[314px] md:h-[315px] w-full mt-16 ml-18 md:flex hidden"
                variants={fadeIn("down", 0.5)}
                initial="hidden"
                whileInView={"show"}
              />

              <div className="flex-wrap gap-6 lg:mt-20 lg:justify-center sm:flex hidden">
                <a
                  href="https://www.instagram.com/tiitt_y?igsh=MTMzZG43ZmFianBxYw%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram
                    className={`${
                      theme === "dark" ? "text-white" : "text-black"
                    } w-[28px] h-[28px] sm:w-[32px] sm:h-[32px]`}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/gifty-arthur-95316a1b5/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin
                    className={`${
                      theme === "dark" ? "text-white" : "text-black"
                    } w-[28px] h-[28px] sm:w-[32px] sm:h-[32px]`}
                  />
                </a>
                <a
                  href="https://github.com/Gifty-Arthur"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub
                    className={`${
                      theme === "dark" ? "text-white" : "text-black"
                    } w-[28px] h-[28px] sm:w-[32px] sm:h-[32px]`}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="md:mt-64 mt-20">
          <About />
        </div> */}
      </div>
    </section>
  );
}

export default Home;
