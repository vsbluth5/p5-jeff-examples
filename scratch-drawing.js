let prevX, prevY;
function setup() {
  createCanvas(windowWidth, windowHeight);
}
function draw() {}
function mousePressed() {
  line(
    prevX + random(-10, 10),
    prevY + random(-10, 10),
    mouseX + random(-10, 10),
    mouseY + random(-10, 10)
  );
  line(
    prevX + random(-10, 10),
    prevY + random(-10, 10),
    mouseX + random(-10, 10),
    mouseY + random(-10, 10)
  );
  line(
    prevX + random(-10, 10),
    prevY + random(-10, 10),
    mouseX + random(-10, 10),
    mouseY + random(-10, 10)
  );
  prevX = mouseX;
  prevY = mouseY;
}
