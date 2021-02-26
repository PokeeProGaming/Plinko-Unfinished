const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;


function setup() {
  var canvas = createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  createSprite(400, 200, 50, 50);

  ground = new Ground(240,750,20,50);

  Engine.run(engine);
}

function draw() {
  background(0);
  Engine.update(engine); 
  drawSprites();
}