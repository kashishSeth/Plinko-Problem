const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, division1;
var a = [];//plinkos
var p = [];//particles
var engine, world;

function setup() {
  createCanvas(460,800);

  engine=Engine.create()
  world=engine.world

  ground = new Ground(600,780,1200,20);

  division1 = new Division(240,700,10,300);
  division2 = new Division(290,700,10,300);
  division3 = new Division(340,700,10,300);
  division4 = new Division(390,700,10,300);
  division5 = new Division(190,700,10,300);
  division6 = new Division(140,700,10,300);
  division7 = new Division(90,700,10,300);
  division8 = new Division(40,700,10,300);

  for(var i = 35; i<=450; i=i+40){
    a.push(new Plinko(i,40,20));
  }
  for(var i = 15; i<=425; i=i+40){
    a.push(new Plinko(i,120,20));
  }
  for(var i = 35; i<=450; i=i+40){
    a.push(new Plinko(i,200,20));
  }
  for(var i = 15; i<=425; i=i+40){
    a.push(new Plinko(i,280,20));
  }
  for(var i = 35; i<=450; i=i+40){
    a.push(new Plinko(i,360,20));
  }
  for(var i = 15; i<=425; i=i+40){
    a.push(new Plinko(i,440,20));
  }
}

function draw() {

  Engine.update(engine);
  background(0);
  //stroke("Red");

  ground.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();
  division8.display();

  for(var i = 0; i<a.length; i++){
    a[i].display();
  }
if(frameCount % 30 === 0){
  p.push(new Particle(random(0,460), 10, 20));
}
for(var i = 0; i<p.length; i++){
  p[i].display();
}

  fill("Blue");
  text(mouseX + "," + mouseY, mouseX, mouseY);
}
