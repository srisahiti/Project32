const Engine = Matter.Engine; 
const World = Matter.World;
 const Bodies = Matter.Bodies;
 const Body = Matter.Body; 
 const Render = Matter.Render; 
 const Constraint = Matter.Constraint;
var engine,world;
var ground;
var score = 0;

function preload() {
  pentagon = loadImage("HG200.png");
}
 

function setup() {
  createCanvas(900,400);

  engine = Engine.create();
  world = engine.world; 
  Engine.run(engine);

  ground = new Ground() ;
  stand1 = new Stand (390,300,250,10);
  stand2 = new Stand (700,200,200,10);


//level 1
  block1 = new Box(300,275,30,40);
  block2 = new Box(330,275,30,40);
  block3 = new Box(360,275,30,40);
  block4 = new Box(390,275,30,40);
  block5 = new Box(420,275,30,40);
  block6 = new Box(450,275,30,40);
  block7 = new Box(480,275,30,40);

  //level 2
  block8 = new Box(330,235,30,40);
  block9 = new Box(360,235,30,40);
  block10 = new Box(390,235,30,40);
  block11 = new Box(420,235,30,40);
  block12 = new Box(450,235,30,40);

  //level 3
  block13 = new Box(360,195,30,40);
  block14 = new Box(390,195,30,40);
  block15 = new Box(420,195,30,40);

  //level 4 or top
  block16 = new Box(390,155,30,40);


  //2level 1 
  block17 = new Box(700,175,30,40);
  block18 = new Box(730,175,30,40);
  block19 = new Box(670,175,30,40);
  block20 = new Box(760,175,30,40);
  block21 = new Box(640,175,30,40);


  block22 = new Box(700,135,30,40);
  block23 = new Box(730,135,30,40);
  block24 = new Box(670,135,30,40);


  block25 = new Box(700,95,30,40);


  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingshot = new SlingShot(this.polygon,{x:100,y:200});



 
}

function draw() {
  background(56,44,44);  
  fill("white")
    text("Score: "+score,width-300,50)
    Engine.update(engine);

ground.display();
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
block16.display();
block17.display();
block18.display();
block19.display();
block20.display();
block21.display();
block22.display();
block23.display();
block24.display();
block25.display();
stand1.display();
stand2.display();


block1.score()
block2.score()
block3.score()
block4.score()
block5.score()
block6.score()
block7.score()
block8.score()
block9.score()
block10.score()     
block11.score() 
block12.score()     
block13.score()
block14.score()
block15.score()
block16.score()
block17.score()
block18.score()
block19.score()
block20.score()
block21.score()
block22.score()
block23.score()
block24.score()
block25.score()


imageMode(CENTER)
image(pentagon,polygon.position.x,polygon.position.y,40,40)
slingshot.display(); 


  drawSprites();
}


function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
  }
  
  function mouseReleased(){
    slingshot.fly();
  }

  function keyPressed(){
    if(keyCode===32){
        slingshot.attach()
    }
}