import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <nav className="nav-custom">
      <ul className="nav-list">
        <li className="nav-item home-link">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item about-link">
          <Link className="nav-link" to="/about">
            About
          </Link>
        </li>
        <li className="nav-item contact-link">
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link  service-link" to="/services">
            Services
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
