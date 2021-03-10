
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var monkey;
var back,back1;

function preload()
{
	back1=loadImage("track.jpg");
}

function setup() {
	createCanvas(displayWidth - 20, displayHeight-30);



	engine = Engine.create();
	world = engine.world;

	
  back=createSprite(0,-displayHeight*4,displayWidth, displayHeight*5);
  back.addImage(back1);
  monkey=createSprite(300,400,50,50);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background("blue");
  if(keyDown(UP_ARROW)){
    monkey.y=monkey.y-100;
    camera.position.x = 400;
    camera.position.y = monkey.y;
  }
  if(keyDown(DOWN_ARROW)){
    monkey.y=monkey.y+100;
    camera.position.x = 400;
    camera.position.y = monkey.y;
  }

  
  drawSprites();
 
}





