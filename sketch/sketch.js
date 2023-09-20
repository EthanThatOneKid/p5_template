function setup() {
  createCanvas(400, 400);
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(5, 163, 255);
  }

  ellipse(mouseX, mouseY, 80, 80);
}
