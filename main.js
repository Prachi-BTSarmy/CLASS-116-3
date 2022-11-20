mustache_X=0;
mustache_Y=0;

function preLoad(){
mustache = loadImage('https://postimg.cc/v1n8wszY');
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
  
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(mustache,mustache_X,mustache_Y,60,45);
    
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
} 

function take_snapshot(){    
    save('myFilterImage.png');
  }
  
  function gotPoses(results)
  {
    if(results.length > 0)
    {
      console.log(results);
      console.log("nose x:"+results[0].pose.nose.x);
      mustache_X = results[0].pose.nose.x-30;
      console.log("nose y:"+results[0].pose.nose.y);
      mustache_Y = results[0].pose.nose.y;
    }
  }
