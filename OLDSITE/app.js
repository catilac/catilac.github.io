/**
 * Doodle dee doo
 * By: Doron and Chirag
 */

const rectWidth = 300;
let hexWidth;
// let colors = [
//   "darkturquoise",
//   "brown"
// ];
// "#0f2b3d",
var colors = ["#4f4555","#fc354c",
    "#18302f","#fc354c","#4f4555","#fc354c","#09225b","#924161","#fa5c41",
    "#6d5b39","#fc4e45","#0f2b3d","#fc194a","#361032","#186061","#fc5d4b",
    "#615839","#ee1744","#12365a","#fc1467","#0d5355","#fb6447","#021033",
    "#e84a61","#513d3c","#fc2147","#0d4e38","#724a3e","#fc2841","#114247",
    "#fc5b49"];

let fc = 0;

let triangleFolding = false

function setup() {
  angleMode(DEGREES);
  //noStroke();
  hexWidth = rectWidth - rectWidth * (1-cos(30));
  let myCanv = createCanvas(windowWidth, windowHeight);
  // let myCanv = createCanvas(4*rectWidth, 4*rectWidth);
  myCanv.position(0, 0);
  // frameRate(30);
}

function draw() {
  // if (keyIsPressed) {
    d();
  // }
}

function d() {
  background(colors[1]);
  fill(colors[0]);
  noStroke()
  // scale(-cos(frameCount)/2 + 1.5);
  if (!triangleFolding) {
    fc += 0.25;
    rotatingHexes();
    if(fc % 60 == 0) {
      fc = 0;
      triangleFolding = !triangleFolding;
    }
  } else {
      fc += .75;

    if (fc % 180 == 0) {
      colors = [colors[1], colors[0]];
      triangleFolding = !triangleFolding;
    }
    foldingTriangles();
  }

}

function foldingTriangles() {
  for (let i = 0; i <= (windowWidth/rectWidth + 2); i++) {
    for (let j = 0; j <= (windowHeight/rectWidth + 3); j++) {
      push();
        if(j % 2 == 0) {
          translate(hexWidth/2, 0);
        }
        const translateUp = rectWidth / 2 - (rectWidth/2)*sin(30);
        translate(i * hexWidth, j*(rectWidth - translateUp) );
        rotate(30);
        scale(sqrt(3)/2);
        for (let tri = 0; tri < 6; tri++) {
          // draw the triangles
          push();
            // if(j%2 == 0)
            // rotate(tri * 60);
            // else
            rotate(-tri * 60);
            translate(hexWidth/2, 0);
            // if (j % 2==0)
            rotate(lerp(180, 0, -cos(fc)/2 + .5));
            // else
            // rotate(-lerp(180, 0, -cos(fc)/2 + .5));
            // scale(lerp(1, .5, -cos(fc * 2)/2 + .5));
            scale(lerp(1, .4, -cos(fc * 2)/2 + .5));
            triangle(0, -translateUp, 0, translateUp, translateUp * sqrt(3), 0);
          pop();
        }
      pop();
    }
  }

}

function rotatingHexes() {
  for (let i = 0; i <= (windowWidth/rectWidth + 2); i++) {
    for (let j = 0; j <= (windowHeight/rectWidth + 3); j++) {
      push();
        if(j % 2 == 0) {
          translate(hexWidth/2, 0);
        }
        const translateUp = rectWidth / 2 - (rectWidth/2)*sin(30);
        translate(i * hexWidth , j*(rectWidth - translateUp));
        if (j% 2 == 0)
        rotate(fc * 3);
        else
          rotate(-fc * 3);
        scale(lerp(sqrt(3)/2, .7, -cos(fc*6)/2 + .5));
        hexagon(0, 0, rectWidth/2);

      pop();
    }
  }
}

function hexagon(posX, posY, rad) {
  push();
    angleMode(DEGREES);
    translate(posX, posY);
    beginShape();
      for (var i = 0; i < 6; i++) {
        const angle = 60 * i;
        vertex(rad * cos(angle), rad * sin(angle));
      }
    endShape(CLOSE);
  pop();
}

function* nested(a, b) {
  for (let i = 0; i < a; i++) {
    for (let j = 0; j < j; j++) {
      yield [i, j];
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}