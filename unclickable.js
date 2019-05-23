function setup() {
  createCanvas(windowWidth, windowHeight)
  d = 50
  x = random(d/2, windowWidth - d/2)
  y = random(d/2, windowHeight - d/2)
  prevMouseX = 0
  prevMouseY = 0
}

function draw() {
  velocity = dist(prevMouseX, prevMouseY, mouseX, mouseY)
  if (dist(mouseX, mouseY, x, y) <= d + 20 && velocity > 2) {
    x = random(d/2, windowWidth - d/2)
    y = random(d/2, windowHeight - d/2)
  }
  background(220)
  fill(240, 220, 220)
  ellipse(x, y, d) 
  fill(0)
  text("click me", x-21, y)
  prevMouseX = mouseX
  prevMouseY = mouseY
}

function mousePressed() {
  if (dist(mouseX, mouseY, x, y) <= d) {
    alert("You win!")
  }
}