// App.js
// eslint-disable-next-line no-unused-vars
import React from "react";
import "./App.css";
import Navbar from "./Components/Pages/Navbar";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Projects from "./Components/Pages/Projects";
import Contact from "./Components/Pages/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;
