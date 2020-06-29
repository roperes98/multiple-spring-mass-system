var gravity = 10;
var mass = 30;

var mass1PositionY = 238;
var mass1PositionX = 89
var mass1VelocityY = 0;
var mass1VelocityX = 0;

var mass2PositionY = 106;
var mass2PositionX = 85
var mass2VelocityY = 0;
var mass2VelocityX = 0;

var timeStep = 0.28;
var anchorX = 209;
var anchorY = 53;
var k = 8;
var damping = 10;

function hair() {
  var mass1SpringForceY = -k * (mass1PositionY - anchorY);
  var mass1SpringForceX = -k * (mass1PositionX - anchorX);

  var mass2SpringForceY = -k * (mass2PositionY - mass1PositionY);
  var mass2SpringForceX = -k * (mass2PositionX - mass1PositionX);

  var mass1DampingForceY = damping * mass1VelocityY;
  var mass1DampingForceX = damping * mass1VelocityX;

  var mass2DampingForceY = damping * mass2VelocityY;
  var mass2DampingForceX = damping * mass2VelocityX;

  var mass1ForceY = mass1SpringForceY + mass * gravity - mass1DampingForceY;
  var mass1ForceX = mass1SpringForceX - mass1DampingForceX;

  var mass2ForceY = mass2SpringForceY + mass * gravity - mass2DampingForceY;
  var mass2ForceX = mass2SpringForceX - mass2DampingForceX;

  var mass1AccelerationY = mass1ForceY/mass;
  var mass1AccelerationX = mass1ForceX/mass;

  var mass2AccelerationY = mass2ForceY/mass;
  var mass2AccelerationX = mass2ForceX/mass;

  mass1VelocityY = mass1VelocityY + mass1AccelerationY * timeStep;
  mass1VelocityX = mass1VelocityX + mass1AccelerationX * timeStep;

  mass2VelocityY = mass2VelocityY + mass2AccelerationY * timeStep;
  mass2VelocityX = mass2VelocityX + mass2AccelerationX * timeStep;

  mass1PositionY = mass1PositionY + mass1VelocityY * timeStep;
  mass1PositionX = mass1PositionX + mass1VelocityX * timeStep;

  mass2PositionY = mass2PositionY + mass2VelocityY * timeStep;
  mass2PositionX = mass2PositionX + mass2VelocityX * timeStep;
}