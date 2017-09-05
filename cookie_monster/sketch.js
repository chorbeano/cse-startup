var monster_img;
var cookie_img;
var cake_img;
var pie_img;
var xxx_img;
var xxx_x,xxx_y;
var cake_x,cake_y;
var pie_x,pie_y;
var points;
var monster_x, monster_y;
var cookie_x, cookie_y;
var misses;
var gameOver;

function preload() {
  monster_img = loadImage("assets/cookie_monster.png");
  cookie_img = loadImage("assets/cookie.png");
  cake_img = loadImage("assets/cake.png");
  pie_img = loadImage("assets/pie.png");
  xxx_img = loadImage("assets/xxx.png");
}

function setup() {
  createCanvas(720, 400);
  monster_x = 150
  monster_y = height-150;
  cookie_x = 725;
  cookie_y = random(350);
  cake_x = 725;
  cake_y = random(350);
  pie_x = 725;
  pie_y = random(350);
  points = 0;
  misses = 0;
  gameOver = false;
}

function draw() {
  background(200);
  displayPoints();
  checkForMisses();
  displayMiss();
  
  image(cake_img, cake_x, cake_y);
  image(pie_img, pie_x, pie_y);
  image(monster_img, monster_x, monster_y);
  image(cookie_img, cookie_x, cookie_y);
  
  moveCookie();
  moveCake();
  movePie();
  moveMonster();
  checkForChomp();
  endGame();
  if(gameOver === true) {
    cookie_x= 725;
    cake_x = 725;
    pie_x = 725;
    button= createButton('Redeem Yourself');
    button.position(580,370);
    button.mousePressed(startOver);
  }
}
function keyPressed() {
  if(keyCode===TAB) {
    misses = 0;
  }
}

function displayPoints() {
  fill(160);
  textSize(150);
  text(points,10,370);
}

function displayMiss() {
  if(misses == 1 || misses == 2 || misses == 3) {
    fill('red');
    textSize(50);
    text('X',580,40);
  }
  
  if(misses == 2 || misses == 3) {
    fill('red');
    textSize(50);
    text('X',630,40);
   
  }

  if(misses == 3) {
    fill('red');
    textSize(50);
    text('X',680,40);
  }
}

function moveCookie() {
  if(cookie_x < 0) {
    cookie_x = 725;
    cookie_y = random(350);
  }
  else 
    cookie_x -= 4;
}

function moveCake(){
  if(cake_x < 0) {
    cake_x = 725;
    cake_y = random(350);
  }
  else 
    cake_x -= 4;
}
 function movePie(){
   if(pie_x < 0) {
    pie_x = 725;
    pie_y = random(350);
  }
  else 
    pie_x -= 4;
   
 }

function moveMonster() {
  if(keyIsDown(UP_ARROW) && monster_y > 0)
    monster_y -= 6;
  if(keyIsDown(DOWN_ARROW) && monster_y < height-150)
    monster_y += 6;
  if(keyIsDown(LEFT_ARROW) && monster_x > 0)
    monster_x -= 6;
  if(keyIsDown(RIGHT_ARROW) && monster_x < 580)
    monster_x += 6;
}

function checkForChomp() {
  var d = dist(cookie_x, cookie_y, monster_x, monster_y);
  if (d < 100) {
    points += 1;
    cookie_x = 725;
    cookie_y = random(350);
  }
  
  var c = dist(cake_x, cake_y, monster_x,monster_y);
  if(c<100){
    misses+=1;
    cake_x=725;
    cake_y = random(350);
  }
  
  var p = dist(pie_x, pie_y, monster_x,monster_y);
  if(p<100){
    misses+=1;
    pie_x=725;
    pie_y = random(350);
  }

}

function checkForMisses() {
  if(cookie_x < 0) {
    misses += 1;
    displayMiss();
  }
}

function endGame() {
  if(misses == 3) {
    noStroke();
    fill('red');
    rect(20,150,680,100);
    fill('white');
    textSize(50);
    text('YOU SUCK',360, 220); 
    gameOver = true;
    image(xxx_img, xxx_x, xxx_y);
  }
}

function startOver() {
  misses = 0;
  gameOver = false;
  points = 0;
}