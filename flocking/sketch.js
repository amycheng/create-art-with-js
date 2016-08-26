// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Demonstration of Craig Reynolds' "Flocking" behavior
// See: http://www.red3d.com/cwr/
// Rules: Cohesion, Separation, Alignment

// Click mouse to add boids into the system

var flock;

var text;

function setup() {
  createCanvas(800, 500);
  background(255);
  flock = new Flock();
  // Add an initial set of boids into the system
  for (var i = 0; i < 50; i++) {
    var b = new Boid(width/2,height/2);
    flock.addBoid(b);
  }
}

function draw() {
  background(255);
  flock.run();
}

