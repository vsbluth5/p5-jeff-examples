let video
let poseNet
let poses = []


function setup(){
  // Code here runs only once
  createCanvas(1200, 600)
  
  video = createCapture(VIDEO)
  video.hide()
  
  poseNet = ml5.poseNet(video, modelLoaded)
  poseNet.on('pose', getPoses)
  x=1200
  y=600
  xvelocity=-1
}

function draw(){
  background(232, 239, 252)
  image(video, 0, 0)
  
  if (poses.length > 0) {
    //console.log(poses[0].pose)
    noseX = poses[0].pose.keypoints[0].position.x
    noseY = poses[0].pose.keypoints[0].position.y
    leyex = poses[0].pose.keypoints[1].position.x
    leyey = poses[0].pose.keypoints[1].position.y
    reyex = poses[0].pose.keypoints[2].position.x
    reyey = poses[0].pose.keypoints[2].position.y
    lwristx = poses[0].pose.keypoints[9].position.x
    lwristy = poses[0].pose.keypoints[9].position.y
    rwristx = poses[0].pose.keypoints[10].position.x
    rwristy = poses[0].pose.keypoints[10].position.y
    lelbowx = poses[0].pose.keypoints[7].position.x
    lelbowy = poses[0].pose.keypoints[7].position.y
    relbowx = poses[0].pose.keypoints[8].position.x
    relbowy = poses[0].pose.keypoints[8].position.y
    lshoulderx = poses[0].pose.keypoints[5].position.x
    lshouldery = poses[0].pose.keypoints[5].position.y
    rshoulderx = poses[0].pose.keypoints[6].position.x
    rshouldery = poses[0].pose.keypoints[6].position.y
    noStroke()
    fill(255, 0, 0)
    // ellipse(noseX, noseY, 20)
    // ellipse(leyex, leyey, 20)
    // ellipse(reyex, reyey, 20)
    // ellipse(rwristx, rwristy, 20)
    //ellipse(noseX-50, noseY-40, 20)
    //ellipse(noseX+50, noseY-40, 20)
    // noFill()
    // stroke(255,0,0)
    // arc(noseX, noseY, 150, 150, 0.5, 2.5)
    // if (rwristx < 200) {
    //   fireTheLasers()
    // }
    if (isSuperman(lshoulderx, lshouldery, lelbowx, lelbowy, lwristx, lwristy, rshoulderx, rshouldery, relbowx, relbowy, rwristx, rwristy)) {
      fireTheLasers()
      // calculateAngle(rshoulderx, rshouldery, relbowx, relbowy, rwristx, rwristy)
      // console.log()
    }
  }
  changeFocus()
  fill('rgba(255,230,230, 0.5)')
  noStroke()
  // rect(0, 0, 200, 600)
}

function modelLoaded() {
  console.log("model loaded")
}

function getPoses(results) {
  poses=results
}

function fireTheLasers() {
  stroke(255, 100, 0)
  strokeWeight(3)
  line(leyex, leyey, x, y)
  line(reyex, reyey, x, y)
}

function changeFocus() {
  if (x>=1200) {
    xvelocity = -3
  }
  if (x<=0) {
    xvelocity = 3
  }
  x += xvelocity
}

// function keyPressed() {
//   if (keyCode === LEFT_ARROW) {
//     fireTheLasers()
//   }
// }

const calculateAngle = (shoulderx, shouldery, elbowx, elbowy, wristx, wristy) => {
  let a = dist(elbowx, elbowy, wristx, wristy)
  let b = dist(shoulderx, shouldery, wristx, wristy)
  let c = dist(elbowx, elbowy, shoulderx, shouldery)
  
  let theta = acos((a**2 + c**2 - b**2)/(2*c*a))
  console.log(theta)
  return theta 
}

const isSuperman = (lshoulderx, lshouldery, lelbowx, lelbowy, lwristx, lwristy, rshoulderx, rshouldery, relbowx, relbowy, rwristx, rwristy) => {
  if (calculateAngle(rshoulderx, rshouldery, relbowx, relbowy, rwristx, rwristy) < 2) {
    if (calculateAngle(rshoulderx, rshouldery, relbowx, relbowy, rwristx, rwristy) > 1) {
      if (calculateAngle(lshoulderx, lshouldery, lelbowx, lelbowy, lwristx, lwristy) < 2) {
        if (calculateAngle(lshoulderx, lshouldery, lelbowx, lelbowy, lwristx, lwristy) > 1){
          return true 
        }
      }
    }
  }
  return false
} 