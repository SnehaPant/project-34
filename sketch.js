
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(windowWidth/2,windowHeight/1.5);


	engine = Engine.create();
	world = engine.world;
//let canvasmouse = Mouse.create(canvas.elt);

//canvasmouse.pixelRatio=pixelDensity();
//let options = {
	//mouse:canvasmouse
//}
//mConstraint=MouseConstraint.create(engine,options)
//World.add(world,mConstraint)
	//Create the Bodies Here.
	bob1=new Pendulum(150,300,'gray')
	bob2=new Pendulum(230,300,'gray') 
	bob3=new Pendulum(300,300,'gray') 
	bob4=new Pendulum(370,300,'gray')
	bob5=new Pendulum(440,300,'gray')
rope1=new Sling(bob1.body,{x:150,y:100})
rope2=new Sling(bob2.body,{x:230,y:100})
rope3=new Sling(bob3.body,{x:300,y:100})
rope4=new Sling(bob4.body,{x:370,y:100})
rope5=new Sling(bob5.body,{x:440,y:100})
	Engine.run(engine);
  
}
function mouseDragged(){
	Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY})
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
	rope1.display()
	rope2.display()
	rope3.display()
	rope4.display()
	rope5.display()
  drawSprites();
 
}






