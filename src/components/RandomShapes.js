import React from "react";
import "../styles/RandomShapes.scss";

class RandomShapes extends React.Component {
  componentDidMount() {
    const canvas = this.refs.canvas;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const context = canvas.getContext("2d");
    document.addEventListener("click", myFun, false);

    function myFun(e) {
      let color = [];
      let mouseX = e.clientX - context.canvas.offsetLeft;
      let mouseY = e.clientY - context.canvas.offsetTop;

      const randomNumber = size => {
        return Math.floor(Math.random() * size);
      };

      const randomChoice = () => {
        let colors = [
          "#ffecb1",
          "#afeaf2",
          "#c7e6c8",
          "#e5c5ea",
          "#fac9c8",
          "#ffdcaf",
          "#f097bb",
          "#ffd7e5"
        ];
        let index = randomNumber(colors.length);
        return colors[index];
      };

      const numShapes = 3;
      const maxSize = 200;

      let sideLength = randomNumber(maxSize);
      let shapeType = randomNumber(numShapes);
      let radious = Math.floor(Math.random() * 70 + 1);
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

    window.addEventListener("resize", init);

    function init() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
  }
  render() {
    return (
      <div>
        <canvas ref="canvas" />
      </div>
    );
  }
}
export default RandomShapes;
