import React, { useState } from "react";
import { Link } from "react-scroll";
import logo from "../../assets/Images/logo.png";
import { FaArrowDown, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinkClasses =
    "text-lg text-gray-700 hover:text-purple-600 font-medium cursor-pointer  transition-colors duration-300";
  const activeLinkClasses = "text-purple-600 font-bold";

  const links = [
    { to: "home", text: "Home" },
    { to: "projects", text: "Projects" },
    { to: "about", text: "About" },
    { to: "contact", text: "Contact" },
  ];

  return (
    <nav>
      <div className="nav-container shadow-lg w-full bg-white h-[110px] fixed top-0 left-0 z-50">
        <div className="flex justify-between items-center h-full w-full px-4 md:px-8">
          <div>
            <img
              src={logo}
              alt="logo"
              className="h-[80px] w-[80px] md:ml-10 mt-3 animate-bounce"
            />
          </div>

          {/* Desktop Menu */}
          <ul className="items-center space-x-8 hidden md:flex text-white">
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-110}
                  duration={500}
                  className={navLinkClasses}
                  activeClass={activeLinkClasses}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>

          {/* CV Button */}
          <a
            href="/Gifty's Resume.pdf"
            download="Gifty's Resume.pdf"
            className="hidden md:flex bg-gradient-to-r from-logo-bright-purple via-logo-primary-purple to-logo-dark-purple text-white px-4 py-2 font-poppins rounded-sm hover:from-logo-primary-purple hover:via-logo-bright-purple hover:animate-bounce hover:to-logo-bright-purple transition-all duration-300"
          >
            Download CV
            <FaArrowDown className="inline-block ml-2 mt-1" />
          </a>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
              className="text-2xl p-2 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-md"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        // FIXED: Changed z-20 to z-40 so it appears on top of page content
        className={`md:hidden fixed top-[110px] left-0 w-full bg-white shadow-lg z-40 
          transition-all duration-300 ease-in-out 
          ${
            isOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
      >
        <ul className="flex flex-col items-center py-4">
          {links.map((link) => (
            <li key={link.to} className="py-2">
              <Link
                to={link.to}
                spy={true}
                smooth={true}
                offset={-110}
                duration={500}
                className={navLinkClasses}
                activeClass={activeLinkClasses}
                onClick={toggleMenu} // Close menu on click
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
        <div className="pb-4 px-4 text-center">
          {/* ADDED: CV Button for mobile menu */}
          <a
            href="/Gifty's Resume.pdf"
            download="Gifty's Resume.pdf"
            className="flex items-center justify-center bg-gradient-to-r from-logo-bright-purple via-logo-primary-purple to-logo-dark-purple text-white px-4 py-2 font-poppins rounded-sm w-full"
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
