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
      width={`${window.innerWidth * 0.7}px`}
      height={`${window.innerHeight * 0.8}px`}
      id="space-invaders"
    />
  )
}

export default SpaceInvaders
