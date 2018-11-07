import React from "react";
import "../../styles/RainBowText/RainBowText.scss";

const rainBowText = props => {
  const text = props.text;
  const letters = text.map((letter, index) => {
    if (letter !== " ") {
      return (
        <span className="letter" key={index}>
          {" "}
          {letter}
        </span>
      );
    } else {
      return <br key={index} />;
    }
  });

  return <div>{letters}</div>;
};
export default rainBowText;
