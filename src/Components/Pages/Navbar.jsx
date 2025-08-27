import React, { useState } from "react";
import { Link } from "react-scroll";
import logo from "../../assets/Images/logo.png";
import { FaArrowDown, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <nav>
      {/* #8C37EE */}
      <div className="nav-container shadow-lg w-full bg-white h-[110px] fixed top-0 left-0 z-50">
        <div className=" flex justify-between items-center h-full w-full px-4">
          <div>
            <img
              src={logo}
              alt="logo"
              className="h-[80px]  w-[80px] md:ml-10 mt-3 animate-bounce "
            />
          </div>
          {/* links */}
          <ul className=" items-center space-x-8 hidden md:flex">
            <li>
              <a
                href="/"
                className="text-lg text-gray-700 hover:text-purple-600 font-medium"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="text-lg text-gray-700 hover:text-purple-600 font-medium"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/projects"
                className="text-lg text-gray-700 hover:text-purple-600 font-medium"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-lg text-gray-700 hover:text-purple-600 font-medium"
              >
                Contact
              </a>
            </li>
          </ul>
          {/* cv bitton */}
          <button>
            <a
              href="/Gifty's Resume.pdf"
              download="Gifty's Resume.pdf"
              className=" hidden md:flex bg-gradient-to-r from-logo-bright-purple via-logo-primary-purple to-logo-dark-purple text-white px-4 py-2 font-poppins rounded-sm hover:from-logo-primary-purple hover:via-logo-bright-purple hover:animate-bounce hover:to-logo-bright-purple transition-all duration-300"
            >
              Download CV
              <FaArrowDown className="inline-block ml-2 hover:animate-bounce  " />
            </a>
          </button>
          {/* mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
              className="text-2xl p-2 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-md"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Dropdown Menu - Conditionally rendered */}
      <div
        className={`md:hidden absolute top-[110px] left-0 w-full bg-white shadow-lg z-20 
              transition-all duration-300 ease-in-out  
              ${
                isOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-4 pointer-events-none"
              }`}
      >
        <ul className="flex flex-col items-center py-4">
          <li className="py-2">
            <a
              href="/"
              className="text-lg text-gray-700 hover:text-purple-400 font-medium" // Fixed text color
              onClick={toggleMenu}
            >
              Home
            </a>
          </li>
          <li className="py-2">
            <a
              href="/about"
              className="text-lg text-gray-700 hover:text-purple-400 font-medium" // Fixed text color
              onClick={toggleMenu}
            >
              About
            </a>
          </li>
          <li className="py-2">
            <a
              href="/projects"
              className="text-lg text-gray-700 hover:text-purple-400 font-medium" // Fixed text color
              onClick={toggleMenu}
            >
              Projects
            </a>
          </li>
          <li className="py-2">
            <a
              href="/contact"
              className="text-lg text-gray-700 hover:text-purple-400 font-medium" // Fixed text color
              onClick={toggleMenu}
            >
              Contact
            </a>
          </li>
        </ul>
        <div className="pb-4 px-4 text-center">
          <a
            href="/Gifty's Resume.pdf"
            download="Gifty's Resume.pdf"
            className="bg-gradient-to-r from-logo-bright-purple     hover:animate-bounce via-logo-primary-purple to-logo-dark-purple text-white px-4 py-2 font-poppins rounded-sm flex items-center justify-center w-full"
          >
            Download CV
            <FaArrowDown className="inline-block ml-2" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
