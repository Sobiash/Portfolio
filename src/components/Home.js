import React from "react";
import RainBowText from "./RainBowText";
import "../styles/Home.scss";
const home = () => {
  const name = [
    "S",
    "O",
    "B",
    "I",
    "A",
    " ",
    "S",
    "H",
    "A",
    "H",
    "B",
    "A",
    "Z"
  ];
  return (
    <div className="name">
      <RainBowText text={name} />
      <p className="intro">
        <b>Front End Developer</b>
      </p>
      <p className="intro">I really like writing code.</p>
      <p className="intro">Especially in React and JavaScript.</p>
      <p className="intro">
        <em>(click anywhere to interact)</em>
      </p>
    </div>
  );
};

export default home;
