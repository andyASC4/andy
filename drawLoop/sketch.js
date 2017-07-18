function setup(){
    createCanvas(500,500);
    background(51);
}

var x = 0;

function draw() {
    background(150);
    ellipse(x,100,50);
    x += 10;
}