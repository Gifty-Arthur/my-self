import React from "react";
import logo from "../../assets/Images/logo.png";
import { useState } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-4 px-6 md:px-12">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-xl font-bold">
          {/* You can replace this text with your actual logo image or SVG */}
          <img src={logo} alt="Logo" className="h-10 w-auto bg-gray-800" />
        </div>

        {/* Copyright Section */}
        <div className="text-sm text-gray-400">
          <p>&copy; {currentYear} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
