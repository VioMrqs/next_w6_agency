import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style.scss";
import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";
// import Exercices from "./pages/Works/pages/Exercices";
// import CaseStudy from "./pages/Works/pages/CaseStudy";
// import ConcreteCase from "./pages/Works/pages/ConcreteCase";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { useState } from "react";
import { ThemeContext } from "./ThemeContext";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode((darkMode) => !darkMode);
  }

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <div
        className={
          darkMode ? "body-dark" : "body-light"
        }
      >
        <Router>
          <Navbar />
          <main
            className="container"
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/works" element={<Works />} />
              {/* <Route path="/works/exercices" element={<Exercices />} />
          <Route path="/works/casestudy" element={<CaseStudy />} />
          <Route path="/works/concretecase" element={<ConcreteCase />} /> */}
            </Routes>
          </main>
          <Footer />
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
