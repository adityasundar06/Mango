var groundBody,treeBody,stoneBody,mangoBody1,mangoBody2,mangoBody3,mangoBody4,boySprite,slingshotBody;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload(){
	boyImage = loadImage("boy.png");
}

function setup() {
	createCanvas(1200, 500);

	engine = Engine.create();
	world = engine.world;

	treeBody = new tree(950,260);
	groundBody = new ground(600,490,1300,40);
	stoneBody = new stone(110,360,30);

	mangoBody1 = new mango(1000,100,30);
	mangoBody2 = new mango(950,250,30);
	mangoBody3 = new mango(1120,200,30);
	mangoBody4 = new mango(860,185,30);

	boySprite = createSprite(160,420,1,1);
	boySprite.addImage(boyImage);
	boySprite.scale = 0.09;

	slingshotBody = new slingshot(stoneBody.body,{x:110, y:360});

	Engine.run(engine);
}
function draw() {
  rectMode(CENTER);
  background(0);

  drawSprites();

  treeBody.display();
  groundBody.display();
  stoneBody.display();
  mangoBody1.display();
  mangoBody2.display();
  mangoBody3.display();
  mangoBody4.display();
  slingshotBody.display();

  detectCollision(stoneBody,mangoBody1);
  detectCollision(stoneBody,mangoBody2);
  detectCollision(stoneBody,mangoBody3);
  detectCollision(stoneBody,mangoBody4);
}
function detectCollision(lstone, lmango){
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance <= lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}
function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(stoneBody.body, {x: mouseX , y: mouseY});
    //}
}
function mouseReleased(){
    slingshotBody.fly();
}
function keyPressed(){
    if(keyCode === 32){
       Matter.Body.setPosition(stoneBody.body, {x:150, y:50});
       slingshotBody.attach(stoneBody.body);
    }
}