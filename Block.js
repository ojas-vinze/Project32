class Block  {
  constructor(x, y, width, height){
    var options = {
      isStatic:false,
      restitution:0.8,
      friction:1.0,
      density:1.0
    }
    this.body=Bodies.rectangle(x,y,width,height,options)
    this.x=x
    this.y=y
    this.width=width
    this.height=height
	  this.visibility=255
    World.add(world,this.body)
  }

  score(){
    if(this.visibility<0 && this.visibility>-105){
      score++;
    }
  }

  display(){
    var pos = this.body.position;
	if(this.body.speed<5){
    fill(color(0,0,255));
    rectMode(CENTER);
    rect(pos.x,pos.y,this.width,this.height);
	}
	else{
  push();
  World.remove(world,this.body);
  this.visibility=this.visibility-5;
  tint(0,0,this.visibility);
  // rect(pos.x,pos.y,this.width,this.height);
  pop();
}
  }
}