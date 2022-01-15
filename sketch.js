//Display title screen and game screen
var scene = 0;

//Snake variable
var s;
//Scale variable
var scl = 20;
//Food variable
var food;
var r;
var g;
var b;
//Function to set up canvas and snake
function setup() {
  createCanvas(520, 520);
  s = new Snake();
  frameRate(10);
  pickLocation();
}

function pickLocation() {
  var cols = floor(width / scl);
  var rows = floor(height / scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);

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
  else if 
    (scene === 3 &&
      mouseX<500 &&
     mouseX>0 && mouseY<500 &&
     mouseY>0)
    {
      scene=0;
    }
    if (scene === 2 &&     
    mouseX < 95 &&
    mouseX > 75 &&
    mouseY < 155 && 
    mouseY > 135 )
    {
      r=255
      g=0
      b=0
    }
  else if (scene === 2 &&     
    mouseX < 130 &&
    mouseX > 110 &&
    mouseY < 155 && 
    mouseY > 135 )
    {
     r=123
     g=0
     b=255
    }
    else if (scene === 2 &&     
    mouseX < 165 &&
    mouseX > 145 &&
    mouseY < 155 && 
    mouseY > 135 )
    {
     r=0
     g=174
     b=255
    }
      else if (scene === 2 &&     
    mouseX < 195 &&
    mouseX > 175 &&
    mouseY < 155 && 
    mouseY > 135 )
    {
     r=255
     g=234
     b=0
    }
        else if (scene === 2 &&     
    mouseX < 230 &&
    mouseX > 210 &&
    mouseY < 155 && 
    mouseY > 135 )
    {
     r=255
     g=51
     b=0
    }
        else if (scene === 2 &&     
    mouseX < 265 &&
    mouseX > 245 &&
    mouseY < 155 && 
    mouseY > 135 )
    {
     r=43
     g=255
     b=0
    }
};
function draw() {
  //Call titlescreen
  titlescreen();
  background(0);
  //draw food

  fill (r,g,b);
  rect(food.x, food.y, scl, scl);
  

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
  else if (scene === 3)
    {
      gameover();
    }
}

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

