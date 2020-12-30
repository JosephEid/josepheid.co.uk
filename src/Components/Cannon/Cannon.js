import CannonShot from '../CannonShot/CannonShot'

function Cannon (myGameArea, width, height, x, y) {
  this.width = width
  this.height = height
  this.speed = 1
  this.x = x
  this.y = y

  this.draw = function () {
    const ctx = myGameArea.context
    ctx.save()
    ctx.fillStyle = 'rgb(32, 179, 76)'
    ctx.fillRect(this.x, this.y, 2 * this.width, 0.7 * this.height)
    ctx.fillRect(
      this.x + 0.25 * width,
      this.y - 0.2 * this.height + 1,
      1.5 * this.width,
      0.2 * this.height
    )
    ctx.fillRect(
      this.x + 0.825 * width,
      this.y - 0.5 * this.height + 2,
      0.3 * this.width,
      0.3 * this.height
    )
    ctx.restore()
    this.spriteWidth = 2 * this.width
    this.spriteHeight = 1.2 * this.height
  }

  this.newPos = function (newX) {
    this.x = newX
  }

  this.createShot = function () {
    return new CannonShot(
      myGameArea,
      0.1 * this.spriteWidth,
      0.4 * this.spriteHeight,
      this.x + 0.425 * this.spriteWidth,
      this.y - 0.8 * this.spriteHeight
    )
  }
}

export default Cannon
