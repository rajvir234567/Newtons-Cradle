class Bob {
    constructor(x,y){ 
        var options = {
        isStatic:true,
        'restitution':0.3,
        'friction':0.5,
        'density':1.2,

        }
        this.body=Bodies.circle(x,y,20);
       
        this.radius=20;
    
        World.add(world, this.body)
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius,this.radius);
        pop();
    }
}