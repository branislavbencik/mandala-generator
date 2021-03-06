
class gui{
    constructor(){
        sliderSD = createSlider(0, 180, 116, 0.5);
        sliderSD.style("width", "200px");
        sliderSD.position(10, 30);

        sliderED = createSlider(0, 180, 81, 0.5);
        sliderED.style("width", "200px");
        sliderED.position(10, 100);

        sliderSR = createSlider(0, 300, 150, 0.2);
        sliderSR.style("width", "100px");
        sliderSR.position(10, 170);

        sliderER = createSlider(0, 300, 300, 0.2);
        sliderER.style("width", "100px");
        sliderER.position(10, 240);

        sliderW = createSlider(0.01, 0.7, 0.2, 0.01);
        sliderW.style("width", "100px");
        sliderW.position(10, 310);

        sliderS = createSlider(0.03, 1, 0.5, 0.001);
        sliderS.style("width", "100px");
        sliderS.position(10, 380);

        button = createButton('save file');
        button.position(25, 440);
        button.mousePressed(saveFile);
    }
}

function set_gui(){
    text("startpoint degree:", 15, 20);
    text(sliderSD.value() + " '", 45, 60);

    text("endpoint degree:", 15, 90);
    text(sliderED.value() + " '", 40, 130);

    text("startpoint radius:", 15, 160);
    text(sliderSR.value() + " px", 40, 200);

    text("endpoint radius:", 15, 230);
    text(sliderER.value() + " px", 40, 270);

    text("line width:", 30, 300);
    text(sliderW.value() + " px", 40, 340);

    text("num of segments:", 15, 370);
    text(Math.floor(360 / sliderS.value()) + " segments", 40, 410);
}

function saveFile(){
    saveCanvas('mandala_n1', 'png');
}
