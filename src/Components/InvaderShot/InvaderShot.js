function InvaderShot(myGameArea, width, height, x, y) {
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.speed = 4;
  this.type = "invader";

  this.draw = function() {
    var ctx = myGameArea.context;
    ctx.save();
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.restore();
    this.spriteWidth = this.width;
    this.spriteHeight = this.height;
  }

  this.newPos = function() {
    this.y += this.speed * 1;
  }
}

export default InvaderShot;