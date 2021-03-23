nose_x = 0;
nose_y = 0;

function preload() {
    img_mustache = loadImage("https://i.postimg.cc/3x3QzSGq/m.png")
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("poseNet Is Initialized");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        nose_x = results[0].pose.nose.x - 35;
        nose_y = results[0].pose.nose.y - 5;
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(img_mustache, nose_x, nose_y, 70, 50);
}

function take_snapshot() {
    save('myFilterImage.png');
}