console.log("button.js נטען");

let backgroundColors = [
  [197, 0, 0],
  [137, 94, 54],
  [67, 186, 20],
  [255, 122, 0],
  [61, 0, 109],
  [227, 205, 0]
];

let currentColorIndex = 0;
let targetColorIndex = 1;
let lerpAmount = 0;
let buttonText = 'ןאכ ץחל ליחתהל ידכ';
let buttonWidth = 200;
let buttonHeight = 50;
let buttonActive = true;
let buttonFont;

function preloadButton() {
  // טעינת הפונט המותאם אישית
  buttonFont = loadFont('font/EditorSans-MediumItalic.otf'); // החלף את הנתיב בנתיב האמיתי לקובץ הפונט שלך
}

function setupButton() {
  textFont(buttonFont);
}

function drawButton() {
  lerpAmount += 0.02;
  if (lerpAmount >= 1) {
    currentColorIndex = targetColorIndex;
    targetColorIndex = (targetColorIndex + 1) % backgroundColors.length;
    lerpAmount = 0;
  }
  
  let c1 = backgroundColors[currentColorIndex];
  let c2 = backgroundColors[targetColorIndex];
  let bgColor = [
    lerp(c1[0], c2[0], lerpAmount),
    lerp(c1[1], c2[1], lerpAmount),
    lerp(c1[2], c2[2], lerpAmount)
  ];
  
  let mouseXNormalized = mouseX / width;
  let colorIndex = floor(mouseXNormalized * backgroundColors.length);
  colorIndex = constrain(colorIndex, 0, backgroundColors.length - 1);
  bgColor = backgroundColors[colorIndex];
  
  // ציור הרקע
  fill(bgColor);
  noStroke();
  rect(0, 0, width, bottomSectionHeight);
  
  // ציור הכפתור
  if (buttonActive) {
    fill(255);
    rectMode(CENTER);
    rect(width/2, bottomSectionHeight/2, buttonWidth, buttonHeight, 10);
    
    fill(0);
    textAlign(CENTER, CENTER);
    textFont(buttonFont);
    textSize(16);
    text(buttonText, width/2, bottomSectionHeight/2);
  }
}

function buttonClicked() {
  if (buttonActive && 
      mouseX > width/2 - buttonWidth/2 && 
      mouseX < width/2 + buttonWidth/2 && 
      mouseY > canvasHeight - bottomSectionHeight/2 - buttonHeight/2 && 
      mouseY < canvasHeight - bottomSectionHeight/2 + buttonHeight/2) {
    console.log("הכפתור נלחץ!");
    buttonActive = false;
    // כאן תוכל להוסיף פעולות נוספות שיקרו כאשר הכפתור נלחץ
  }
}