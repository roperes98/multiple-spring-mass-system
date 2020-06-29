function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if(mouseIsPressed == true){
    anchorX = mouseX;
    anchorY = mouseY;
  }

  hair();

  background(220);
  ellipse(anchorX - 5, anchorY - 5, 50, 50);

  line(mass1PositionX, mass1PositionY, anchorX, anchorY);
  ellipse(mass1PositionX, mass1PositionY, 1, 1);

  line(mass2PositionX, mass2PositionY, mass1PositionX, mass1PositionY);
  ellipse(mass2PositionX, mass2PositionY, 2, 2);
}