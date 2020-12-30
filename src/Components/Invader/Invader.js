import InvaderShot from "../InvaderShot/InvaderShot";

function Invader(myGameArea, text, width, height, x, y) {
  this.text = text;
  this.width = width;
  this.height = height;
  this.speed = 1;
  this.angle = 0;
  this.moveAngle = 1;
  this.x = x;
  this.y = y;
  this.fill = "white";

  this.draw = function () {
    var ctx = myGameArea.context;
    ctx.save();
    ctx.fillStyle = this.fill;
    ctx.font = 'bold 2em arcadeFont';
    ctx.fillText(this.text, this.x, this.y);
    ctx.restore();
    this.spriteWidth = this.width;
    this.spriteHeight = this.height;
  }

  this.newPos = function () {
    this.angle += this.moveAngle * Math.PI / 240;
    this.x += this.speed * Math.sin(this.angle);
  }

  this.die = function () {
    this.fill = "rgb(32, 179, 76)";
  }

  this.createShot = function () {
    return new InvaderShot(
      myGameArea,
      0.3 * this.spriteWidth,
      0.6 * this.spriteHeight,
      this.x + 0.425 * this.spriteWidth,
      this.y - 0.8 * this.spriteHeight
    );
  };
}

export default Invader;