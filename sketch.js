const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var balance,ball,block,slingShot;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    platform = new Ground(150, 305, 300, 170);
    ball = new Ball(100,100)
    balance= new Balance(1000,150,170,20);
    balance1 = new Balance(800,350,170,20);
    block1 = new Block(750,170,10,50)
    block2 = new Block(780,170,10,50)
    block3 = new Block(810,170,10,50);
    block4 = new Block(840,170,10,50);
    block5 = new Block(765,120,10,50);
    block6 = new Block(795,120,10,50);
    block7 = new Block(825,120,10,50);
    block8 = new Block(780,70,10,50);
    block9 = new Block(810,70,10,50);
    block10 = new Block(795,30,10,50)
    block11 = new Block(985,-200,10,50)
    block12 = new Block(1020,-200,10,50)
    block13 = new Block(1005,-250,10,50)
    

        
    slingShot = new SlingShot(ball.body,{ x:200,y:100});
}

function draw(){
    background("black");
    Engine.update(engine);
    
    platform.display()
    fill("white")
    textSize(20)
    text("Drag the cube to destoy the blocks !! ",500,100)
    fill(4,150,255);
    ball.display();
    strokeWeight(4);
    fill(143,45,86)
    balance.display()
    balance1.display()
    fill("red")
    block1.display();
    block3.display()
    block5.display()
    block7.display();
    block9.display();
    fill("yellow")
    block6.display();
    block4.display();
    block8.display();
    block2.display();
    block10.display();
    fill(216,17,89)
    block11.display();
    block12.display();
    fill(4,150,255)
    block13.display()
    slingShot.display()
    slingShot.scale=0.5
    
        
    
        
      
      
 
    

}
function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    slingShot.fly();
}
