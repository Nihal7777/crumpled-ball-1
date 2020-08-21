
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,line1,line2,line3,paperObject;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=createSprite(400,680,800,10);
	ground.shapeColor=color("yellow");

	line1=createSprite(730,635,15,60);
	line1.shapeColor=color("white");

	line2=createSprite(530,635,15,60);
	line2.shapeColor=color("white");

	line3=createSprite(630,670,200,15);
	line3.shapeColor=color("white");



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  function keyPressed(){
	  if(keyCode === UP_ARROW){

	Matter.Body.applyForce(paperObject.Body,paperObject.Body.position,{x:85,y:-85})	;
	  }
  }
 
}



