import React, { useEffect } from 'react'
import NewGame from '../NewGame/NewGame'
import './SpaceInvaders.css'

function SpaceInvaders () {
  let isMobile = false

  useEffect(() => {
    const canvas = document.getElementById('space-invaders')
    NewGame(canvas)
  })
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    isMobile = true
  }
  let width = window.innerWidth * 0.7
  let height = window.innerHeight * 0.6

  if (isMobile) {
    width = window.innerWidth * 0.8
    height = window.innerHeight * 0.45
  }

  return (
    <canvas
      width={`${width}px`}
      height={`${height}px`}
      id="space-invaders"
    />
  )
}

export default SpaceInvaders
