function setup(){
  // Code here runs only once
  createCanvas(800, 600);
  ground = 20;
  player = new Player();
  gravity = 0.7;
  apple = {
    x: random(width - 36),
    y: random(70, height - 60)
  }
  score = 0;
}

function draw(){
  // Player color
  fill(255, 255, 255);
  background(220);
  line(0, height-ground, width, height-ground);
  player.move();
  player.display();
  // Apple color
  fill(255, 100, 100)
  circle(apple.x, apple.y, 36);
  if (collideCircleCircle(apple.x + 18, apple.y + 18, 36, player.x, player.y, player.r * 2)) {
    collectApple();
  }
  // Text color
  fill(0,0,0);
  textSize(14);
  text("Press and hold the arrow keys to move. Press SPACE to jump.", 20, 25);
  text(`You've collected ${score} apple${score === 1 ? "" : "s"}!`, 20, 50);
  
}

function collectApple() {
  console.log("Collected!");
  apple.x = random(width - 36);
  apple.y = random(70, height - 60);
  score += 1;
}


class Player {
  constructor() {
    this.x = width/2;
    this.y = height - 60;
    this.yv = 0;
    this.speed = 0;
    this.absStart = 3;
    this.absMax = 4;
    this.r = 10;
  }
  
  move() {
    if (keyIsPressed) {
      if (keyCode === RIGHT_ARROW || keyCode === LEFT_ARROW) {
        this.speed *= 1.1;
        if (abs(this.speed) >= this.absMax) {
          this.speed = this.speed / abs(this.speed) * this.absMax; // keep the sign, hold at max
        }
      }
    } else {
      this.speed =0
    }
    this.x += this.speed;
    this.y += this.yv;
    this.yv += gravity;
    if (this.y + this.r >= height-ground) {
      this.y = height-ground - this.r
      this.yv = 0;
    }
  }
  
  display() {
    ellipse(this.x, this.y, this.r * 2);
  }
  
  jump() {
    console.log("jump")
    this.y += 2;
    this.yv = -15;
  }
  
  go(direction) {
    if (direction === "right") {
      this.speed = this.absMax;
    } else if (direction === "left") {
      this.speed = -1 * this.absMax;
    }
  }
}

function keyPressed() {
  if (keyCode === 32) {
    player.jump();
  } else if (keyCode === LEFT_ARROW) {
    console.log("going left!")
    player.go("left");
  } else if (keyCode === RIGHT_ARROW) {
    player.go("right");
  }
}

