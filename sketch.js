const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;

var base1
var base2
var p1
var p2


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
  push()
  base1 = new PlayerBase(width-width+200,random(500,height-300),180,150)
  base2 = new ComputerBase(width-200 , random(500,height-300),180,150)
  p1 = new Player(base1.body.position.x, base1.body.position.y - 200,70, 150 )
  p2 = new Computer(base2.body.position.x, base2.body.position.y -  200, 70,150)

 pop()

 }

function draw() {

  background(180);

  Engine.update(engine);

  base1.show()
  base2.show()
  p1.show()
  p2.show()

  // Title
  fill("red");
  textAlign("center");
  textFont("Times New Roman")
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 


   //display Player and computerplayer


}
