class mango {
    constructor(x,y,height,width){
      var options={
        isStatic:true
      }
      
     
     // Matter.Body.setAngle(this.body, angle);
     this.img = loadImage("images/mango.png")
    this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.x=x;
        this.y=y;
       
        World.add(world, this.body);
    }
      display(){
       var pos =this.body.position
        
        imageMode(CENTER);
      image(this.img, this.x, this.y, this.width,this.height);
        
        
      }
  }