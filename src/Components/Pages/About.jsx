import React from "react";
// Corrected import path assuming both files are in the same folder
import ScrollAnimation from "../ScrollAnimation";
import her from "../../assets/Images/heer.jpg";
import { FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { BsInstagram } from "react-icons/bs";
import { DiGithub } from "react-icons/di";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 min-h-screen flex flex-col justify-center"
    >
      <ScrollAnimation>
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl mt-18 md:mr-0 mr-8 font-bold text-gray-800">
            About Me
          </h1>
          {/* You can add your 'About Me' content here */}
        </div>
        <div className="mt-10 md:flex items-center justify-center ">
          <img
            src={her}
            alt="About Me"
            className="w-64 h-64 md:w-80 rounded-full md:h-80 ml-10 md: object-cover shadow-lg"
          />
          <div>
            <p className="text-lg text-gray-700 max-w-3xl mt-6 md:mt-0 md:ml-10 align-justify px-4">
              I am a Frontend Developer with expertise in both web and mobile. I
              build stylish, modern websites and applications, focusing on
              creating intuitive digital experiences that users love. My passion
              lies in bridging the gap between beautiful design and functional
              code. Proficient in modern technologies. I specialize in turning
              complex problems into elegant, responsive solutions. I am
              dedicated to writing clean, maintainable, and high-performance
              code that brings a user interface to life.
            </p>
            <div className="bg-white w-[164px] h-[52px] rounded-lg shadow-lg flex-shrink-0 mt-6 ml-24 md:mt-3 ">
              <div className="flex justify-around items-center mt-5 py-2 ">
                <a
                  href="https://github.com/Gifty-Arthur"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <DiGithub
                    size={28}
                    className="text-purple-600  transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 hover:shadow-xl"
                  />
                </a>
                <a href="">
                  <FaWhatsapp
                    size={24}
                    className="text-purple-600  transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 hover:shadow-xl"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/gifty-arthur-95316a1b5/"
                  target="_blank"
                  rel="noopener noreferrer  transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 hover:shadow-xl"
                >
                  <CiLinkedin
                    size={24}
                    className="text-purple-600  transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 hover:shadow-xl"
                  />
                </a>
                <a href="https://www.instagram.com/tiitt_y/">
                  <BsInstagram
                    size={22}
                    className="text-purple-600  transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 hover:shadow-xl"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default About;
