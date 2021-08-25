var plane;
var PLAY = 0;
var END = 1;
var gameState = PLAY;
var airplaneImg;
var airplane;
var score;
var sky;
function preload(){
bomb = loadImage("bomb.png");
sky = loadImage("sky.jpg");
airplaneImg = loadImage("plane.png");
}

function setup() {
 createCanvas(displayWidth,displayHeight);
  plane = createSprite(200,300,20,20);
  obstaclesGroup = new Group();
  edges = createEdgeSprites();
  plane.addImage(airplaneImg);
  plane.scale = 0.2;
  score = 0;
  
}

function draw() {
 background(sky);
  
  text("score = "+score,310,30);
  if(gameState == PLAY){
    camera.position.x = displayWidth/2
    camera.position.y = plane.y
     if(keyDown("space")){
    plane.velocityY = -6;
  
  
  }
    score = score + Math.round(frameCount/80);
    
    plane.velocityY = plane.velocityY + 1;
    
  }
     if(plane.isTouching(obstaclesGroup)){
    gameState = END;
  }
  if(plane.isTouching(edges)){
    gameState = END;
  }
  
    if(gameState == END){
      
      plane.x = 200
      plane.y = 300;
    obstaclesGroup.visible = false;
    plane.velocityY = 0;
    
    textSize(30);
      text("Game Over!",120,200);
    textSize(20);
      
      text("press R to restart",130,235);
      obstaclesGroup.setVelocityXEach(0);
  }
  if(keyDown("r")){
    gameState = PLAY;
    score = 0;
  }
 


  obstacles();
  drawSprites();
}

function obstacles(){
  
  if(frameCount % 150 == 0){
    var obstacle = createSprite(400,400,20,20);
    obstacle.y = Math.round(random(50,400));
    obstacle.addImage(bomb)
    obstacle.scale = 0.2
    obstacle.velocityX = -2;
    obstaclesGroup.add(obstacle);
    
  }
    
    
  }


  

