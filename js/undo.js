class Undo{
    constructor(){
        this.v=[];
    }
    push(layout){
        this.v.push(layout);
    }
    pop(){
        return this.v.pop();
    }
    reset(){
        this.v=[];
    }
}