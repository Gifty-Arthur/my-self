//images
import hero from "../../assets/Images/hero.png";

// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { TypeAnimation } from "react-type-animation";
import About from "./About";

function Home() {
  const { theme } = useContext(ThemeContext);

  // Define the text sequence for the animation

  return (
    <div
      className={`${
        theme === "dark"
          ? " bg-tertiary text-white"
          : "bg-custom3 text-black h-[7777px]"
      }`}
    >
      <div
        className={`w-full min-h-screen  ${
          theme === "dark" ? "bg-tertiary" : "bg-custom3"
        }`}
      >
        <div className="container ">
          <div className="md:flex flex-row gap-20 ">
            <div className="flex-col flex  ">
              <img src={hero} alt="" className=" mt-24 flex sm:hidden" />
              <h1 className=" text-[36px] font-poppins lg:text-[70px] font-bold sm:mt-32 ">
                Hi,
              </h1>
              <h1 className="text-[36px] font-poppins lg:text-[70px] font-bold">
                I am&nbsp;
                <span className="text-[36px] font-poppins lg:text-[70px] font-extrabold ">
                  <TypeAnimation
                    sequence={["Gifty", 2000]}
                    speed={50}
                    className="text-primary"
                    wrapper="span"
                    repeat={Infinity}
                    cursor={false}
                  />
                </span>
              </h1>
              <h1 className="text-[36px] font-poppins lg:text-[80px] font-extrabold">
                <TypeAnimation
                  sequence={["Arthur", 2000]}
                  speed={50}
                  className="text-primary "
                  wrapper="span"
                  repeat={Infinity}
                  cursor={false}
                />
              </h1>

              <h1 className="lg:text-[55px] text-[36px] font-semibold font-poppins">
                Frontend Web Developer
              </h1>
              <p className="font-poppins text-lg text-[#B0B0B4]">
                Ready to boost your brand and grow your business? <br />
                Let's team up! As a skilled developer, I'm here to help <br />
                turn your vision into reality.
                <span className="text-primary"> Let's make it happen!.</span>
              </p>

              {/* button */}
              <button
                className="relative group w-[188px]  h-[52px] bg-primary mt-8
                      before:absolute 
                      before:inset-0 
                      before:bg-red-700 
                      before:scale-x-0 
                      before:origin-right
                      before:transition
                      before:duration-300
                      hover:before:scale-x-100
                      hover:before:origin-left
                      "
              >
                <span className="relative uppercase text-xl text-white font-poppins">
                  Hire Me
                </span>
              </button>
            </div>
            <img
              src={hero}
              alt=""
              className="w-[514px] h-[515px] mt-28 ml-18 sm:flex hidden"
            />
          </div>
        </div>
        <About />
      </div>
    </div>
  );
}

export default Home;
