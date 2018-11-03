import React from "react";
import "./RainBowText.css";

const rainBowText = props => {
  const text = props.text;
  const letters = text.map((letter, index) => {
    if (letter !== " ") {
      return <span key={index}> {letter}</span>;
    } else {
      return <br key={index} />;
    }
  });

  return <span>{letters}</span>;
};
export default rainBowText;
