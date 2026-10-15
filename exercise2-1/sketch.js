let x = 50;
let y = 50;
let speedX = 3;
let speedY = 3;

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(255);
    rectMode(CENTER);
    rect(width/2, height/2);
    circle(x, y, 100);
    if (isOutOfBounds(x, 50, width - 50) === true || isOutOfBounds(y, 50, height - 50) === true){
        speedX *= -1;
    }
    x += speedX;
    y += speedY;
}

function isOutOfBounds(coordinate, minVal, maxVal){
    if (coordinate > maxVal || coordinate < minVal){
        return true;
    } else {
        return false;
    }
}