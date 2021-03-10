const Engine = Matter.Engine,
      World = Matter.World,
      Events = Matter.Events,
      Bodies = Matter.Bodies

var engine,world; 
var dots = [];
var balls=[];
var rows=[];
var ground[];

var rowsHeight = 150;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.world;
  ground = new ground(200,500,1700,10);

  for(var j = 40; j<= width; j = j+50){
    balls.push(new balls(j , 55))
  }
  for(var j = 15; j<= width-10; j = j+50){
    balls.push(new balls(j ,85))
  }
  for(var j = 40; j<= width-10; j = j+50){
    balls.push(new balls(j ,120))
  }
  for(var j = 15; j<= width-10; j = j+50){
    balls.push(new balls(j ,150))
  }
  for(var j = 40; j<= width-10; j = j+50){
    balls.push(new balls(j ,185))
  }
  for(var j = 15; j<= width-10; j = j+50){
    balls.push(new balls(j ,225))
  }
  for(var j = 40; j<= width-10; j = j+50){
    balls.push(new balls(j ,265))
  }
  for(var j = 15; j<= width-10; j = j+50){
    balls.push(new balls(j ,305))
  }
  for(var k = 0; k <=width; k = k+80){
    rows.push(new rows(k, height-rowsHeight/2, 10, rowsHeight));
  }
}

function draw() {
  background(255,255,255);  
  drawSprites();
  if(frameCount % 30 === 0){
    dots = new dots(random(130, 400), 0, 7, random(0, 360));
    dots.push(dots);
  }
  Engine.update(engine, 25);
  for(var i = 0; i < dots.length; i++){
    dots[i].display();
  }

  for(var k = 0; k<rows.length;k++){
    rows[k].display();
  }

  for(var j = 0; j<balls.length;j++){
    balls[j].display();
  }

  //rows.display();
  ground.display();

  drawSprites();
}