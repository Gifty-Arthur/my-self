import React from "react";
import logo from "../../assets/Images/logo.png";

const Navbar = () => {
  return (
    <nav>
      {/* #8C37EE */}
      <div className="nav-container shadow-lg w-full bg-white h-[110px]">
        <div>
          <img
            src={logo}
            alt="logo"
            className="h-[80px] bg-white w-[80px] ml-10 mt-3"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
