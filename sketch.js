const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var score=0;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
	world = engine.world;
  
  
  ground = new Ground(390,300,180,20);
  ground2 = new Ground(width/2,height,width,20);
  
  hexagone = new Shooter(100,190,50);
  slingshot = new Slingshot(hexagone.body,{x:100,y:195});

  // level 1
  block1 = new Block(330,235,30,40);
  block2 = new Block(360,235,30,40);
  block3 = new Block(390,235,30,40);
  block4 = new Block(420,235,30,40);
  block5 = new Block(450,235,30,40);

  // level 2
  block6 = new Block(360,195,30,40);
  block7 = new Block(390,195,30,40);
  block8 = new Block(420,195,30,40);

  // level 3
  block9 = new Block(390,155,30,40);
}

function draw() {
  time();
  if(hour>=06 && hour<=18){
    background("lightgrey");
  }
  else{
    background("black");
  }
  ground.display();
  ground2.display();
  hexagone.display();
  slingshot.display();

  // level 1
  block1.display();
  block1.score();
  block2.display();
  block2.score();
  block3.display();
  block3.score();
  block4.display();
  block4.score();
  block5.display();
  block5.score();

  // level 2
  block6.display();
  block7.display();
  block8.display();

  // level 3
  block9.display();

  fill("red");
  textSize(25);
  text("Score: "+score,670,20);
  Engine.update(engine);
}

function mouseDragged(){
  Matter.Body.setPosition(hexagone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(hexagone.body,{x:100,y:190});
    slingshot.attach(hexagone.body);
  }
}

async function time(){
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  responseJSON = await response.json();
  var dt = responseJSON.datetime;
  var hour = dt.slice(11,13);
}
