const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
const canvasContainer = document.querySelector(".canvas-container");

let mouseX;
let mouseY;
let padding = 0;

if (innerWidth < 768) padding = 30;
canvas.width = canvasContainer.clientWidth - padding;
canvas.height = canvasContainer.clientHeight;

const maxRadius = 35;

canvas.onmousemove = function(e) {
  mouseX = e.clientX - canvasContainer.getBoundingClientRect().left;
  mouseY = e.clientY - canvasContainer.getBoundingClientRect().top;
};

canvas.addEventListener("touchmove", function(e) {
  mouseX = e.touches[0].clientX - canvasContainer.getBoundingClientRect().left;

  mouseY = e.touches[0].clientY - canvasContainer.getBoundingClientRect().top;
});

addEventListener("resize", function() {
  if (innerWidth < 768) padding = 30;
  canvas.width = canvasContainer.clientWidth - padding;

  if (innerWidth < 768) {
    canvas.height = 240;
  } else {
    canvas.height = 400;
  }

  init();
});

function Circle(xCoordinate, yCoordinate, radius) {
  const randomNumber = Math.floor(Math.random() * 4);
  const randomTrueOrFalse = Math.floor(Math.random() * 2);

  this.xCoordinate = xCoordinate;
  this.yCoordinate = yCoordinate;
  this.radius = radius;
  this.color = colorArray[randomNumber];

  if (randomTrueOrFalse == 1) {
    this.xVelocity = -Math.random() * 1;
  } else {
    this.xVelocity = Math.random() * 1;
  }

  if (randomTrueOrFalse == 1) {
    this.yVelocity = -Math.random() * 1;
  } else {
    this.yVelocity = Math.random() * 1;
  }

  // As distance gets closer to 0, increase radius

  this.update = function() {
    this.xCoordinate += this.xVelocity;
    const xDistance = mouseX - this.xCoordinate;
    const yDistance = mouseY - this.yCoordinate;
    const originalRadius = radius;
    this.yCoordinate += this.yVelocity;

    // Movement Functions
    if (
      this.xCoordinate + this.radius > canvas.width ||
      this.xCoordinate - this.radius < 0
    ) {
      this.xVelocity = -this.xVelocity;
    }
    if (
      this.yCoordinate + this.radius > canvas.height ||
      this.yCoordinate - this.radius < 0
    ) {
      this.yVelocity = -this.yVelocity;
    }

    // Radius Decrease Functions
    // When distance between circle center and mouse on horizontal axis is less than 50, increase radius until it is equal to 35
    if (
      xDistance < 50 &&
      xDistance > -50 &&
      this.radius < maxRadius &&
      yDistance < 50 &&
      yDistance > -50
    ) {
      this.radius += 2;
    } else if (
      (xDistance >= 50 && originalRadius < this.radius) ||
      (xDistance <= -50 && originalRadius < this.radius) ||
      (yDistance >= 50 && originalRadius < this.radius) ||
      (yDistance <= -50 && originalRadius < this.radius)
    ) {
      this.radius -= 2;
    }

    this.draw();
  };

  this.draw = function() {
    c.beginPath();
    c.arc(
      this.xCoordinate,
      this.yCoordinate,
      Math.abs(this.radius),
      0,
      Math.PI * 2
    );
    c.fillStyle = this.color;
    c.fill();
  };
}

const colorArray = ["#272F32", "#9DBDC6", "#FF3D2E", "#DAEAEF"];
let circleArray;
function init() {
  circleArray = [];
  for (let i = 0; i < 800; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const radius = Math.random() * 5;
    circleArray.push(new Circle(x, y, radius));
  }
}

function updateAll() {
  requestAnimationFrame(updateAll);
  c.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < circleArray.length; i++) circleArray[i].update();
}

init();
updateAll();
