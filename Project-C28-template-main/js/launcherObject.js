class launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 1
           
        }
        this.launcher = Constraint.create(options);
        this.pointB=pointB;
        World.add(world, this.launcher);

    }
    //write code for attach( ) here
    attach(body){
        this.launcher.bodyA = body
    }

    fly(){
        this.launcher.bodyA =null;
        
    }
    display(){
        if(this.launcher.bodyA){
        var pointA = this.launcher.bodyA.position;
        var pointB = this.pointB;
        
        strokeWeight(4);
        stroke("turquoise");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
        }
    
}
