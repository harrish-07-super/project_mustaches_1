function preload(){

}

function setup(){
    canvas=createCanvas(600,400);
    canvas.center();
img=createCapture(VIDEO);
img.hide();
}

function draw(){
image(img,0,0,600,400);
}

function take_photo(){
    save("mustacheface.jpg");
}