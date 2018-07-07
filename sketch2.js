
var x1, x2, y1, y2, radius, gui;

function setup() {
    createCanvas(750, 750);
    angleMode(DEGREES);
    radius = 300;
    gui = new Gui();
}

function draw() {
    background(220);
    gui.set_gui();

    translate(width/2 + 60, height/2);

    strokeWeight(gui.sliderW.value());
    randomPattern();
}

function randomPattern(){
    //noprotect
	for(var degree = 0; degree < 360; degree += gui.sliderS.value()){
      	x1 = gui.sliderSR.value() * cos(gui.sliderSD.value()*degree);
      	y1 = gui.sliderSR.value() * sin(gui.sliderSD.value()*degree);
      	x2 = gui.sliderER.value() * cos(gui.sliderED.value()*degree);
  		y2 = gui.sliderER.value() * sin(gui.sliderED.value()*degree);
      	line(x1, y1, x2, y2);
    }
}
