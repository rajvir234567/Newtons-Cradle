class Rope{
    constructor(bodyA, bodyB,offsetX,offsetY){
        
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB:{x: this.offsetX, y:this.offsetY}
        }
        //console.log(options)
        this.rope = constraint.create(options);
        World.add(world, this.rope);
    }
    attach(body){
        this.rope.bodyA = body;
    }
    
    fly(){
        this.rope.bodyA = null;
    }

    display(){
        if(this.rope.bodyA){
            var pointA = this.rope.bodyA.position;
            var pointB = this.rope.bodyB.position;

            line(pointA.x, pointA.y, pointB.x, pointB.y); 
        }
    }
}