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
        this.sling.bodyA = body;
    }
    
    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;

                line(pointA.x, pointA.y, pointB.x, pointB.y); 
        }
    }
}