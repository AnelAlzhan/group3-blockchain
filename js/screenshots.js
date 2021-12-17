let screenshots = [];
let scrimgs = [];

function preload() {
  for (let i = 0; i < 18; i++) {
    screenshots[i] = loadImage(
      "./assets/screenshots/Screenshot (" + i + ").png"
    );
  }
  console.log(screenshots.length + "items");
}

let container;

function setup() {
  createCanvas(windowWidth, windowHeight);

  fill(255);

  //   for (let i = 0; i < screenshots.length; i++) {
  //     container.createImg(screenshots[i]).position(i * 10, i * 10);
  //   }
  // for (let x = 0; x < 1200; x = x + 100) {
  //   for (let y = 0; y < 1200; y = y + 100) {
  //     for (let i = 0; i < screenshots.length; i++) {
  //       let community = screenshots[i];
  //       let x = random(windowWidth);
  //       let y = random(windowHeight);
  //       let b = new Screenshot(x, y, community);
  //       scrimgs.push(b);
  //     }
  //   }
  // }
  for (let i = 0; i < screenshots.length; i++) {
    let a = screenshots[i];
    let b = new Screenshot(i * 20, i * 20, a);
    scrimgs.push(b);
  }
  // const container = select("#sketch-holder");
  // for (let i = 0; i < screenshots.length; i++) {
  //   container.createImg(screenshots[i], "DDD").position(i * 10, i * 10);
  // }
}

function draw() {
  background(0);

  for (let i = 0; i < scrimgs.length; i++) {
    scrimgs[i].move();
    scrimgs[i].show();
  }
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
      this.screenshot.width / 5,
      this.screenshot.height / 5
    );
    // stroke(255);
    // strokeWeight(4);
    // fill(this.brightness, 125);
    // ellipse(this.x, this.y, this.r * 2);
  }
  changeGray() {
    d = d + 10;
    if (d > 100) {
      d = 0;
    }
  }
}
