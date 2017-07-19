function setup() {
    createCanvas(801,801);
    background("white");
}

function draw() {
    for (var i=0; i<8; i++){
        for (var a=0; a<8; a++){
            rect(i*100,a*100,100,100);
            fill("white");
        }
    }
}
function mouseClicked() {
    fill("red");
    rect(mouseX, mouseY);
  // prevent default
  return false;
}   
