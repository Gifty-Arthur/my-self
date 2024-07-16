// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Foot() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`${
        theme === "dark" ? "bg-tertiary text-white" : "bg-custom3 text-black"
      } flex items-center justify-center`}
    >
      <div
        className={`w-full md:h-[799px] h-full ${
          theme === "dark" ? "bg-tertiary" : "bg-custom3"
        } flex items-center justify-center`}
      >
        <div className="bg-[#121212] w-full h-[84px] md:mt-0 mt-4">
          <div className="mx-auto container">
            <div className="flex items-center justify-center mt-5">
              <p className="md:text-2xl text-base font-poppins">
                © 2024 <span className="text-primary">Gifty Arthur</span> All
                Right Reserved, Inc
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Foot;
