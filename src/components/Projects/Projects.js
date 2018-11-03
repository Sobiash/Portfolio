import React from "react";
import RainBowText from "../RainBowText/RainBowText";
import Card from "../Cards/Card";
import "./Projects.css";

const projects = () => {
  const projects = ["P", "R", "O", "J", "E", "C", "T", "S"];
  return (
    <div className="projects">
      <RainBowText text={projects} />
      <div className="cards">
        <div className="container">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default projects;
