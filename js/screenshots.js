let screenshots = [];
let scrimgs = [];
let scrNumber = 0;
var clicks = 0;
let messages = [];

function preload() {
  for (let i = 0; i < 18; i++) {
    screenshots[i] = loadImage(
      "./assets/screenshots/Screenshot (" + i + ").png"
    );
  }
  console.log(screenshots.length + "items");
}

function mousePressed() {
  // imageMode(CENTER);
  if (clicks > screenshots.length) {
    let message = new Message(100, 100);
    messages.push(message);
    messages[0].show();
    console.log("message" + messages.length);
  }

  clicks++;
  console.log(clicks);
  let a = screenshots[clicks];
  let randomx = random(75);
  let randomy = random(75);
  let b = new Screenshot(randomx, randomy, a);
  scrimgs.push(b);

  for (let i = 0; i < scrimgs.length; i++) {
    scrimgs[i].show();
  }
}

// var canvasDiv = document.getElementById("contacts");
// var width = canvasDiv.offsetWidth;

function setup() {
  // imageMode(CENTER);

  let renderer = createCanvas(windowWidth, windowHeight / 1.2);
  renderer.parent("sketch-holder");
  background("red");
  // let width = round(float(css.marginLeft) + float(css.marginRight));
  // var canvas = createCanvas(width, 400);
  // canvas.parent("sketch-holder");
  // fitToContainer(canvas);

  // function fitToContainer(canvas) {
  //   canvas.style.width = "100%";
  //   canvas.style.height = "100%";
  //   canvas.width = canvas.offsetWidth;
  //   canvas.height = canvas.offsetHeight;
  // }

  // fill("red");
}

function draw() {
  background("grey");
  // scrimgs[i].clicked();
  messages[0].show();

  for (let i = 0; i < scrimgs.length; i++) {
    //   // scrimgs[i].move();
    scrimgs[i].show();
  }
  if (clicks > screenshots.length) {
    let message = new Message(100, 100);
    messages.push(message);
    messages[0].show();
    console.log("message" + messages.length);
  }
  messages[0].show();
}

class Screenshot {
  constructor(x, y, img) {
    this.x = x;
    this.y = y;
    this.screenshot = img;
  }

  clicked(px, py) {
    // let d = dist(px, py, this.x, this.y);
    if (
      px > this.x &&
      px < this.x + this.screenshot.width / 5 &&
      py > this.y &&
      py < this.y + this.screenshot.height / 5
    ) {
      this.screenshot = random(screenshots);
    }
  }

  move() {
    frameRate(4);
    this.x = this.x; //+ random(-2, 2);
    this.y = this.y; // + random(-2, 2);
  }

  show() {
    image(
      this.screenshot,
      this.x,
      this.y,
      this.screenshot.width / 2,
      this.screenshot.height / 2
    );
    // stroke(255);
    // strokeWeight(4);
    // fill(this.brightness, 125);
    // ellipse(this.x, this.y, this.r * 2);
  }
}

class Message {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  show() {
    fill("red");
    ellipse(this.x, this.y, 200, 200);
  }
}
// let i = 0;

// function mousePressed() {
//   // for (let i = 0; i < screenshots.length; i++) {
//   // i = i++;
//   // let a = screenshots[i];
//   // let x = random(500);
//   // let y = random(500);
//   // let s = new Screenshot(x, y, a);
//   // scrimgs.push(s);
//   // console.log(i);

// }

// scrimgs.forEach(myFunction);

function myFunction() {
  console.log("ehi");
}
