function setup() {
    createCanvas(800,700);
    background("tan");
}
function draw() {
    line(0,550,800,550);
    line(470,550,470,700);

    fill("orange");
    rect(490,560,120,60);//Attack 1
    fill("gray");
    rect(490,630,120,60);//Attack 2
    fill("blue");
    rect(660,560,120,60);//Attack 3
    fill("white");
    rect(660,630,120,60);//Attack 4

    fill("red");
    textSize(19);//Attack 1 Text Bar
    text("Flamethrower",493,595);//Attack 1 Text Bar

    fill("white");
    textSize(19);//Attack 2 Text Bar
    text("Metal Claw",503,665);//Attack 2 Text Bar

    fill("white");
    textSize(19);//Attack 3 Text Bar
    text("Wing Attack", 670,595);//Attack 3 Text Bar

    fill("blue");
    textSize(19);//Attack 4 Text Bar
    text("Dragon Claw",665,665);//Attack 4 Text Bar

    fill("white");//Attack Bar
    rect(20,560,430,130,25,10,30,10)//Attack Bar

    fill("black");
    textSize(30);//Attack Bar Text
    text("Which attack will you choose?", 35,635);//Attack Bar Text

    fill("blue");
    ellipse(175,480,300,100);//Platform
    ellipse(625,200,300,100);//Platform

    fill("white");
    rect(400,435,375,90,25,10,30,10);//HP
    fill("white");
    rect(20,25,375,90,25,10,30,10);//HP

    fill("green");
    rect(475,490,275,10,25,10,30,10);//HP Bar
    rect(95,80,275,10,25,10,30,10);//HP Bar

    fill("black");
    textSize(30);//HP Text
    text("HP",420,505);//HP Text
    text("HP",40,95);//HP Text

    fill("red");
    textSize(30);//Your Pkmn Name Text
    text("Charizard",420,470);//Your Pkmn Name Text

    fill("green");
    textSize(30);//Enemy Pkmn Name Text
    text("Venasaur",40,60);//Enemy Pkmn Name Text
}