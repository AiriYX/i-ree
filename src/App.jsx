import React from "react";
import "./App.css";
import Navbar from "./componets/Navbar.jsx"; // Correctly import the Navbar component
import styles from "./componets/Navbar.module.css"; // Import styles if needed
import index from "./index.jsx"; // Import index if needed
import { Routes, Route } from "react-router-dom"; // Correct capitalization
import { Home } from "./pages/Home.jsx";
import { Dashboard } from "./pages/Dashboard.jsx";

const Projects = () => <div>Projects</div>;
const AboutMe = () => <div>About me</div>;
// const dashBoard = () => <div>Dashboard</div>;

const App = () => {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      <Navbar />

      <Routes>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="about-me" element={<AboutMe />} />
        <Route path="dashboard" element={<Dashboard />} />

        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Routes>
    </div>
  );
};

export default App;
