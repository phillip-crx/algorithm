var a,b;

function setup() {
  createCanvas(800,400);
  a = createSprite(400, 200, 50, 50);
  a.shapeColor = "red"
  b = createSprite(400,100,10,30);
  b.shapeColor = "red"
}

function draw() {
  background(255,255,255);
  a.x = mouseX 
  a.y = mouseY  
  if(a.x-b.x<a.width/2+b.width/2&&b.x-a.x<a.width/2+b.width/2&&a.y-b.y<a.height/2+b.height/2&&b.y-a.y<b.height/2+a.height/2) {
    a.shapeColor = "blue"
    b.shapeColor = "blue"
  }
  else  {
   a.shapeColor = "red"
   b.shapeColor = "red"
  }
  
  drawSprites();
}