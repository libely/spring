let weight;
let wVel;
let wAcc;
let weightHeight;
let weightWidth;
let k;
let damp;
let force;
let mass;
let leftBorder;
let rest;
let rightBorder;
let over;
let move;

function setup() {
  createCanvas(800, 800);
  k = 0.05;
  force = 0;
  mass = 10;
  wVel = 0;
  wAcc = 0;
  damp = 0.8;
  weightHeight = 70;
  weightWidth = 30;
  leftBorder = 100;
  rightBorder = 200;
  weight = createVector(200,400);
  over = false;
  move = false;
  
}

function draw() {  
  background(220);
  calculate();
  drawSpring();  
}  

function calculate ()  {
  wAcc = -((damp*wVel)/mass)-((k*(weight.x-200))/mass);
  wVel += wAcc;
  weight.x += wVel;
  console.log(weight.x);
  
  if (mouseX > weight.x && mouseX < weight.x + weightWidth && mouseY > weight.y && mouseY < weight.y + weightHeight) {
    over = true;
  }
  else over = false;
  
  if (move){
    weight.x = mouseX-weightWidth/2;
   //eight.x = constrain(weight.x, leftBorder, rightBorder);
    
  }
}


function drawSpring()  {

  if (over) fill(0);
  else fill (255);
  
  strokeWeight(2);
  stroke(0);
  rect(weight.x, weight.y, weightWidth, weightHeight);
  line(0, weight.y+weightHeight/2, weight.x, weight.y+weightHeight/2);
  strokeWeight(4);
  stroke('rgba(0,0,0,0.5)')
  line(0, weight.y+weightHeight, width, weight.y+weightHeight);
}
function mousePressed() {
  if (over) {
    move = true;
  }
}

function mouseReleased() {
  move = false;
}
