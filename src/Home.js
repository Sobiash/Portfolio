import React from "react";
// import RainBowText from "./RainBowText";
import styles from "./Home.css";

const home = props => {
  const name = props.name;
  const letters = name.map((letter, index) => {
    if (letter !== " ") {
      return <span key={index}> {letter}</span>;
    } else {
      return <br key={index} />;
    }
  });

  return <span>{letters}</span>;
};
export default home;
