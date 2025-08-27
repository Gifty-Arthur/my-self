import React from "react";
import { useInView } from "react-intersection-observer";

const ScrollAnimation = ({ children }) => {
  const { ref, inView } = useInView({
    // Options
    triggerOnce: true, // Animation triggers only once
    threshold: 0.1, // Trigger animation when 10% of the element is visible
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-in-out 
                  ${
                    inView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
