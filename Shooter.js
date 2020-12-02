class Shooter  {
    constructor(x, y,r){
      var options = {
        isStatic:false,
        restitution:0.8,
        friction:1.0,
        density:1.0
      }
      this.x=x
      this.y=y
      this.r=r
      this.body=Bodies.circle(this.x,this.y,this.r,options)
      this.image=loadImage("polygon.png")
      World.add(world,this.body)
    }
  
    display(){
      var pos = this.body.position;
      fill("blue");
      imageMode(CENTER);
      image(this.image,pos.x,pos.y,this.r,this.r);
    }
  
  }
  