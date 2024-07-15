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
      </div>
    </ThemeProvider>
  );
}

export default App;
