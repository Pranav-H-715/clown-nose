function preload(){
    clown=loadImage("clownnose.png")
}
function setup(){
    can = createCanvas(400,300)
    can.position(435,200)
    video=createCapture(VIDEO)
    video.size(300,300)
    video.hide()
    poseNet = ml5.poseNet(video,modelLoaded)
    poseNet.on('pose',gotPoses)
}
function draw(){
    image(video,0,0,400,300)
    image(clown,noseX,noseY,30,30)
}
function modelLoaded(){
    console.log("poseNet is loaded")
}
function gotPoses(result){
    if(result.length > 0){
        console.log(result)
        noseX = result[0].pose.nose.x
        noseY = result[0].pose.nose.y
    }
}
function take_snap(){
 save("image.png")   
}