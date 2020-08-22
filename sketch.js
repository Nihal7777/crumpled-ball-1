
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,line1,line2,line3,ball,dustbin;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	ground=new Ground(400,690,800,20);

	dustbin=new Dustbin(630,670);

	ball=new Paper(50,670,30);

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  dustbin.display();
  ball.display();

  
}
function keyPressed(){
	if(keyCode === UP_ARROW){

  Matter.Body.applyForce(ball.body,ball.body.position,{x:200,y:-100})	;
	}
}




