import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./componets/Navbar.jsx"; // Correctly import the Navbar component
import styles from "./componets/Navbar.module.css"; // Import styles if needed
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Correct capitalization

const App = () => {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      <Navbar />
    </div>
  );
};

export default App;
