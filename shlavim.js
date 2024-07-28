console.log("shlavim.js נטען");

let shlavimSteps = [
  { title: "םיאצממ דעת .1", description: "ךלש םיאצממה לכ תא דעת" },
  { title: "הליתש .2", description: "הניגב ותוא לותש" },
  { title: "החימצ .3", description: "חמציש ןתמה" },
  { title: "ףוטק .4", description: "ירפה וא קריה תא ףוטק" },
  { title: "רקחמ .5", description: "רקחמב לחתה" },
  { title: "םיאצממ .6", description: "ךלש םיאצממה לכ תא דעת" }
];

let shlavimStartY;
let stepHeight;
let visibleThreshold;
let customFont;
let scrollPosition = 0;

function preloadShlavim() {
  console.log("preloadShlavim נקרא");
  customFont = loadFont('font/EditorSans-Normal.otf', 
    () => console.log("הגופן EditorSans-Normal.otf נטען בהצלחה"), 
    (err) => console.log("טעינת הגופן EditorSans-Normal.otf נכשלה:", err)
  );
}

function setupShlavim() {
  console.log("setupShlavim נקרא");
  shlavimStartY = height * 0.4;
  // שינוי: הקטנת המרווח בין השלבים מ-8% ל-6% מגובה המסך
  stepHeight = height * 0.06; // שינוי כאן
  visibleThreshold = height * 0.3;
}

function drawShlavim() {
  push();
  textFont(customFont || 'Arial');
  textAlign(CENTER, CENTER);
  for (let i = 0; i < shlavimSteps.length; i++) {
    let step = shlavimSteps[i];
    let y = shlavimStartY + i * stepHeight - scrollPosition;
    
    if (y < -stepHeight || y > height) continue;
    
    let visibility = constrain(map(y, height, height - visibleThreshold, 0, 1), 0, 1);
    
    push();
    translate(width / 2, y);
    
    let opacity = visibility * 255;
    
    // שינוי: הקטנת גודל הטקסט של הכותרת מ-28 ל-24
    textSize(24); // שינוי כאן
    fill(17, 66, 50, opacity);
    // שינוי: הקטנת המרווח בין הכותרת לתיאור
    text(step.title, 0, -10); // שינוי כאן
    
    // שינוי: הקטנת גודל הטקסט של התיאור מ-20 ל-18
    textSize(18); // שינוי כאן
    fill(17, 66, 50, opacity);
    // שינוי: הקטנת המרווח בין הכותרת לתיאור
    text(step.description, 0, 10); // שינוי כאן
    
    pop();
  }
  pop();
}

function updateShlavim() {
  console.log("updateShlavim נקרא");
  scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  drawShlavim();
}

function resizeShlavim() {
  console.log("resizeShlavim נקרא");
  shlavimStartY = height * 0.4;
  // שינוי: עדכון המרווח בין השלבים גם כאן
  stepHeight = height * 0.06; // שינוי כאן
  visibleThreshold = height * 0.3;
}