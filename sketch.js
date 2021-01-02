const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    

  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(0);  
  Engine.update(engine);
  ground.display();
 

  for(var k = 0; k <=width; k=k+ 80){
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();
  }

  for (var i = 40; i<=width-10; i=i+50){
    plinkos.push(new Plinko(i,75));
  }

  for (var i = 15; i<=width-10; i=i+50){
    plinkos.push(new Plinko(i,175));
  }

  for (var i = 40; i<=width-10; i=i+50){
    plinkos.push(new Plinko(i,275));
  }

  for (var i = 15; i<=width-10; i=i+50){
    plinkos.push(new Plinko(i,375));
  }


  if(frameCount%50===0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10, 10));
  }

  for(var j = 0; j < particles.length; j++){
    particles[j].display();
  }
  for(var t = 0; t < divisions.length; t++){
    divisions[t].display();
  }

  drawSprites();
}