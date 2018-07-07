
var x, y, gui, graphics;
var A_deg, B_deg, A_radius, B_radius;
var line_width, seg_num, file_res, save_button;
var saveImage = false;
var scaling = 1;
var DEFAULTWIDTH = 800;
var DEFAULTHEIGHT = 680;

function setup() {
  angleMode(DEGREES);
  createCanvas(DEFAULTWIDTH, DEFAULTHEIGHT);

  // make two separate frames for purpose of downloading img without gui
  gui = createGraphics(120, 680);
  g = createGraphics(680, 680);
  g.translate(width/2 - 60, height/2);

  makeGui();
}

function draw() {
  drawGui();
  drawGraphics();

  image(gui, 0, 0);
  image(g, 120, 0);

}

function makeGui(){
  A_deg = createSlider(0, 180, 116, 0.02);
  A_deg.style("width", "100px");
  A_deg.position(10, 60);

  B_deg = createSlider(0, 180, 81, 0.02);
  B_deg.style("width", "100px");
  B_deg.position(10, 130);

  A_radius = createSlider(0, 300, 150, 0.5);
  A_radius.style("width", "100px");
  A_radius.position(10, 200);

  B_radius = createSlider(0, 300, 300, 0.5);
  B_radius.style("width", "100px");
  B_radius.position(10, 270);

  line_width = createSlider(0.01, 0.7, 0.2, 0.01);
  line_width.style("width", "100px");
  line_width.position(10, 340);

  seg_num = createSlider(0.03, 1, 0.5, 0.001);
  seg_num.style("width", "100px");
  seg_num.position(10, 410);

  file_res = createInput("file resolution in px");
  file_res.style("width", "100px");
  file_res.position(7, 470);

  save_button = createButton("download file");
  save_button.position(15, 500);
  save_button.mousePressed(saveFile);
}

function drawGui(){
  gui.background(220);

  gui.text("startpoint degree:", 15, 50);
  gui.text(A_deg.value() + " '", 40, 90);

  gui.text("endpoint degree:", 15, 120);
  gui.text(B_deg.value() + " '", 40, 160);

  gui.text("startpoint radius:", 15, 190);
  gui.text(A_radius.value() + " px", 40, 230);

  gui.text("endpoint radius:", 15, 260);
  gui.text(B_radius.value() + " px", 40, 300);

  gui.text("line width:", 30, 330);
  gui.text(line_width.value() + " px", 40, 370);

  gui.text("num of segments:", 15, 400);
  gui.text(Math.floor(360 / seg_num.value()) + " segments", 25, 440);
}

function drawGraphics(){
  g.background(220);
  g.strokeWeight(line_width.value());
  randomPattern();
}

function randomPattern(){
    //noprotect
	for(var deg = 0; deg < 360; deg += seg_num.value()){
      	x1 = scaling * A_radius.value() * cos(A_deg.value()*deg);
      	y1 = scaling * A_radius.value() * sin(A_deg.value()*deg);
      	x2 = scaling * B_radius.value() * cos(B_deg.value()*deg);
  		y2 = scaling * B_radius.value() * sin(B_deg.value()*deg);
      	g.line(x1, y1, x2, y2);
    }
}

function saveFile(){
  	resizeCanvas(file_res.value(), file_res.value());
  	g = createGraphics(file_res.value(), file_res.value());
  	g.translate(width/2, height/2);

  	scaling = (float)(file_res.value() / DEFAULTHEIGHT);
  	console.log(scaling);
  	drawGraphics();
    image(g, 0, 0, file_res.value(), file_res.value());
    gui.saveCanvas(g, 'mandala', 'png');

  	resizeCanvas(DEFAULTWIDTH, DEFAULTHEIGHT);
  	g = createGraphics(680, 680);
  	g.translate(width/2 - 60, height/2);
  	scaling = 1;
}
