import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/NotFound.scss";

const NotFound = () => {
  return (
    <h2>
      Please go back to{" "}
      <NavLink to="/Portfolio" exact className="nav__link">
        Home
      </NavLink>
    </h2>
  );
};

export default NotFound;
