class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }

       
        //this.sling3=loadImage("sprites/sling3.png");

        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    //slingShot=new SlingShot(this.polygon,{ x:100,y:200});

    display(){

        

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            //strokeWeight(4);\
            push();
            stroke(48,22,8);
            if(pointA.x<220){
                strokeWeight(7);
                line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-3);
                //image(this.sling3,pointA.x-30,pointA.y-10,15,30);
            }
            else{
                strokeWeight(3);
                line(pointA.x+20, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x+20, pointA.y, pointB.x+30, pointB.y-3);
                //image(this.sling3,pointA.x+25,pointA.y-10,15,30);
            }

            
            pop();

            
        }
        
        

    }
    
}