class Gioco {
    constructor() {
        this.layout = [];
        this.u = new Undo;
        this.reset();
    }
    draw() {
        stroke("white");
        //strokeWeight(8);
        //fill("blue");
        //rect(o.ox, o.oy, o.size*3, o.size*3);
        strokeWeight(o.LW);
        line(o.ox + o.size, o.oy, o.ox + o.size, o.oy + 3 * o.size);
        line(o.ox + 2 * o.size, o.oy, o.ox + 2 * o.size, o.oy + 3 * o.size);
        line(o.ox + o.LW / 2, o.oy + o.size, o.ox + 3 * o.size - o.LW / 2, o.oy + o.size);
        line(o.ox + o.LW / 2, o.oy + 2 * o.size, o.ox + 3 * o.size - o.LW / 2, o.oy + 2 * o.size);
        // line(o.ox+o.LW/2,o.oy,o.ox+3*o.size-o.LW/2,o.oy)
        // line(o.ox,o.oy,o.ox,o.oy+3*o.size-o.LW/2)
    }
    reset() {
        this.layout = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.isCross = 1
        this.u.reset();
    }
    undo() {
        var tm=this.u.pop();
        if(tm){this.layout =tm};
    }
}
