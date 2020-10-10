
  var monkey , monkey_running ;
  var banana ,bananaImage, obstacle, obstacleImage;

  var FoodGroup, obstacleGroup;
  var score;

  var city ,cityImage ;
  var ground ;

  function preload(){


    monkey_running = loadAnimation ("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")

    bananaImage = loadImage("banana.png");
    obstaceImage = loadImage("obstacle.png");
    
    cityImage = loadImage("city_background_1024x512-.jpg");
    obstacleImage = loadImage("download (4).png");
    
  }



  function setup() {
    
     createCanvas (600,500);

    score = 0 ;

    city = createSprite(300,200,10,10);
    city.addImage("city",cityImage);
    city.x = city.width /2;
    city.velocityX= -2 ;

    monkey = createSprite(300,200,10,10);
    monkey.addAnimation("monkey_running",monkey_running);
    monkey.scale = 0.17
    monkey.velocityY = 4;
    
    monkey.velocityY = monkey.velocityY + 1;
    
    ground = createSprite(300,460,600,14);
    ground.visible = true

    FoodGroup = createGroup();
    obstacleGroup = createGroup();


  }


  function draw() {
  background ("white");

    
    console.log(monkey.depth)
    
    monkey.collide(ground);
    
    score = score+Math.round(getFrameRate()/60);
      
    if (city.x < 150){
       city.x = city.width/2;
    }

    if (keyDown("space")&&monkey.y >70){
      monkey.velocityY =- 5;
      
    }
     
  
      monkey.velocityY =  monkey.velocityY +0.9;

    food();
    rock();

    drawSprites();
    
    textSize(20);
    stroke(rgb(153, 255, 102));
    strokeWeight(3);
    fill ("indigo")
    text("Survival Time : "+score,400,100);
  }


  function food(){

    if (frameCount % 100==0){

      var y = Math.round(random(80,200));
      banana = createSprite(500,200,101,10);
      banana.addImage(bananaImage);
      banana.velocityX =-3;
      banana.scale= 0.1
      banana.y = y;
      banana.lifetime = 600/3;
      FoodGroup.add(banana);
    }

  }

  function rock(){

    if (frameCount % 300 == 0 ){

    obstacle = createSprite(600,400,100,10);
    obstacle.addImage("running",obstacleImage);
    obstacle.scale = 0.35;
    obstacle.velocityX= -3;
    obstacle.depth = 1;
    obstacle.lifetime = 200;
    obstacleGroup.add(obstacle);

    }
  }

