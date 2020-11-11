const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var canvas;
var water , boy;
var maxDrops = 100;
var image1 , image2 , image3 , image4;
var drops = [];

var image1 , image2 , image3 , image4;
function preload(){
    image1 = loadImage("1.png");
    image2 = loadImage("2.png");
    image3 = loadImage("3.png");
    image4 = loadImage("4.png");
}

function setup(){
    canvas = createCanvas(500,600);
    engine = Engine.create();
    world = engine.world;
    
    for(var i=0 ;i<maxDrops; i++){
        drops.push(new Drop(random(0,400),random(0,400)));
    }


    boy = new Umbrella(250,450);
}

function draw(){
    background("#000");

    for (var i = 0; i < maxDrops; i++) {

        drops[i].display();
      }


    boy.display();
    drawSprites();
}   

if (frameCount % 10 === 0){
    var obstacle = createSprite(250,100,100,100);
    
    
     //generate random obstacles
     var rand = Math.round(random(1,4));
     switch(rand) {
       case 1: obstacle.addImage(image1);
               break;
       case 2: obstacle.addImage(image2);
               break;
       case 3: obstacle.addImage(image3);
               break;
       case 4: obstacle.addImage(image4);
               break;
      
       default: break;
     }
}