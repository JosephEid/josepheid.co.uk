function Cannon(myGameArea, width, height, x, y) {
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
      ctx.fillStyle = "rgb(32, 179, 76)";
      ctx.font = 'bold 2em arcadeFont';
      ctx.fillText("C", this.x, this.y);  
      ctx.restore();    
  }

  this.newPos = function(newX) {
      this.x = newX;
  }
}

export default Cannon;