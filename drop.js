class Drop{
    constructor(x,y){
        var options = {
            isStatic:false
        }
        this.body = Bodies.rectangle(x,y,5,5,options);
        this.width= 5;
        this.height= 5;
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x , pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        ellipse(pos.x , pos.y , this.width,this.height);
        pop();
    }
}