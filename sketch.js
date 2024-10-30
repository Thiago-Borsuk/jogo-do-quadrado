function setup() {
    createCanvas(500, 500);
    background("red");
  }
  
  function draw() {
    fill("black");
    stroke("white");
    if(mouseIsPressed){
      rect(mouseX,mouseY,20,20);
    }
  }
   