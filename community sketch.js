let communities = [];
let comimgs = [];

function preload() {
  for (let i = 0; i < 83; i++) {
    communities[i] = loadImage("./assets/community/community (" + i + ").png");
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  fill(255);
  // for (let x = 0; x < 1200; x = x + 100) {
  //   for (let y = 0; y < 1200; y = y + 100) {
  for (let i = 0; i < communities.length; i++) {
    let community = communities[i];
    let x = random(windowWidth);
    let y = random(windowHeight);
    let b = new Community(x, y, community);
    comimgs.push(b);
    //   }
    // }
  }
}

function draw() {
  background(0);

  for (let i = 0; i < comimgs.length; i++) {
    comimgs[i].move();
    comimgs[i].show();
  }
}

class Community {
  constructor(x, y, img) {
    this.x = x;
    this.y = y;
    this.community = img;
  }

  clicked(px, py) {
    // let d = dist(px, py, this.x, this.y);
    if (
      px > this.x &&
      px < this.x + this.community.width / 5 &&
      py > this.y &&
      py < this.y + this.community.height / 5
    ) {
      this.community = random(communities);
    }
  }

  move() {
    frameRate(4);
    this.x = this.x + random(-2, 2);
    this.y = this.y + random(-2, 2);
  }

  show() {
    image(
      this.community,
      this.x,
      this.y,
      this.community.width,
      this.community.height
    );
    // stroke(255);
    // strokeWeight(4);
    // fill(this.brightness, 125);
    // ellipse(this.x, this.y, this.r * 2);
  }
}
