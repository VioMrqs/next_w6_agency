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
import Button from "./components/Button";

const Router = () => {
  return (
    <Router>
      <Navbar />
      <Button />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          {/* <Route path="/works/exercices" element={<Exercices />} />
          <Route path="/works/casestudy" element={<CaseStudy />} />
          <Route path="/works/concretecase" element={<ConcreteCase />} /> */}
        </Routes>
      </main>
    </Router>
  );
};

export default Router