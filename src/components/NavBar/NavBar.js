import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav">
        <li>
          <NavLink
            to="/"
            exact
            activeStyle={{ textDecoration: "underline" }}
            className="nav__link"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            exact
            activeStyle={{ textDecoration: "underline" }}
            className="nav__link"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            exact
            activeStyle={{ textDecoration: "underline" }}
            className="nav__link"
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            exact
            activeStyle={{ textDecoration: "underline" }}
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
