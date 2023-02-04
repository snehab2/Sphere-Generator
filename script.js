var number = 30;
function setup() {
  createCanvas(windowWidth*0.975, windowHeight, WEBGL); //takes up the whole screen; not responsive though
  background(230);
}

// random spheres
function draw() {
  if(key === 'c' || key === 'C') {
    fill(random(255), random(255), random(255));
  }
  else if (key === 'w' || key === 'W') {
    fill(255, 255, 255);
  }
  else {
    keyPressed();
  }

  // delay random so it's easy on the eyes
  if(millis() % 30 === 0) {
    sphere(random(500));
  }
  
}

function keyPressed() {
  if(keyCode === BACKSPACE) {
    noLoop();
  }
  else if(keyCode === ENTER) {
    loop();
  }

  // allow the user to determine the frame rate but i forgot that in p5.js everything loops constantly so this is a problem for another day
  // else if(keyCode === UP_ARROW) {
  //   number++;
  //   console.log(number);
  //   if(millis() % number === 0) {
  //     sphere(random(1000));
  //   }
  // }
  // else if(keyCode == DOWN_ARROW && number > 0) {
  //   number--;
  //   console.log(number);
  //   if(millis() % number === 0) {
  //     sphere(random(1000));
  //   }
  // }
}

// // random points
// function draw() {
//   if(key === 'c') {
//     stroke(random(255), random(255), random(255));
//   }
//   else if (key === 'x') {
//     // fill(255, 255, 255);
//     stroke('black');
//   }

//   strokeWeight(random(1000));
//   // point(random(windowWidth), random(windowHeight));
//   point(random(1000), random(1000));
// }