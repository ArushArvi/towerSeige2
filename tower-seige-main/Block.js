class Block{
  constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0,
          //'density':0.4
          
      }
      this.image = loadImage("block.png");
      this.Visibility = 255;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      
    }
    display(){
      imageMode(CENTER);
      var pos =this.body.position;
      if(this.body.speed < 3){
      push();
      console.log(this.body.speed);
      //translate(this.body.position.x, this.body.position.y); 
      //rect(pos.x, pos.y, this.width, this.height);
        image (this.image,pos.x,pos.y,this.width,this.height);
      pop();
      }
      else{
        World.remove(world,this.body);
        push();
        this.Visibility = this.Visibility-5;
        tint(255,this.Visibility);
        //rect(pos.x, pos.y, this.width, this.height);
        image (this.image,pos.x,pos.y,this.width,this.height);
        pop();
      }
    }
}