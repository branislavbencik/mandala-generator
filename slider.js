
class slider{
    var min, max, start, segment_size, bar_size;
    var x, y;

    slider(min, max, start, segment_size){
        this.min = min;
        this.max = max;
        this.start = start;
        this.segment_size = segment_size;
        this = createSlider(min, max, start, segment_size);
    }

    function setStyle(bar_size){
        this.bar_size = bar_size;
        this.style("width", String(bar_size) + "px");
    }

    function setPosition(x, y){
        this.x = x;
        this.y = y;
        this.position(x, y);
    }
}
