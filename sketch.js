const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10;
var backgroundImg,platform;
var box, slingShot;
var ground;
var tree,treeImg;
var scoree= 0;
function preload() {
treeImg=loadImage("tree.png");
}

function setup(){
    var canvas = createCanvas(1200,600);
    
    engine = Engine.create();
    world = engine.world;


 ground=new Ground (600,580,1200,5)
    //platform = new Ground(150, 305, 300, 170);

    b1 = new Mango(600,200,10,10);
    b2 = new Mango(600,255,10,10);
    b3 = new Mango(900, 248,10,10);
    b4 = new Mango(600,120,10,10);
    b5 = new Mango(600,180,10,10);
    b6 = new Mango(800,220,10,10);
    b7 = new Mango(800, 280,10,10);
    b8 =  new Mango(800,240,10,10);
    b9 = new Mango(700,280,10,10);
    b10 = new Mango(700,240,10,10);

    tree=createSprite(800,300);
    tree.addImage(treeImg);
    tree.scale=0.5;

    box = new Hex(200,320);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(box.body,{x:200, y:320});
}

function draw(){
    background("White");
    Engine.update(engine);
    strokeWeight(4);

    textSize(20);
    text("Score:" + scoree,1000,50 );
    drawSprites(); 
  
    //ground.display();
   // platform.display();

    box.display();

    b1.display();
  //  b1.score();
    b2.display();
 //   b2.score();
    b3.display();
  //  b3.score();
    b4.display();
  //  b4.score();
    b5.display();
  //  b5.score();
    b6.display();
 //   b6.score();
    b7.display();
  //  b7.score();
    b8.display();
  //  b8.score();
    b9.display();
  //  b9.score();
    b10.display();
 //   b10.score();
detectCollision(box,b1);
detectCollision(box,b2);
detectCollision(box,b3);
detectCollision(box,b4);
detectCollision(box,b5);
detectCollision(box,b6);
detectCollision(box,b7);
detectCollision(box,b8);
detectCollision(box,b9);
detectCollision(box,b10);
   //detectCollision()
ground.display();

    //log6.display();
    slingshot.display();   

}


function mouseDragged(){
    Matter.Body.setPosition(box.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){

    if(keyCode === 32){

        slingshot.attach(box.body);

    }
}
function  detectCollision(baksa,aam){
 
   //console.log("stone" + boxBodyPosition);
   //console.log("Mango" + mangoBodyPosition);

//   var distance=dist(boxBodyPosition.x,boxBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  // console.log(distance);
   //console.log(aam.x);
   //console.log(baksa.x);
   if(isBounceing(baksa,aam)){
    console.log("i am here");
       Matter.Body.setStatic(aam.body,false);
   }
   
   }