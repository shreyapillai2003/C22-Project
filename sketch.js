const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground;
var ball

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	var canvas=createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	var ground_options= {isStatic:true}
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
 	World.add(world, ground);

    var packageSprite_options={restitution: 0.8,friction:3}
	packageSprite = Bodies.circle(width/2 , 200 , 5 , packageSprite_options);
	//packageSprite.addImage(packageIMG);
	World.add(world, packageSprite);
    // packageSprite=createSprite(width/2, 80, 10,10);
	// packageSprite.addImage(packageIMG)
	// packageSprite.scale=0.2

	var helicopter_options={isStatic: true}; 
	helicopterSprite=createSprite(width/2, 200, 10,10, helicopter_options);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6;

	//var packageBody_options= {restitution: 0.8,friction:3}
	//packageBody = Bodies.circle(width/2 , 200 , 5 , {packageBody_options});
	//World.add(world, packageBody);
  
}


function draw() {
	background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    ellipseMode(RADIUS);
    ellipse(packageSprite.position.x,packageSprite.position.y,20,20);

	keyPressed();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
    packageSprite= { friction:3};
	//Matter.Body.setStatic(packageBody, false);
	}
}




