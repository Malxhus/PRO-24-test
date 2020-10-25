var boxside1, boxside2, boxbottom
var ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

function preload(){
	
}

function setup() {
  engine =Engine.create()
  world = engine.world
	
	createCanvas(800, 650);

  ground = new Ground(400,620,width,20)
  paperObject = new paper(100,90,30)
  dustbin = new Dustbin(600,600)
  Engine.run(engine);
  
}


function draw() {
   background(0)
   rectMode(CENTER);
   
  Engine.update(engine)
  
  ground.display();
  paperObject.display();
  dustbin.display();
}

function keyPressed(){
    if (keyCode == UP_ARROW) {
     // what do I do here
	}
}



