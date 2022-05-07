img = "";
function preload() {
    img = loadImage("dog_cat.jpg");
}
function setup() {
    canvas = createCanvas(640,420);
    canvas.center();
}
function draw() {
    image(img, 0, 0, 640, 420);
    fill("#fc0000");
    text("Dog", 45, 60);
    noFill();
    stroke("#fc0000");
    rect(30,40,400,350)
}