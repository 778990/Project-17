
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup;
var score;
var ground, invisibleGround;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas (400,400);  
  monkey = createSprite(50,360,20,20);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(150,395,600,10);
  ground.velocityX = 0;
  ground.x = ground.width/2;
  console.log(ground.x);
  
  invisibleGround = createSprite(150,395,600,10);
  invisibleGround.visible = false;
  

  
}


function draw() {
  background("skyblue");
  monkey.collide(ground);
  monkey.collide(invisibleGround);
  if(keyDown("space") && monkey.y>=200){
    monkey.velocityY = -10;
  }
  monkey.velocityY = monkey.velocityY+3;
  
  drawSprites();
}

function banana(){
  if(frameCount % 80 === 0){
  var banana = createSprite(400,Math.round(random(120,200)),10,40);
    banana.addImage(banana,"banana.png");
  banana.velocityX = -4;
    FoodGroup.add(banana);
  }
  
  
       

}


