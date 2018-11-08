import React from "react";
import RainBowText from "./RainBowText";
import Card from "./Card";
import "../styles/Projects.scss";

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
