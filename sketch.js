const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;

function preload(){}

function setup() {
	canvas = createCanvas(windowWidth/2, windowHeight/1.5);

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	var canvasmouse = Mouse.create(canvas.elt);
	canvasmouse.pixelRatio = pixelDensity()

	var options = {
		mouse:canvasmouse
	}

	mConstraint = MouseConstraint.create(engine, options)
	World.add(world, mConstraint);
	
	roof = new Roof(400,100,300,20);
	bobObject1 = new Pendelum(300,300, "black");
	bobObject2 = new Pendelum(350,300, "blue");
	bobObject3 = new Pendelum(400,300, "red");
	bobObject4 = new Pendelum(450,300, "yellow");
	bobObject5 = new Pendelum(500,300,"purple");
	rope1 = new Rope(bobObject1.body, roof.body, -100, 0);
	rope2 = new Rope(bobObject2.body, roof.body, -50, 0);
	rope3 = new Rope(bobObject3.body, roof.body, 0, 0);
	rope4 = new Rope(bobObject4.body, roof.body, 50, 0);
	rope5 = new Rope(bobObject5.body, roof.body, 100, 0);
	
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


function mouseDragged(){
	Matter.Body.setPosition(bobObject1.body,{x:mouseX, y:mouseY});
}


/* function keyPressed(){
    if(keyCode === 32 && bobObject1.body.speed < 1){
	   bobObject1.trajectory = [];
       Matter.Body.setPosition(bobObject1.body,{x:200, y:50});
       slingshot.attach(bobObject1.body);
    }
} */


