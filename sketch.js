
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var stone1,boy1,tree1,mango1,mango2,mango3,mango4,mango5,ground1,slingShot
function preload()
{

}

function setup() {
	createCanvas(800, 650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
tree1=new tree(600,350,150,600)
mango1=new mango(600,200,40,50)
mango2=new mango(590,390,40,50)
mango3=new mango(580,300,40,50)
mango4=new mango(650,330,40,50)
mango5=new mango(640,440,40,50)
stone1=new stone(130,500,40,50)
boy1=new boy(100,540,70,260)
slingShot = new slingshot(this.stone1,{x:130,y:500});
ground1=new ground(310,650,1000,10)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  boy1.display();
  tree1.display();
  stone1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  ground1.display();
  //slingShot.display();
  drawSprites();
 
}


/*function mouseDragged(){
  Matter.Body.setPosition(this.stone1,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(this.stone1);
  }
}*/



