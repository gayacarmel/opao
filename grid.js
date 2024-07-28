// grid.js
let colors = [
  [197, 0, 0],
  [137, 94, 54],
  [67, 186, 20],
  [255, 122, 0],
  [61, 0, 109],
  [227, 205, 0]
];
let rows = 10;
let cols;
let cellSize;
let circleColors = [];

function drawGrid() {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let x = j * cellSize + cellSize / 2;
      let y = i * cellSize + cellSize / 2;
      
      fill(circleColors[i][j]);
      ellipse(x, y, cellSize * 0.8);
      noStroke();
    }
  }
  
  if (frameCount % 60 === 0) {
    updateColors();
  }
}

function initGrid() {
  cellSize = 50;  // גודל קבוע לכל תא
  cols = floor(windowWidth / cellSize);
  
  // אתחול מערך הצבעים
  circleColors = [];
  for (let i = 0; i < rows; i++) {
    circleColors[i] = [];
    for (let j = 0; j < cols; j++) {
      circleColors[i][j] = random(colors);
    }
  }
}

function updateColors() {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (random() < 0.1) {  // 10% סיכוי לשינוי צבע
        circleColors[i][j] = random(colors);
      }
    }
  }
}