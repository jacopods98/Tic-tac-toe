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
        var tm = this.u.pop();
        if (tm) {
            this.layout = tm;
            this.isCross = -this.isCross;
        }
    }
    checkWinner() {
        var check = [0, 0, 0, 0, 0, 0, 0, 0];
        check[0] = this.layout[0] + this.layout[1] + this.layout[2] //row1  
        check[1] = this.layout[3] + this.layout[4] + this.layout[5] //row2
        check[2] = this.layout[6] + this.layout[7] + this.layout[8] //row3
        check[3] = this.layout[0] + this.layout[3] + this.layout[6] //col1
        check[4] = this.layout[1] + this.layout[4] + this.layout[7] //col2
        check[5] = this.layout[2] + this.layout[5] + this.layout[8] //col3
        check[6] = this.layout[0] + this.layout[4] + this.layout[8] //diag2-4
        check[7] = this.layout[6] + this.layout[4] + this.layout[2] //diag1-3
        for (var i = 0; i < 8; i++) {
            if (check[i] == 3) {
                return "cross";
            } else if (check[i] == -3) {
                return "circle";
            }
        }
        var tmp=0
        for (var i=0;i<9;i++){
            tmp+=Math.abs(this.layout[i])
        }
        if(tmp==9){
            return "draw";
    }
}
}
