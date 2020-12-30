function Invader(myGameArea, text, width, height, x, y) {
  this.text = text;
  this.width = width;
  this.height = height;
  this.speed = 1;
  this.angle = 0;
  this.moveAngle = 1;
  this.x = x;
  this.y = y;

  this.draw = function() {
      var ctx = myGameArea.context;
      ctx.save();
      ctx.fillStyle = "white";
      ctx.font = 'bold 2em arcadeFont';
      ctx.fillText(this.text, this.x, this.y);  
      ctx.restore();    
  }

  this.newPos = function() {
    this.angle += this.moveAngle * Math.PI / 240;
    this.x += this.speed * Math.sin(this.angle);
  }
}

export default Invader;