img = "";

function preload(){
    img = loadImage('dog_cat.jpg');
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw(){
    image(img, 0, 0, 640, 420);
    fill("lightgreen");
    text("Dog", 180, 45);
    noFill();
    stroke("seagreen");
    rect(130, 60, 300, 400);
}