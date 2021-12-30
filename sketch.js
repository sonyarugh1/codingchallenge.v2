//Display title screen and game screen
var scene = 0;

//Check what button is clicked

//Snake variable
var s;
//Scale variable
var scl = 20;
//Food variable
var food;
//Function to set up canvas and snake
function setup() {
  createCanvas(520, 520);
  s = new Snake();
  frameRate(10);
  pickLocation();
}
 // var foodcolour = function(){
 //       if(scene === 0 && 
 //     mouseX<95 &&
 //     mouseX>75 && mouseY<155 &&
 //     mouseY>135)
 //    {
 //      fill(123, 0, 255);
 //      var food;
 //    }
 // }
function pickLocation() {
  var cols = floor(width / scl);
  var rows = floor(height / scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);

}
function draw() {
  //Call titlescreen
  titlescreen();
  background(0);
  //draw food
    fill(225,0,0);
    rect(food.x, food.y, scl, scl);
  //}

  if (s.eat(food)) {
    pickLocation();
  }

  if (scene === 0) {
    titlescreen();
  } else if (scene === 1) {
    s.death();
    s.update();
    s.show();
  }
  else if (scene === 2) {
    MainMenu();
  }
}

var mouseClicked = function () {
  if (
    scene === 0 &&
    mouseX < 360 &&
    mouseX > 160 &&
    mouseY < 380 && 
    mouseY > 330 
  ) {
    scene++;
  }
  else if
    (scene === 0 && 
     mouseX<360 &&
     mouseX>160 && mouseY<300 &&
     mouseY>250)
    {
      scene=2;
    }
  //escape main menu

    else if
    (scene === 2 && 
     mouseX<70 &&
     mouseX>25 && mouseY<510 &&
     mouseY>480)
    {
      scene=0;
    }

    // else if
    // (scene === 2 && 
    //  mouseX<360 &&
    //  mouseX>160 && mouseY<300 &&
    //  mouseY>250)
    // {
    //   scene=2;
    // }
};

function keyPressed() {
  if (keyCode === UP_ARROW && s.yspeed != 1) {
    s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW && s.yspeed != -1) {
    s.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW && s.xspeed != -1) {
    s.dir(1, 0);
  } else if (keyCode === LEFT_ARROW && s.xspeed != 1) {
    s.dir(-1, 0);
  }
}
