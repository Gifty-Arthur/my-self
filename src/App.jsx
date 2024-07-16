// App.js
// eslint-disable-next-line no-unused-vars
import React from "react";
import "./App.css";
import Navbar from "./Components/Pages/Navbar";
import { ThemeProvider } from "./Components/Pages/ThemeContext";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Skills from "./Components/Skills";
import Experience from "./Components/Pages/Experience";
import Projects from "./Components/Pages/Projects";
import Footer from "./Components/Pages/Footer";
import Foot from "./Components/Pages/Foot";

function App() {
  return (
    <ThemeProvider>
      <div>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Footer />
        <Foot />
      </div>
    </ThemeProvider>
  );
}

export default App;
