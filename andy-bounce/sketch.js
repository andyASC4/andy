function setup() {
    createCanvas(500,500);
    background(51);
    ellipse(250,250,100);
}
var xPos = 30;
var yPos = 30;
var x = 5;
var y = 3;

function draw() {
    background(51);
    if(xPos < 15 || xPos > 485) x = -x;
    if(yPos < 15 || yPos > 485) y = -y;
    xPos += x;
    yPos += y;
    ellipse(xPos, yPos, 30,30);
    fill(random(0,250),random(0,250),random(0,250));
    
}