let randX1;
let randY1;
let randX2;
let randY2;
let randX3;
let randY3;

function setup() {
    createCanvas(400, 300);
    noStroke();
    randX1 = random(0, width);
    randY1 = random(0, height);
    randX2 = random(0, width);
    randY2 = random(0, height);
    randX3 = random(0, width);
    randY3 = random(0, height);
}

function draw() {
    background(0, 0, 50);
    star(randX1, randY1);
    star(randX2, randY2);
    star(randX3, randY3);
}

function star(locX, locY) {
    fill(255, 234, 0);
    triangle(locX, locY - 50, locX - 20, locY, locX + 20, locY);
    triangle(locX - 50, locY - 20, locX, locY - 20, locX, locY + 10);
    triangle(locX + 50, locY - 20, locX, locY - 20, locX, locY + 10);
    triangle(locX- 20, locY - 5, locX, locY + 10, locX - 35, locY + 30);
    triangle(locX, locY + 10, locX + 20, locY - 5, locX + 35, locY + 30);
}
