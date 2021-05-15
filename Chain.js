class Chain{
constructor(bodyA,bodyB){
 var options ={
     bodyA:bodyA,
     bodyB:bodyB,
     lenght:10,
     stiffness:.04
 }
 this.chain=Constraint.create(options)
 World.add(world,this.chain)
}
display(){
    strokeWeight(4)
    line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y)
}


}