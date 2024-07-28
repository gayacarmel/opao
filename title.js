let opa = "OPA";
let lab = "Lab";
let titleFontSize = 200;
let amplitude = 20;
let frequency = 0.1;
let x, y;
let fontopa, fontlab;

function preloadTitle() {
  fontopa = loadFont("font/EditorSans_PRO-Black.otf");
  fontlab = loadFont("font/EditorSans-LightItalic.otf");
}

function setupTitle() {
  textAlign(CENTER, CENTER);
  x = width / 2;
  y = 250;
}

function drawTitle() {
  push();
  textSize(titleFontSize);
  let mouseOverOPA =
    mouseX > x - textWidth(opa) / 2 &&
    mouseX < x + textWidth(opa) / 2 &&
    mouseY > y - titleFontSize / 2 &&
    mouseY < y + titleFontSize / 2;

  let letterX = x - textWidth(opa + lab) / 2;

  // ציור "OPA"
  textFont(fontopa);
  for (let i = 0; i < opa.length; i++) {
    let offset = 0;
    if (mouseOverOPA) {
      offset = sin((frameCount + i * 10) * frequency) * amplitude;
    }
    fill(17, 66, 50);
    // strokeWeight(0.5);
    // stroke(51);
    text(opa[i], letterX, y + offset);
    letterX += textWidth(opa[i]);
  }

  // ציור "Lab"
  textFont(fontlab);
  for (let i = 0; i < lab.length; i++) {
    let offset = 0;
    if (mouseOverOPA) {
      offset =
        sin((frameCount + (i + opa.length) * 10) * frequency) * amplitude;
    }
    fill(17, 66, 50);
    text(lab[i], letterX, y + offset);
    letterX += textWidth(lab[i]);
  }
  pop();
}

function resizeTitle() {
  x = width / 2;
}
