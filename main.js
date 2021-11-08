function preload(){

}
function setup() {
canvaS = createCanvas(300,300);
canvaS.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet = ml5.poseNet(video,modelloaded)
poseNet.on("pose",gotposes);
}
function modelloaded(){
    console.log("PoseNet Loaded");
}
function draw(){
image(video,0,0,300,300);
}
function takesnap(){
save("filter.png");
}
function gotposes(result){
    if(result.length > 0){
        console.log(result);
        console.log("nose_X ="+result[0].pose.nose.x);
        console.log("nose_Y="+result[0].pose.nose.y);
    }
}