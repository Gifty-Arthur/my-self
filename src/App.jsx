// App.js
// eslint-disable-next-line no-unused-vars
import React from "react";
import "./App.css";
import Navbar from "./Components/Pages/Navbar";
import { ThemeProvider } from "./Components/Pages/ThemeContext";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";

function App() {
  return (
    <ThemeProvider>
      <div>
        <Navbar />
        <Home />
        <About />
      </div>
    </ThemeProvider>
  );
}

export default App;
