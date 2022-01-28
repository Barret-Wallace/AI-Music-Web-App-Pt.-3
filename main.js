leftWristx = 0;
leftWristy = 0;
rightWristx = 0;
rightWristy = 0;
function preload(){
VDiva = loadSound("VirtualDiva.mp3");
DMonkey = loadSound("DanceMonkey.mp3");
}
function setup(){
    canvas = createCanvas(600,500);
    canvas.position(600,180);
    cam = createCapture(VIDEO);
    cam.hide();
    
    posenet = ml5.poseNet(cam, modelLoaded);
    posenet.on("pose", gotPoses);
}
function modelLoaded(){
    console.log("Model is Loaded");
}
function draw(){
    image(cam, 0, 0, canvas.width, canvas.height);
}
function gotPoses(result){
    if(result.length > 0){
        console.log(result);
        leftWristx = result[0].pose.leftWrist.x;
        leftWristy = result[0].pose.leftWrist.y;

        rightWristx = result[0].pose.rightWrist.x;
        rightWristy = result[0].pose.rightWrist.y;
    }
}


