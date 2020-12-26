class Bob{
    constructor(x,y){
    var options={
        isStatic:true,
        restitution:0.3,
        friction:0.5,
        density:1.2
    }
    
    this.body = Bodies.circle(x,y,50,[options])
    World.add(world, this.body)
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y);
        fill("purple")
        ellipse(0,0,50)
        pop();
    }
}