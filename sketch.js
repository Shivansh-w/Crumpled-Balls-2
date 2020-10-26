// Project:25 - Crumpled Balls_1

//Create Namespaces
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

//Create Objects
var trashBinObj, paperObj, groundObj;
var world;

function setup() {
	createCanvas(1200, 500);

	//Create engine & add it world
	engine = Engine.create();
	world = engine.world;

	//Create objects
	trashBinObj = new TrashBin(1000,450);
	paperObj = new Paper(200, 450, 40);
	groundObj = new Ground(width/2, 475, width, 20);

	//Render the objects
	var render = Render.create ({
		element: document.body,
		engine: engine,
		options: {
			width: 1000,
			height: 450,
			wireframes: false
		}
	});

	//Update in engine
	Engine.run(engine);
}

function draw() {

	rectMode(CENTER);
	background(176,224,230);

	//Create Objects
	paperObj.display();
	groundObj.display();
	trashBinObj.display();
}

//Apply force when key pressed
function keyPressed() {
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObj.body, paperObj.body.position, {x:85,y:-95});
	}
}

