function CannonShot (myGameArea, width, height, x, y) {
  this.width = width
  this.height = height
  this.x = x
  this.y = y
  this.speed = 4
  this.type = 'cannon'

  this.draw = function () {
    const ctx = myGameArea.context
    ctx.save()
    ctx.fillStyle = 'rgb(32, 179, 76)'
    ctx.fillRect(this.x, this.y, this.width, this.height)
    ctx.restore()
    this.spriteWidth = this.width
    this.spriteHeight = this.height
  }

  this.newPos = function () {
    this.y -= this.speed * 1
  }
}

export default CannonShot
