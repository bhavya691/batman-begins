class Umbrella{
    constructor(x,y){
        this.body = Bodies.rectangle(x,y,50,50);
        this.width = 350;
        this.height = 350;
        this.image = loadImage("walking_1.png" );
        
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
    }
}