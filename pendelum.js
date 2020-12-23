class Pendelum {
    constructor(x,y,color){ 
        var options = {
           
            'restitution':1,
            'friction':0,
            'frictionAir':0.0,
            'slop':1,
            'intertia':Infinity
        }
        this.body=Bodies.rectangle(x,y,40,40, options); 
        this.color = color   
        World.add(world, this.body)
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,40,40);
        pop();
    }
}