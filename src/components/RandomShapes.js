import React from "react";
import "../styles/RandomShapes.scss";

class RandomShapes extends React.Component {
  componentDidMount() {
    const canvas = this.refs.canvas;
    const context = canvas.getContext("2d");

    document.addEventListener("click", myFun, false);

    function myFun(e) {
      let color = [];
      const mouseX = e.clientX - context.canvas.offsetLeft;
      const mouseY = e.clientY - context.canvas.offsetTop;

      const randomNumber = size => {
        return Math.floor(Math.random() * size + 2);
      };

      const randomChoice = () => {
        let colors = [
          "#ffecb1",
          "#afeaf2",
          "#c7e6c8",
          "#e5c5ea",
          "#fac9c8",
          "#ffdcaf",
          "#f097bb"
        ];

        let index = randomNumber(colors.length);
        return colors[index];
      };

      const numShapes = 3;
      const maxSize = 200;

      let sideLength = randomNumber(maxSize);
      let shapeType = randomNumber(numShapes);
      let radious = Math.floor(Math.random() * 70 + 2);

      if (shapeType % numShapes === 0) {
        context.beginPath();
        context.rect(mouseX, mouseY, sideLength, sideLength);
        context.fillStyle = randomChoice(color);
        context.fill();
      } else if (shapeType % numShapes === 1) {
        context.beginPath();
        context.moveTo(mouseX, mouseY);
        context.lineTo(mouseX + sideLength, mouseY);
        context.lineTo(mouseX + 0.5 * sideLength, mouseY - sideLength);
        context.fillStyle = randomChoice(color);
        context.fill();
      } else if (shapeType % numShapes === 2) {
        context.beginPath();
        context.arc(mouseX, mouseY, radious, 0, 2 * Math.PI, false);
        context.closePath();
        context.fillStyle = randomChoice(color);
        context.fill();
      }
    }
  }
  render() {
    return (
      <div>
        <canvas
          ref="canvas"
          width={window.innerWidth}
          height={window.innerHeight}
        />
      </div>
    );
  }
}

export default RandomShapes;
