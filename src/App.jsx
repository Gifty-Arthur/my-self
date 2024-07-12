// App.js
// eslint-disable-next-line no-unused-vars
import React from "react";
import "./App.css";
import Navbar from "./Components/Pages/Navbar";
import { ThemeProvider } from "./Components/Pages/ThemeContext";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Skills from "./Components/Skills";

function App() {
  return (
    <ThemeProvider>
      <div>
        <Navbar />
        <Home />
        <About />
        <Skills />
      </div>
    </ThemeProvider>
  );
}

export default App;
