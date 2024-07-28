// cursor.js
let svgFiles = ["icon/arti.svg", "icon/blueberry.svg", "icon/carret.svg","icon/peleplred.svg", "icon/pineapple.svg", "icon/shamp.svg"];
let svgs = [];
let currentSvgIndex = 0;
let moveCount = 0;
let changeFrequency = 20;
let cursorVisible = false;

function preloadCursor() {
  for (let i = 0; i < svgFiles.length; i++) {
    svgs[i] = loadImage(svgFiles[i]);
  }
}

function setupCursor() {
  // ניתן להוסיף כאן הגדרות נוספות אם נדרש
}

function updateCursor() {
  if (mouseY > 500 && !cursorVisible) {
    cursorVisible = true;
    noCursor();
  } else if (mouseY <= 500 && cursorVisible) {
    cursorVisible = false;
    cursor(ARROW);
  }

  if (cursorVisible && svgs.length > 0) {
    let currentSvg = svgs[currentSvgIndex];
    image(currentSvg, mouseX - currentSvg.width / 2, mouseY - currentSvg.height / 2);
  }
}

function mouseMoved() {
  if (cursorVisible) {
    moveCount++;
    if (moveCount >= changeFrequency) {
      currentSvgIndex = (currentSvgIndex + 1) % svgs.length;
      moveCount = 0;
    }
  }
}

function touchMoved() {
  if (cursorVisible) {
    moveCount++;
    if (moveCount >= changeFrequency) {
      currentSvgIndex = (currentSvgIndex + 1) % svgs.length;
      moveCount = 0;
    }
  }
  return false;
}