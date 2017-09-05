var ball_x, ball_y;
var rightPaddle_x, rightPaddle_y;
var leftPaddle_x, leftPaddle_y;
var ballMove;
var ballMoveY;
var points;

function setup() {
  createCanvas(800,600);
  ball_x = 400;
  ball_y = 300;
  rightPaddle_x = 740;
  //rightPaddle_y = mouseY;
  leftPaddle_x = 30;
  //leftPaddle_y = mouseY;
  ballMove = -10;
  ballMoveY = random(5);
  points = 0;
}

function draw() {
  background(0); 
  displayPoints();
  //barrier
  stroke('white');
  line(400,0,400,600);
  
  //paddles
  rightPaddle_y = mouseY;
  leftPaddle_y = mouseY;
  if(mouseY > 445) {
    createPaddle(30,445,30,150);
    createPaddle(740,445,30,150);
  }
    else {
      createPaddle(30,mouseY,30,150);
      createPaddle(740,mouseY,30,150);
  }
  
  //ball
  if(points < 10) {
    stroke('red');
    fill('red');
    ellipse(ball_x,ball_y,40,40);
  }
  else if(points >= 10 && points < 20) {
    stroke('blue');
    fill('blue');
    ellipse(ball_x,ball_y,20,20);
  }
  else if(points >=20 && points < 30) {
    stroke('green');
    fill('green');
    ellipse(ball_x,ball_y,10,10);
  }
  else {
    stroke('purple');
    fill('purple');
    ellipse(ball_x,ball_y,2,2);
  }
  moveBall();
  checkForTouchRight();
  checkForTouchLeft();
  checkMisses();
  checkBoundaries();
}


function displayPoints() {
  if(points < 10) {
    stroke('red');
    fill('red');
    textSize(150);
    text(points, 360, 100);
  }
  else if (points >=10 && points < 20) {
    stroke('blue');
    fill('blue');
    textSize(150);
    text(points, 320,100);
  }
  else if (points >= 20 && points < 30) {
    stroke('green');
    fill('green');
    textSize(150);
    text(points, 320,100);
  }
  else {
    stroke('purple');
    fill('purple');
    textSize(150);
    text(points, 320,100);
  }
}

function createPaddle(x,y,w,h) {
  fill('white');
  rect(x,y,w,h);
}

function moveBall() {
  ball_x -= ballMove;
  ball_y -= ballMoveY;
}

function checkForTouchRight() {
  if(ball_x >= rightPaddle_x - 15 && ball_x <= 800 && ball_y >= rightPaddle_y  && ball_y <= rightPaddle_y + 148) {
    ballMove = 10;
    ballMoveY = random(-5,5);
    points++;
  } 
}

function checkForTouchLeft() {
  if(ball_x <= leftPaddle_x + 45 && ball_x >= 0 && ball_y >= rightPaddle_y && ball_y <=rightPaddle_y + 150) {
    ballMove = -10;
    ballMoveY = random(-5, 5);
    points++;
  } 
}

function checkMisses() {
  if(ball_x <= -15 || ball_x >= 815) {
    gameOver();
  }
}

function checkBoundaries() {
  if(ball_y <= 15 || ball_y >= 585) {
    ballMoveY = ballMoveY * (-1); 
  }
}

function gameOver() {
  fill ('red');
  textSize(150);
  text('YOU LOST', 25, 300);
}