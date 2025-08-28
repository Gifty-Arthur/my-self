import React from "react";
import ScrollAnimation from "../ScrollAnimation";
import s1 from "../../assets/Images/s1.png";
import s3 from "../../assets/Images/s3.png";
import s2 from "../../assets/Images/s2.png";
import s4 from "../../assets/Images/s4.png";
import s6 from "../../assets/Images/s6.png";
import s9 from "../../assets/Images/s8.png";

const projectsData = [
  {
    img: s1,
    link: "https://g-client-admin-xi.vercel.app/dashboard",
    name: "Admin Dashboard",
  },
  {
    img: s3,
    link: "https://e-commerce-website-tawny-beta.vercel.app/",
    name: "E-Commerce Site",
  },
  {
    img: s2,
    link: "https://g-client-learner.vercel.app/",
    name: "Project Three",
  },
  {
    img: s4,
    link: "https://grocery-website-zeta.vercel.app/",
    name: "Analytics Panel",
  },
  {
    img: s6,
    link: "https://charity-website-omega.vercel.app/",
    name: "Charity Website",
  },
  {
    img: s9,
    link: "https://agency-website-mu-three.vercel.app/",
    name: "Donation Platform",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <ScrollAnimation>
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            My Projects
          </h1>
          <p className="mt-5 font-poppins text-gray-600">
            A collection of my recent work in frontend development.
          </p>
        </div>
      </ScrollAnimation>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-10 mt-10">
        {projectsData.map((project, index) => (
          <ScrollAnimation key={index}>
            <div className="bg-white rounded-lg shadow-xl h-[280px] flex items-center justify-center p-4">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.img}
                  alt={project.name}
                  className="max-w-full max-h-[180px] object-contain rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </a>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  );
};

export default Projects;
