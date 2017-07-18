function setup() {
    createCanvas(500,500);
    background(51);
    ellipse(250,250,100);
}
var xPos = 500;
var yPos = 500;
var x = 5;
var y = 3;

function draw() {
    background(51);
    if(xPos < 0 || xPos > 500) x = -x;
    if(yPos < 0 || yPos > 500) y = -y;
    xPos += x;
    yPos += y;
    ellipse(xPos, yPos, 30,30);
    fill(random(0,250), random(0,250), random(0,250));
    
}
