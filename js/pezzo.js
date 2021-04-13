class Pezzo{
    constructor(n){
        this.n=n;
    }
    draw(x,y){      //x,y are the center of the cell
        stroke("white");
        strokeWeight(o.LW);
        fill(161, 201, 198);
        if(this.n>0){
            line(x-o.size/2+2*o.LW,y-o.size/2+2*o.LW,x+o.size/2-2*o.LW,y+o.size/2-2*o.LW);
            line(x-o.size/2+2*o.LW,y+o.size/2-2*o.LW,x+o.size/2-2*o.LW,y-o.size/2+2*o.LW);
        }else if(this.n<0){
            circle(x,y,o.size/2+o.LW);
        }

    }
}