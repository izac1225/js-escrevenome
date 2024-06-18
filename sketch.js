function setup() {
    createCanvas(600, 600);
    background("green");
  }
  
  function draw() {
  
  stroke("orange");
  fill("blue");
  
  // console.log(mouseIsPressed);
  
  if (mouseIsPressed) {
    rect(mouseX, mouseY, 50, 40);
  }
  }