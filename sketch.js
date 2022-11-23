
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
function preload()
{
	
}

function setup() {
	createCanvas(1600, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var ball_options={
	restitution:0.95,
	isStatic: false,
	friction:0,
	density: 1.2 
}
ball = Bodies.circle(300, 150, 40, ball_options)
World.add(world, ball)
	Engine.run(engine);
  
	ground = new Ground(width/2, 670, width, 20)
	left = new Ground(1100, 600, 20, 120)
	right = new Ground(1350, 600, 20, 120)

	
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ellipse(ball.position.x, ball.position.y, 40)

  drawSprites();
  ground.show()
  left.show()
  right.show()

}

function keyPressed (){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball, ball.position, {x:60,y:-60});
		
	}
}

