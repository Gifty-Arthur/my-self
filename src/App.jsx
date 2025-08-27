// App.js
// eslint-disable-next-line no-unused-vars
import React from "react";
import "./App.css";
import Navbar from "./Components/Pages/Navbar";
import { ThemeProvider } from "./Components/Pages/ThemeContext";
import Home from "./Components/Pages/Home";

function App() {
  return (
    <ThemeProvider>
      <div>
        <Navbar />
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
