class Gioco{
    constructor(){

    }
    draw(){
        stroke("black");
        strokeWeight(8);
        fill("blue");
        rect(o.ox, o.oy, o.size*3, o.size*3);
        strokeWeight(4);
        line(o.ox+o.size-1,o.oy,o.ox+o.size-1,o.oy+3*o.size);
        line(o.ox+2*o.size,o.oy,o.ox+2*o.size,o.oy+3*o.size);
        line(o.ox,o.oy+o.size-2,o.ox+3*o.size,o.oy+o.size-2);
        line(o.ox,o.oy+2*o.size+1,o.ox+3*o.size,o.oy+2*o.size+1);
    }
    reset(){
        
    }
}