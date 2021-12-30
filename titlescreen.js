var titlescreen = function(){
//hide text
document.getElementById("mydiv").style.visibility="hidden";
  background(0);
  textSize(60);
  fill(0, 255, 4)
  text('Snake game',90,180);
  //Make rectangle for button
  fill(255,255,255)
  rect(160,250,200,50);
  rect(160,330,200,50);
  fill(0,0,0);
  textSize(30)
  text('Main menu',185,290)
  text('Start',225,370)
};
