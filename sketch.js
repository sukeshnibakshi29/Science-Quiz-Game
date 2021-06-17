var bg,bg2,form,system,code,security;
var score=0;

function preload() {
 
  
  bg= loadImage("quizbg.jpg")
  //load image for the treasure background
  bg2 = loadImage("quizbg2.jpg");
}

function setup() {
  createCanvas(1000,500);
  security = new Security();
  system = new System();
  
  
  
}

function draw() {
  background(bg);
  
  security.display();
 
  drawSprites()
}