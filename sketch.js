console.log("sketch.js נטען");

let canvasHeight = 2500; // גובה קבוע לקנבס
let bottomSectionHeight = 500; // גובה החלק התחתון

function preload() {
  console.log("preload נקרא");
  preloadCursor();
  preloadTitle();
  preloadShapes();
  preloadShlavim();
  preloadButton();
}

function setup() {
  console.log("setup נקרא");
  createCanvas(windowWidth, canvasHeight);
  setupCanvas();
  initGrid();
  setupCursor();
  setupTitle();
  setupShapes();
  setupShlavim();
  setupButton();
}

function draw() {
  clear();
  drawGrid();
  drawTitle();
  drawShapes();
  drawShlavim();
  updateCursor();
  
  push();
  translate(0, canvasHeight - bottomSectionHeight);
  drawButton();
  pop();
}

function windowResized() {
  console.log("windowResized נקרא");
  resizeCanvas(windowWidth, canvasHeight);
  initGrid();
  setupTitle();
  resizeShlavim();
  setupButton(); // מיקום מחדש של הכפתור
}

function mousePressed() {
  if (mouseY > canvasHeight - bottomSectionHeight) {
    buttonClicked();
  }
}

function mouseMoved() {
  updateCursor();
}

function touchMoved() {
  updateCursor();
  return false;
}

function windowScrolled() {
  updateShlavim();
}

window.addEventListener('scroll', windowScrolled);
