import React from 'react'
import './Header.css'
import SpaceInvaders from '../SpaceInvaders/SpaceInvaders'
import NavBar from '../NavBar/NavBar'

function Header () {
  const screenHeight = window.innerHeight
  return (
    <header id="home" style={{ height: `${screenHeight}px` }} className="Header">
      <NavBar />
      <div className="Header__Content">
        <SpaceInvaders />
        <div>
        <a className="Header__Down-Button" href="#about">
          <i className='fa fa-arrow-down Header__DownIcon' />
        </a>
        </div>
      </div>
    </header>
  )
}

export default Header
