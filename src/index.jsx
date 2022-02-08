import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style.scss";
import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import StudyCase from "./components/StudyCase";
import { useState, useEffect } from "react";
import { ThemeContext } from "./ThemeContext";

const App = () => {

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode")
      ? localStorage.getItem("darkMode")
      : false
  );

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  });

  function toggleDarkMode() {
    setDarkMode((darkMode) => !darkMode);
  }

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <div className={darkMode ? "body-dark" : "body-light"}>
        <Router>
          <Navbar />
          <main className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/works" element={<Works />}>
                <Route
                  path="/works/:projectTitle-study-case"
                  element={<StudyCase />}
                />
              </Route>
            </Routes>
          </main>
          <Footer />
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
