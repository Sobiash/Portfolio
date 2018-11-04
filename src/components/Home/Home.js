import React from "react";
import RainBowText from "../RainBowText/RainBowText";
import "./Home.scss";
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
      <h2 class="intro">I really like writing code.</h2>
      <h2 class="intro">Especially in Python and JavaScript.</h2>
      <h2 class="intro">
        <em>(click anywhere to interact)</em>
      </h2>
    </div>
  );
};

export default home;
