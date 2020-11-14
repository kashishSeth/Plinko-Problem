class Particle{
    constructor(x, y, radius){
    var options = {
      isStatic: false,
      restitution: 1
    } 
    this.color = color(random(0,255), random(0,255), random(0,255));
    this.body = Bodies.circle(x, y, radius/2, options);
    this.radius = radius
    World.add(world, this.body);    
    }
    display(){
     var pos = this.body.position
     var angle = this.body.angle
   
     push();

   translate(pos.x, pos.y);
     ellipseMode(CENTER);
     rotate(angle);
     fill(this.color);
     ellipse(0, 0, this.radius, this.radius);
         
   pop();

}
}