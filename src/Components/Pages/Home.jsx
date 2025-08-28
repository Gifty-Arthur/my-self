import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

import videoBg from "../../assets/Images/bgee.mp4"; // Make sure this path is correct

const Home = () => {
  const [text] = useTypewriter({
    words: ["", "A Frontend Developer."],
    loop: {}, // Loops indefinitely
    typeSpeed: 120,
    deleteSpeed: 80,
  });
  return (
    // Main container
    <div className="relative w-full h-screen overflow-hidden">
      <video
        src={videoBg}
        autoPlay
        loop
        muted
        className="absolute top-5 left-0 w-full h-full object-cover z-[-2]"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-[-1]"></div>

      {/* Content Container */}
      <div className="relative flex flex-col justify-center items-center h-full z-10 text-center px-4 md:px-10">
        <h1 className="text-white text-4xl md:text-6xl font-poppins">
          Hi, I'm Gifty 👋
        </h1>
        {/* --- RESPONSIVE FONT SIZE HERE --- */}
        <h2 className="text-white text-3xl md:text-5xl font-poppins mt-2">
          <span>{text}</span>
          <Cursor cursorStyle="|" />
        </h2>
      </div>
    </div>
  );
};

export default Home;
