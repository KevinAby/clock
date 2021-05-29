function setup() {
  createCanvas(500,500);
 // createSprite(400, 200, 50, 50);
 angleMode(DEGREES);

 //text(""+hr+""+mn+""+sc,40,50)
}

function draw() {
  background("black"); 
 
  var hr =  hour();
  var mn= minute();
  var sc= second();
   textSize(25)
   fill("gold")
  text("TIME-"+hr+":"+mn+":"+sc,170,450)
  translate(200,200);
  fill("turquoise")
  textSize(29)
  text(""+3,105,12)
  text(""+12,-20,-90)
  //text(""+1,49,-75)
  text(""+6,-5,108)
  text(""+9,-105,13)

 

  rotate(-90);



  strokeWeight(8);
 stroke(244, 4, 0);
 noFill();
 var secondA = map(sc,0,60,0,360);
 arc(0,0,300,300,0,secondA);

 stroke(15, 245, 4);
 var minuteA = map(mn,0,60,0,360);
 arc(0,0,280,280,0,minuteA);

 stroke(13, 0, 227);
 var hourA = map(hr%12,0,12,0,360);
 arc(0,0,260,260,0,hourA);



 push();
 rotate(secondA);
 stroke(244, 4, 0);
 line(0,0,100,0);
 pop();

 push();
 rotate(minuteA);
 stroke(15, 245, 4);
 line(0,0,75,0);
 pop();

 push();
 rotate(hourA);
 stroke(13, 0, 227);
 line(0,0,50,0);
 pop();
 
 stroke(255);
 point(0,0)
 

 strokeWeight(3)
 stroke("purple")
  arc(0,0,315,315,0,360);
  
 

  drawSprites();
}