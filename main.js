img ="";
status ="";

function preload()
{
    img = loadImage('dog_cat.jpg');
}

function modelLoaded()
{
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(img, gotResults);
}

function setup() 
{
    canvas = createCanvas(640 , 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function gotResult(error, results)
{
    if (error) {
        console.log(error);
    }
    console.log(results)
}

function draw()
 { 
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Dog", 45, 75); 
    noFill();
    stroke("yellow"); 
    strokeWeight(2) 
    rect(30, 60, 450, 350 ); 

    fill("#FF0000");
    text("Cat", 320, 120); 
    noFill();
    stroke("blue"); 
    strokeWeight(2) 
    rect(300, 60, 300, 350 ); 

    fill("#FF0000");
    text("Bowl", 320, 370); 
    noFill();
    stroke("red");  
    strokeWeight(2) 
    rect(280, 320, 120, 100 ); 
}