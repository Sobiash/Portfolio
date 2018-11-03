import React from "react";
import RainBowText from "../RainBowText/RainBowText";
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
      <RainBowText name={name} />
      <h2 class="intro">I really like writing code.</h2>
      <h2 class="intro">Especially in Python and JavaScript.</h2>
      <h2 class="intro">
        <em>(click anywhere to interact)</em>
      </h2>
    </div>
  );
};

export default home;