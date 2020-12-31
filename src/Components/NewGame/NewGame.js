import Cannon from '../Cannon/Cannon'
import Invader from '../Invader/Invader'

function NewGame (canvas) {
  let lives = 3
  let score = 0
  let end = false
  let dir = 'R'

  const myGameArea = {
    start () {
      this.context = canvas.getContext('2d')
      this.frameNo = 0
      this.shotInvertal = setInterval(randomShot, 400)
      this.xInterval = setInterval(moveInvaders, 1000)
      this.interval = setInterval(updateGameArea, 20)
    },
    stop () {
      clearInterval(this.interval)
    },
    clear () {
      this.context.clearRect(0, 0, canvas.width, canvas.height)
    }
  }

  const invaders = []
  const invaderRows = []
  const cannonShots = []
  const invaderShots = []

  const cannon = new Cannon(
    myGameArea,
    canvas.height * 0.05,
    canvas.height * 0.05,
    0,
    canvas.height * 0.9
  )
  invaderRows.push(
    ' Joseph Eid, Software Engineer',
    'currently working in London, UK'
  )

  for (let i = 0; i < invaderRows.length; i++) {
    for (let j = 0; j < invaderRows[i].length; j++) {
      invaders.push(
        new Invader(
          myGameArea,
          invaderRows[i][j],
          canvas.height * 0.025,
          canvas.height * 0.025,
          j * 20,
          (i + 1) * 30
        )
      )
    }
  }

  canvas.onmousemove = getMousePos
  canvas.onmousedown = handleClick
  myGameArea.start()
  function updateGameArea () {
    myGameArea.clear()
    invaders.forEach((x) => x.draw())
    cannonShots.forEach((x) => x.draw())
    cannonShots.forEach((x) => x.newPos())
    cannonShots.forEach((x) => checkIfOob(x))
    cannonShots.forEach((x) => checkIfKill(x))
    invaderShots.forEach((x) => x.draw())
    invaderShots.forEach((x) => x.newPos())
    invaderShots.forEach((x) => checkIfOob(x))
    invaderShots.forEach((x) => checkIfKill(x))
    cannon.draw()
    drawScoreboard()
    checkEnd()
  }

  let distance = 50
  function moveInvaders () {
    const height = invaders[0].spriteHeight

    if (invaders.some((x) => x.x >= canvas.width * 0.9) && dir === 'R') {
      dir = 'L'
      distance = -50
      invaders.forEach((x) => x.rowDown(height))
    } else if (invaders.some((x) => x.x <= canvas.width * 0.1) && dir === 'L') {
      dir = 'R'
      distance = 50
      invaders.forEach((x) => x.rowDown(height))
    }
    invaders.forEach((x) => x.newPos(distance))
  }

  function checkEnd () {
    const nonDeadInvaders = invaders.filter(
      (x) => x.fill === 'white' && x.text !== ' '
    )
    if (nonDeadInvaders.length === 0) {
      myGameArea.stop()
      drawWin()
    } else if (lives === 0 || invaders.some((x) => x.y >= canvas.height * 0.9)) {
      myGameArea.stop()
      drawLose()
    }
  }

  function drawWin () {
    const ctx = myGameArea.context
    ctx.fillStyle = 'rgb(32, 179, 76)'
    ctx.font = 'bold 2em arcadeFont'
    ctx.fillText(
      'YOU WIN',
      0.4 * canvas.width,
      0.99 * canvas.height
    )
    ctx.fillStyle = 'white'
    ctx.fillText(
      'Click anywhere to try again.',
      0.55 * canvas.width,
      0.99 * canvas.height
    )
    end = true
  }

  function drawLose () {
    const ctx = myGameArea.context
    ctx.fillStyle = 'red'
    ctx.font = 'bold 2em arcadeFont'
    ctx.fillText(
      'GAME OVER',
      0.4 * canvas.width,
      0.99 * canvas.height
    )
    ctx.fillStyle = 'white'
    ctx.fillText(
      'Click anywhere to try again.',
      0.55 * canvas.width,
      0.99 * canvas.height
    )
    end = true
  }

  function drawScoreboard () {
    const ctx = myGameArea.context
    ctx.fillStyle = 'rgb(32, 179, 76)'
    ctx.font = 'bold 2em arcadeFont'
    ctx.fillText(
      `♥︎: ${lives}      score: ${score}`,
      0.01 * canvas.width,
      0.99 * canvas.height
    )
  }

  function randomShot () {
    const nonDeadInvaders = invaders.filter(
      (x) => x.fill === 'white' && x.text !== ' '
    )
    const randomInvader = nonDeadInvaders[Math.floor(Math.random() * nonDeadInvaders.length)]
    if (randomInvader) invaderShots.push(randomInvader.createShot())
  }

  function checkIfOob (shot) {
    if (shot.type === 'cannon') {
      if (shot.y < 0) {
        cannonShots.splice(cannonShots.indexOf(shot), 1)
      }
    } else if (shot.y >= canvas.height) {
      invaderShots.splice(invaderShots.indexOf(shot), 1)
    }
  }

  function checkIfKill (shot) {
    const shotXMin = shot.x
    const shotXMax = shotXMin + shot.spriteWidth
    const shotYMin = shot.y
    const shotYMax = shotYMin + shot.spriteHeight
    if (shot.type === 'cannon') {
      for (let i = 0; i < invaders.length; i++) {
        const inv = invaders[i]
        const invXMin = inv.x
        const invXMax = invXMin + inv.spriteWidth
        const invYMin = inv.y
        const invYMax = invYMin + inv.spriteHeight
        if (
          shotXMax >= invXMin &&
          shotXMin <= invXMax &&
          shotYMin <= invYMax &&
          shotYMax >= invYMin &&
          inv.fill === 'white' &&
          inv.text !== ' '
        ) {
          inv.die()
          cannonShots.splice(cannonShots.indexOf(shot), 1)
          score += 100
        }
      }
    } else {
      const canXMin = cannon.x
      const canXMax = canXMin + cannon.spriteWidth
      const canYMin = cannon.y
      const canYMax = canYMin + cannon.spriteHeight
      if (
        shotXMax >= canXMin &&
        shotXMin <= canXMax &&
        shotYMin <= canYMax &&
        shotYMax >= canYMin
      ) {
        invaderShots.splice(invaderShots.indexOf(shot), 1)
        lives -= 1
      }
    }
  }

  function getMousePos (evt) {
    const rect = canvas.getBoundingClientRect()
    cannon.newPos(evt.clientX - rect.left - cannon.width / 2)
  }

  function handleClick () {
    if (end) {
      myGameArea.clear()
      end = false
      NewGame(canvas)
    } else {
      cannonShots.push(cannon.createShot())
    }
  }
}

export default NewGame
