var x1,x2,y1,y2,w1,w2,h1,h2,v1,v2;
var color;


function setup() {
  createCanvas(800,400);
  x1 = 100;
  y1 = 200;
  w1 = 30;
  h1 = 50;
  x2 = 700;
  y2 = 200;
  w2 = 50;
  h2 = 30;
  v1 = 5;
  v2 = -5;
  color = "green";
  
}

function draw() {
  background(0);  
  //y2=mouseY;
  //x2=mouseX;
  fill(color);
  ellipse(x1,y1,w1,h1);
  ellipse(x2,y2,w2,h2);
  x1+=v1;
  x2+=v2;
  isTouching();
  bounceOff();
  
}

function isTouching(){
  if (x2-x1<w1/2+w2/2 && x1-x2<w1/2+w2/2 &&
    y2-y1<h1/2+h2/2 && y1-y2<h1/2+h2/2){
  color="yellow";
 
}
else{
  color="green";
}
}

function bounceOff(){
  if (x2-x1<w1/2+w2/2 && x1-x2<w1/2+w2/2 &&
    y2-y1<h1/2+h2/2 && y1-y2<h1/2+h2/2){
  
  v1=-v1;
  v2=-v2;

}

}