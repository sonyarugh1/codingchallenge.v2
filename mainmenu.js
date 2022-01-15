var MainMenu = function () {
  background(0, 0, 0);
  document.getElementById("mydiv").style.visibility ="visible";
  document.getElementById("mydiv2").style.visibility="hidden";
  //white rectangle
  fill(255, 255, 255);
  rect(20, 20, 500, 500);
  //food label
  textSize(14);
  fill(0,0,0);
  text('food:',30,150);
  //apple
  fill(255,0,0);
  rect(75,135,20,20);
  //grape
  fill(123, 0, 255);
  rect(110,135,20,20);
  //Blueberry
  fill(0, 174, 255);
  rect(145,135,20,20);
  //lemon
  fill(255, 234, 0);
  rect(180,135,20,20);
  //orange
  fill(255, 51, 0);
  rect(215,135,20,20);
  //green apple
  fill(43, 255, 0);
  rect(250,135,20,20);
  //Back arrow button
  fill(0);
  textSize(40);
  //back arrow
  text('<==',25,510)
  }
