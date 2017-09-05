//Creature V2

var creatureColor = ('tan');

function setup() {
  createCanvas(400,300);
}


function draw() {
  background('lightblue');
  hill(0,300,400,200);
  noStroke();
  cloud(100,50,60,30);
  cloud(300,70,50,30);
  translate(mouseX - 200, mouseY - 100);
  stroke('black');
  head();
  hair();
  eye();
  mouth();
  torso();
  arms();
  legs();
}

function head () {
  //head
  fill(creatureColor);
  ellipse(200,100,80,120);
}

function hair() {
  //hair
  stroke('yellow');
  line(200,40,140,60);
  line(194,38,137,70);
  line(200,40,138,65);
  line(195,40,140,72);
  line(200,39,136,76);
  line(193,40,140,66);
  line(200,40,142,57);
  stroke('black');
  line(201,40,260,65);
  line(203,41,255,66);
  line(200,40,248,67);
  line(202,39,257,68);
  line(200,40,259,69);
  line(205,38,260,70);
}

function eye() {
  //eye
   if (mouseIsPressed) {
    fill(creatureColor);
    ellipse(200,70,20,20);
  }
  else {
  fill('white');
  ellipse(200,70,20,20);
  fill('black');
  ellipse(200,70,6,6);
  fill('white');
  }
 
}

function mouth() {
  //mouth
  fill(166,159,68);
  triangle(160,110,200,120,240,110);
}

function torso() {
  //torso
  fill('white');
  rect(170,160,60,20);
  noStroke();
  textSize(12);
  fill('red');
  text('Supreme', 175,175);
}

function arms() {
  //leftArm
  stroke('black');
  line(170,170,160,165);
  line(160,165,150,170);
  line(150,170,140,165);
  line(140,165,130,170);
  line(130,170,120,165);
  
  //rightArm
  line(230,170,240,165);
  line(240,165,250,170);
  line(250,170,260,165);
  line(260,165,270,170);
  line(270,170,280,165);
}

function legs() {
  //thighs
  fill(59,64,24);
  rect(180,180,20,10);
  rect(200,180,20,10);
  
  //legs
  fill(166,124,88);
  rect(180,190,20,20);
  rect(200,190,20,20);
}

function keyPressed() {
  if (keyCode === ENTER) {
    creatureColor = color(random(256), random(256), random(256));
  }
}

function hill (x,y,w,h) {
  fill (color(255,0,0));
  arc(x + (w/2), y, w, h, PI, 0, PIE);
  textSize(30);
  fill('white');
  text('Supreme', 140, 250);
}

function cloud (x,y,w,h) {
  fill('white');
  ellipse(x,y,w,h);
  ellipse(x+25,y-20,w,h);
  ellipse(x+40,y,w,h);
}