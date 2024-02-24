import React from 'react'
import Nav from './Nav'

const Header = () => {
  return (
    <header className='Header'>
      <div>
        <h1>Loopstudios</h1>
        <Nav />
      </div>
        <h2 className='immersive'>Immersive experiences that deliver</h2>      
    </header>
  )
}

export default Header