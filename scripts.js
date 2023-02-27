var programCode = function(processingInstance) {
    with (processingInstance) {
      
      size(2000, 1000); 
      frameRate(60);
      
      noStroke();

      scale(2);
      var x = [];
      var y = [];

      var xpos = 0;
      var mouseisclicked = false;


      var xPositions = [0,400, 200, 400, 500, 300, 250, 275, 980, 670, 490];
      var yPositions = [0,500, 300, 5100, 200, 0, 600, 700, 1500, 800, 900];


      for (var i = 1; i < 100; i++) {
          x.push(random(0, 2000));
          y.push(random(0, 500));
      }

      var img = loadImage('images/mountain.png');
      var moon = loadImage('images/moon.png');
      var title=function() {
          textAlign(CENTER);
          textSize(40);
          rectMode(CENTER);

          background(0, 0, 0);
          
          stroke(255);
          strokeWeight(3);
          fill(0);

          pushMatrix();
          translate(mouseX/100, mouseY/100);
              for (var b = 0;b<=x.length;b++){
                  fill(255, 255, 255);
                  ellipse(x [b], y [b], 0.5, 0.5);
              }
              
              noStroke();


              image(moon, 820, 30, 100, 100)
              

              for (var s = 0; s < xPositions.length; s++) {
                noStroke();
                fill(0, 200, 255, 50);
                if(yPositions[s] > 500) {
                    yPositions[s] = 0;
                }
                rect(xPositions[s], yPositions[s], 3, 10,);
                yPositions[s] += random(1,10);
              }

              textSize(50)
                text("🌏", 1700, 100);
                text("🚀", 1400, 230);

          popMatrix();

          pushMatrix();
          translate(mouseX/40, mouseY/40);
              fill(255);
              text("E.S PORTFOLIO", width/2-500, 150);
              
              textSize(15);
              text("~ SCROLL TO KNOW MORE ~", width/2-40-500, 200);

              text("ABOUT >", 900, 170);
              text("< BACK", 1050, 170);

              fill(255);
          textSize(15);
          
          text("I am Eisa S., a junior (mainly web) developer based in the United Arab Emirates.\n I do HTML, CSS, and JS. Furthermore, I also work with 3D projects in Blender 3.0 sometimes, and I know a little bit of Python as well.", 1250, 150, 550, 500);
          popMatrix();

          pushMatrix();
          translate(mouseX/20, mouseY/20);
              
              image(img, -100, 175, 2100, 380);
              
              
          popMatrix();
          
          
          
      };


      draw = function() {
          translate(xpos, 0);
          title();
          cursor("none");
          
          stroke(255);
          strokeWeight(4);
          noFill();
          if (mouseX>292 && mouseY>109 && mouseX<711 && mouseY<260) {
              ellipse(mouseX, mouseY, 30, 30);
          }
          else if (mouseX>900 && mouseX <1000) {
               fill(255);
               textSize(30);
               text(">", mouseX, mouseY);
          }
          else if (mouseX>1000 && mouseX <1100) {
            fill(255);
            textSize(30);
            text("<", mouseX, mouseY);
       }
          else {
              line(mouseX, mouseY, pmouseX, pmouseY);
          }

          //fill(255);
          //text(mouseX+", "+mouseY, mouseX, mouseY);

          if (mouseisclicked===true && xpos>-1000) {
            xpos-=10;
          }
          else if (mouseisclicked===false && xpos<1) {
            xpos+=10;
          }
      }
      
      mouseClicked = function() {
         if (mouseX>900 && mouseX<1000) {
            mouseisclicked=true;
         }
         else if (mouseX<1100 && mouseX>1000) {
            mouseisclicked=false;
         }

         x.push(mouseX);
         y.push(mouseY);
      }

      mouseDragged = function() {
        x.push(mouseX);
         y.push(mouseY);
      }

      
    }};


  // Get the canvas that ProcessingJS will use
  var canvas = document.getElementById("mycanvas"); 
  // Pass the function to ProcessingJS constructor
  var processingInstance = new Processing(canvas, programCode); 