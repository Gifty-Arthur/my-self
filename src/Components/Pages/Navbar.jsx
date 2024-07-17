// Navbar.js
// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { ThemeContext } from "./ThemeContext";
import { Link as ScrollLink } from "react-scroll";

// images
import logo from "../../assets/Images/logo.png";
import moon from "../../assets/Images/moon.png";
import sun from "../../assets/Images/sun.png";
import cv from "../../assets/Images/cv.pdf";

// icons

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={`w-full h-full ${
        theme === "dark" ? "bg-tertiary" : "bg-custom3"
      }`}
    >
      <nav
        className={`w-full h-[100px] shadow-lg  ${
          theme === "dark" ? "bg-tertiary" : "bg-custom3"
        }`}
      >
        <div className="container">
          <div className="  p-6 ">
            <nav className="flex justify-between items-center w-[100%] ">
              <div className="flex flex-row gap-2 ">
                <motion.img
                  src={logo}
                  alt=""
                  className="sm:w-[50px] sm:h-[50px] w-[30px] h-[30px]"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
                <h1
                  className={`sm:text-2xl font-poppins font-extrabold text-lg cursor-pointer text-[#E68369] sm:mt-2 mt-1 ${
                    theme === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  ARTHUR.
                </h1>
              </div>
              {/* links */}
              <div className="">
                <ul
                  className={`flex-row items-center text-lg  gap-8 md:flex hidden cursor-pointer ${
                    theme === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  <li>
                    <ScrollLink
                      to="Home"
                      smooth={true}
                      duration={500}
                      className={`text-xl hover:text-primary font-poppins font-semibold ${
                        theme === "dark" ? "text-white" : "text-black"
                      }`}
                    >
                      Home
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      to="About"
                      smooth={true}
                      duration={500}
                      className={`text-xl hover:text-primary font-poppins font-semibold ${
                        theme === "dark" ? "text-white" : "text-black"
                      }`}
                    >
                      About
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      to="Skills"
                      smooth={true}
                      duration={500}
                      className={`text-xl hover:text-primary font-poppins font-semibold ${
                        theme === "dark" ? "text-white" : "text-black"
                      }`}
                    >
                      Skills
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      to="Experience"
                      smooth={true}
                      duration={500}
                      className={`text-xl hover:text-primary font-poppins font-semibold ${
                        theme === "dark" ? "text-white" : "text-black"
                      }`}
                    >
                      Resume
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      to="Projects"
                      smooth={true}
                      duration={500}
                      className={`text-xl hover:text-primary font-poppins font-semibold ${
                        theme === "dark" ? "text-white" : "text-black"
                      }`}
                    >
                      Project
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      to="Footer"
                      smooth={true}
                      duration={500}
                      className={`text-xl hover:text-primary font-poppins font-semibold ${
                        theme === "dark" ? "text-white" : "text-black"
                      }`}
                    >
                      Contact
                    </ScrollLink>
                  </li>
                </ul>
              </div>
              {/* button */}
              <a href={cv} download>
                <button className="relative group overflow-hidden pl-6 h-14 space-x-6 items-center bg-primary rounded-full sm:flex hidden">
                  <span className="relative uppercase text-xl text-white font-poppins">
                    Download CV
                  </span>
                  <div
                    aria-hidden="true"
                    className="w-14 bg-red-600 transition duration-300 -translate-y-7 group-hover:translate-y-7"
                  >
                    <div className="h-14 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 m-auto fill-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="h-14 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 m-auto fill-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </button>
              </a>

              {/* mobile view */}
              <button className="w-[120px] h-[29px] bg-primary text-white rounded-md items-center mt-2 hover:text-black hover:bg-orange-900 flex sm:hidden justify-center">
                Download CV
              </button>

              {/* Theme Toggle */}
              <div className="">
                <img
                  src={theme === "light" ? moon : sun}
                  id="icon"
                  className="w-[30px] cursor-pointer"
                  alt=""
                  onClick={toggleTheme}
                />
              </div>
            </nav>
          </div>
        </div>

        {/* mobile side */}
      </nav>
    </div>
  );
}

export default Navbar;
