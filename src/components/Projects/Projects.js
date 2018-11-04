import React from "react";
import RainBowText from "../RainBowText/RainBowText";
import Card from "../Cards/Card";
import "./Projects.scss";

const projects = () => {
  const projects = ["P", "R", "O", "J", "E", "C", "T", "S"];
  return (
    <div className="projects">
      <RainBowText text={projects} />
      <Card />
    </div>
  );
};

export default projects;
