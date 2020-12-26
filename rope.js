class Rope {
    constructor(objectA,objectB,offsetX,offsetY){

        this.offsetX = offsetX
        this.offsetY = offsetY
        var options ={
            bodyA : objectA,
            bodyB : objectB,
            pointB :{x:this.offsetX, y: this.offsetY}
        }
        this.rope = Constraint.create(options)
        World.add(world, this.rope)
    }
    display() {
        push()
        strokeWeight(5)
        line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.rope.bodyB.position.x,this.rope.bodyB.position.y)
        pop()  
    }
  };