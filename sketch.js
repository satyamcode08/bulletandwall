var bullet,wall;
var speed,thickness,weight;
var damage;
function setup() {
  createCanvas(1600,400);
 bullet= createSprite(100, 200, 50, 30);
 bullet.shapeColor="white";
wall= createSprite(1000, 200, thickness, 300);
 bullet.shapeColor="white";
 thickness=random(22,83);
 speed=random(223,323);
 weight=random(30,52);
 bullet.velocityX=speed;
}

function draw() {
  background(0);  
  if(hasCollided(bullet,wall)){
      bullet.velocityX=0;
      damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
      if(damage<10){
       wall.shapeColor="green";
      }
      else{
       wall.shapeColor="red";
      }
  }
textSize(20);
text("Damage= "+damage,300,150);
  drawSprites();

}

function hasCollided(lbullet,lwall){
bulletright=lbullet.x+lbullet.width;
wallleft=lwall.x;
if(bulletright>=wallleft){
  return true;
}
else {
return false;
}
}
