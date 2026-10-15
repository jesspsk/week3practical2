let x = 50;
let y = 50;
let speedX = 3;
let speedY = 3;

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(255);
    fill(200, 150, 200);
    rectMode(CENTER);
    rect(width/2, height/2, 300, 200);
    fill(255);
    circle(x, y, 100);
    if (isOutOfBounds(x, 50, width - 50) === true){
        speedX *= -1;
    }
    if (isOutOfBounds(y, 50, height - 50) === true){
        speedY *= -1
    }
    x += speedX;
    y += speedY;
    if (isOutOfBounds(x, width/2 - 150, width/2+150) === true){
        fill(200, 150, 200);
        circle(x,y,100)
    }
    if (isOutOfBounds(y, height/2-100, height/2+100) === true){
        (200, 150, 200);
        circle(x,y,100)
    }
    
}

function isOutOfBounds(coordinate, minVal, maxVal){
    if (coordinate < minVal || coordinate > maxVal){
        return true;
    } else {
        return false;
    }
}