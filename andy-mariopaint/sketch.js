function setup(){
    createCanvas(1500,1500);
    background(51);
}
function mouseDragged() {
 fill(random(0,255),random(0,255),random(0,255));
 ellipse(mouseX, mouseY, random(10,300), random(10,300));
  // prevent default
  return false;
}   
