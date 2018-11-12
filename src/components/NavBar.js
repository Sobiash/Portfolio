import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/NavBar.scss";

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav">
        <li>
          <NavLink
            to="/"
            exact
            activeStyle={{ borderBottom: "3px solid #4a4a4a" }}
            className="nav__link"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            exact
            activeStyle={{ borderBottom: "3px solid #4a4a4a" }}
            className="nav__link"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            exact
            activeStyle={{ borderBottom: "3px solid #4a4a4a" }}
            className="nav__link"
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            exact
            activeStyle={{ borderBottom: "3px solid #4a4a4a" }}
            className="nav__link"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
