var gioco;
var o={
    CW:0,
    CH:0,
}

function init(){
    o.CW=windowWidth;
    o.CH=windowHeight;
    o.size=o.CW/5;
    if(o.CH/4<o.size){
        o.size=o.CH/4;
    }
    o.ox=(o.CW-o.size*4)/2
    o.oy=(o.CH-o.size*3)/2
}

function windowResized() {
    init();
    resizeCanvas(o.CW, o.CH)
    console.log("Uele")
}

function setup(){
    init();
    createCanvas(o.CW, o.CH).parent("canvas");
}
function draw(){
    background(161, 201, 198)
    gioco=new Gioco();
    gioco.draw()
}
