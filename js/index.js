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
    o.LW=o.size*0.1;
}

function windowResized() {
    init();
    resizeCanvas(o.CW, o.CH)
}

function setup(){
    init();
    createCanvas(o.CW, o.CH).parent("canvas");
    frameRate(10);
    gioco=new Gioco();
}

function toXY(i){
    var r=Math.floor(i/3);
    var c=i%3;
    var y=o.oy+(r+1/2)*o.size;
    var x=o.ox+(c+1/2)*o.size;
    return {x,y}
}

function toI(x,y){
    for(var r=0;r<3;r++){
        for(var c=0;c<3;c++){
            if (o.ox+c*o.size<x&&x<=o.ox+(c+1)*o.size
            &&o.oy+r*o.size<y&&y<=o.oy+(r+1)*o.size){
                return 3*r+c
            }
        }
    }
    return 100
}

function draw(){
    background(161, 201, 198);
    gioco.draw()
    for(var i=0;i<9;i++){
        pezzo=new Pezzo(gioco.layout[i]);
        var {x,y}=toXY(i)
        pezzo.draw(x,y);
    }
//     pezzo=new Pezzo(1);
//     pezzo.draw(o.ox+3*o.size/2,o.oy+3*o.size/2);
 }

function mousePressed(){
    var i=toI(mouseX,mouseY);
    if(i!=100&&gioco.layout[i]==0){
        var tmp=JSON.parse(JSON.stringify(gioco.layout));
        gioco.u.push(tmp);
        gioco.layout[i]=gioco.isCross;
        gioco.isCross=-gioco.isCross;
    }

}

function keyPressed(){
    switch(key){
        case "r":
            gioco.reset();
            break;
        case "u":
            gioco.undo();
            gioco.isCross=-gioco.isCross;
            break;
    }
}
