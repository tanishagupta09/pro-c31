const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

//var score = 0;

var ground, divisions, plunkos, particles;

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  //creating ground
  ground = new Ground(width/2, height, width, 20);

  //creating divisions
  for (var k = 0; k <= width; k = k+80) 
  {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
 

  //creating plunkos
  for (var i = 40; i <= width; i = i+50) 
  {
    plinkos.push(new Plinko(i, 75));
  }

  for (var i = 15; i <= width-10; i = i+50) 
  {
    plinkos.push(new Plinko(i, 175));
  }

  for (var i = 40; i <= width; i = i+50) 
  {
    plinkos.push(new Plinko(i, 275));
  }

  for (var i = 15; i <= width-10; i = i+50) 
  {
    plinkos.push(new Plinko(i, 375));
  }   

  
}

function draw() {
  background(0); 

  Engine.update(engine);

  ground.display();

  //displaying divivions
  for (var i = 0; i < divisions.length; i = i+1) 
  {
    divisions[i].display();
  }

  //displaying plunkos
  for (var i = 0; i < plinkos.length; i = i+1) 
  {
    plinkos[i].display();
  }

  //creating particles after frameCount 60
  if (frameCount % 60 === 0)
  {
    particles.push(new Particle(random(width/2-30, width/2+30), 10, 10));
  }
 
  for (var i = 0; i < particles.length; i = i+1) 
  {
    particles[i].display();
  }
  
  
  



  
}