function setup(){
    createCanvas(300,300);
    background(225);

    stroke("black");
    strokeWeight(5); 
 
    fill("white");
    arc(width/2, height/2, 200,200, 0, PI, CHORD);

    fill("blue");
    arc(width/2, height/2, 200,200, PI, 0, CHORD);

    fill("black");
    ellipse(width/2, height/2, 50);

    fill("white");
    ellipse(width/2, height/2, 25);

}