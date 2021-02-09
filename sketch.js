const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, box1, box2, box3;
var ball;

function setup() {
	createCanvas(800,400);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,390,800,25);
	
	box3 = new Box(590,350,10,40);
	box2 = new Box(510,350,10,40);
	box1 = new Box(550,370,89,15);

	ball = new Ball(200,385,10);

	Engine.run(engine);
  
}


function draw() {
	background(0);
	
	ground.display();
	box3.display();
	box2.display();
	box1.display();
	ball.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:12, y:-10})
	}
	
}


