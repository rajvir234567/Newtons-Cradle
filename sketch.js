
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint = Matter.Constraint;

function preload(){}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	
	roof = new Roof(400,100,300,20);
	bobObject1 = new Bob(300,300);
	bobObject2 = new Bob(350,300);
	bobObject3 = new Bob(400,300);
	bobObject4 = new Bob(450,300);
	bobObject5 = new Bob(500,300);
	rope1 = new Rope(bobObject1.body, roof.body, this.bobObject1.radius, 0);
	rope2 = new Rope(bobObject2.body, roof.body, this.bobObject2.radius, 0);
	rope3 = new Rope(bobObject3.body, roof.body, this.bobObject3.radius, 0);
	rope4 = new Rope(bobObject4.body, roof.body, this.bobObject4.radius, 0);
	rope5 = new Rope(bobObject5.body, roof.body, this.bobObject5.radius, 0);

	
}


function draw() {
	rectMode(CENTER);
	background(255);
	roof.display();
	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
	drawSprites();
 
}



