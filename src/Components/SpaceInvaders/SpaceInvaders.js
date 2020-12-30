import React, { useEffect } from 'react'
import NewGame from '../NewGame/NewGame'
import './SpaceInvaders.css'

function SpaceInvaders () {
  useEffect(() => {
    const canvas = document.getElementById('space-invaders')
    NewGame(canvas)
  })

  return (
    <canvas
      width={`${window.screen.width * 0.55}px`}
      height={`${window.screen.width * 0.38}px`}
      id="space-invaders"
    />
  )
}

export default SpaceInvaders
