// howItWorks.js

let howItWorksSteps = [];
let howItWorksIcons = [];
let customFont;
let startY; // נגדיר את startY כמשתנה גלובלי

function preloadHowItWorks() {
  // טעינת האייקונים
  howItWorksIcons = [
    loadImage('icon/catalog.svg'),
    loadImage('icon/shovel.svg'),
    loadImage('icon/growing_plant.svg'),
    loadImage('icon/basket.svg'),
    loadImage('icon/lab.svg'),
    loadImage('icon/notebook.svg')
  ];
  
  // טעינת הפונט המותאם אישית
  customFont = loadFont('font/EditorSans-Normal.otf');
}

function setupHowItWorks() {
  startY = height * 0.6; // נגדיר את startY כ-60% מגובה המסך
  
  howItWorksSteps = [
    { title: "בחר ירק או פרי", description: "בחר ירק או פרי שתרצה לחקור" },
    { title: "שתול בגינה", description: "שתול אותו בגינה" },
    { title: "המתן לגדילה", description: "חכה שיגדל" },
    { title: "קטוף", description: "קטוף את הירק או הפרי" },
    { title: "התחל במחקר", description: "התחל במחקר" },
    { title: "תעד ממצאים", description: "תעד את כל הממצאים שלך" }
  ];
}

function drawHowItWorks() {
  push();
  
  if (!customFont) {
    console.error('Custom font not loaded');
    return;
  }
  
  textFont(customFont);
  
  // ציור הכותרת הראשית
  textAlign(CENTER, CENTER);
  textSize(32);
  fill(0);
  text("איך זה עובד", width / 2, startY - 100);
  
  // חישוב נקודת ההתחלה לציור השלבים
  let startX = width / 2 - (howItWorksSteps.length - 1) * 100;
  
  // ציור כל השלבים
  for (let i = 0; i < howItWorksSteps.length; i++) {
    if (!howItWorksIcons[i]) {
      console.error('Icon not loaded for step', i);
      continue;
    }
    
    let x = startX + i * 200;
    let y = startY;
    
    // ציור האייקון
    image(howItWorksIcons[i], x - 40, y - 40, 80, 80);
    
    // חישוב שקיפות הטקסט בהתאם למרחק העכבר
    let d = dist(mouseX, mouseY, x, y);
    let opacity = map(d, 0, 100, 255, 0);
    opacity = constrain(opacity, 0, 255);
    
    // ציור כותרת השלב
    fill(0, opacity);
    textSize(16);
    text(howItWorksSteps[i].title, x, y + 60);
    
    // ציור תיאור השלב
    textSize(12);
    text(howItWorksSteps[i].description, x, y + 80, 150, 60);
    
    // אנימציית קפיצה של האייקון
    let bounce = sin(frameCount * 0.1 + i) * 5;
    image(howItWorksIcons[i], x - 40, y - 40 + bounce, 80, 80);
  }
  
  pop();
}

function windowResizedHowItWorks() {
  startY = height * 0.6; // עדכון startY בעת שינוי גודל החלון
}