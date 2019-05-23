function setup() {
  createCanvas(windowWidth, windowHeight)
  d = 20
  x = random(d/2, windowWidth - d/2)
  y = random(d/2, windowHeight - d/2)
}

function draw() {
  background(220)
  ellipse(x, y )
}