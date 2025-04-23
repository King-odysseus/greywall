import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";
import Slider from "./components/Slider";

const App = () => {
  return (
    <Router>
      <Navbar className="nav-custom" />
      <Routes>
        <Route
          path="/"
          element={
            <div className="page-container">
              <Home />
              <Slider /> {/* ✅ Add Slider inside the Home route */}
            </div>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </Router>
  );
};

export default App;
