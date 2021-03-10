var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var Play = 1
var End = 0
var gameState = "play"

var divisionHeight=300;
var divisions;
var particle;
var turn = 0;
var ground

var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

}
 


function draw() {
  background("black");
  
  textSize(30)
  text("turn  :"+ turn,20,50)
  text("score : "+ score,20,20);
  text("500 ", 20,580 )
  text("500 ", 100,580 )
  text("300 ", 180,580 )
  text("200 ", 260,580 )
  text("100 ", 340,580 )
  text("200 ", 420,580 )
  text("300 ", 500,580 )
  text("400 ", 580,580 )
  text("500 ", 660,580 )
  text("500 ", 740,580 )
   
  Engine.update(engine);

  if(particle!=null){
    particle.display();

      if(particle.body.position.y > 740){
        if(particle.body.position.x > 320 && particle.body.position.x<400){
          score = score+100
          turn++
          particle = null;
           if(turn>= 5){ gameState = "end";}
            
          
        }

    }
    

  }
  
  

   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}
 function mousePressed(){
   if(gameState!=="end"){
  
     particle=new Particle(mouseX,10,10,10);
     particle.display();
     textSize(40)
     text("gameOver",400,400);
   }

 }