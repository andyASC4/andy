
function setup() {
    createCanvas(500,500);
    background(51);
}
var xPos = 30;
var yPos = 30;
var x = 5;
var y = 3;

function draw() {
    background(51);
    if(xPos < 25 || xPos > 475) x = -x;
    if(yPos < 25 || yPos > 475) y = -y;
    xPos += x;
    yPos += y;
    ellipse(xPos, yPos, 40,40);
    fill(random(0,250), random(0,250), random(0,250));
    
}