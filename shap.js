// shap.js

let shapes = []; // מערך לשמירת הצורות
let texts = []; // מערך לשמירת הטקסטים
let shapeFont; // משתנה לגופן של הטקסט בתוך הצורות
let shapeFontSize = 16; // גודל הגופן של הטקסט בתוך הצורות
let shapeSize = 300; // גודל הצורות
let spacing = 400; // המרווח בין הצורות

function preloadShapes() {
  shapeFont = loadFont('font/EditorSans-MediumItalic.otf'); // טעינת הגופן
  
  // טעינת קבצי SVG של הצורות
  let shapeFiles = ['shapes/SHAPES-01.svg', 'shapes/SHAPES-02.svg', 'shapes/SHAPES-03.svg', 'shapes/SHAPES-04.svg', 'shapes/SHAPES-05.svg', 'shapes/SHAPES-06.svg'];
  for (let i = 0; i < shapeFiles.length; i++) {
    loadImage(shapeFiles[i], img => {
      shapes[i] = img;
      console.log(`Loaded shape ${i + 1}`);
    }, error => {
      console.error(`Failed to load shape ${i + 1}:`, error);
    });
  }
}

function setupShapes() {
  // הגדרת הטקסטים שיופיעו בתוך הצורות
  texts = ['םינומיל יליתש 5', 'תוינמכוא יליתש 3', 'םינכומ רזגה יליתש', 'םינופפלמ 5 לותשל ךירצ', 'רגניג רסח', '! תות הזיא'];
}

function drawShapes() {
  push();
  textFont(shapeFont);
  textSize(shapeFontSize);
  textAlign(CENTER, CENTER);
  
  let totalWidth = (shapes.length - 1) * spacing;
  let startX = (width - totalWidth) / 2;
  let y = height * 0.3; // מיקום אנכי ב-40% מגובה המסך
  
  for (let i = 0; i < shapes.length; i++) {
    if (shapes[i]) {
      let x = startX + i * spacing;
      
      push();
      translate(x, y);
      
      if (dist(mouseX, mouseY, x, y) < shapeSize / 2) {
        rotate(frameCount * 0.05);
      }
      
      // ציור הצורה SVG
      image(shapes[i], -shapeSize/2, -shapeSize/2, shapeSize, shapeSize);
      
      // ציור הטקסט בתוך הצורה
      fill(0);
      text(texts[i], 0, 0);
      
      pop();
    } else {
      console.log(`Shape ${i + 1} not loaded`);
    }
  }
  pop();
}