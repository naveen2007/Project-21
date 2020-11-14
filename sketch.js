var bullet,wall
var weight,speed 
var thickness


function setup() {

  createCanvas(1600,400);

  speed=random(225,321)
  weight=random(30,50)

  bullet =createSprite(50,200,50,50);
  thickness = random(22,83);
  wall=createSprite(1200,200,thickness,height/2)
  
  
 bullet.velocityX=speed;
}

function draw() {
  background(255,255,255);  



  
  if(hasCollided(bullet,wall)) {
    wall.width=thickness;

    bullet.velocityX=0;
    damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
     
    if(damage>10) {


    wall.shapeColor="red";
    
    }

    if(damage<10) {


      wall.shapeColor="green";
     
    }
  }
  drawSprites();
}


function hasCollided(bullet,wall){


bulletRightEdge = bullet.x + bullet.width;
wallLeftEdge = wall.x;

if (bulletRightEdge >= wallLeftEdge)

{

  return true
}



return false;



}