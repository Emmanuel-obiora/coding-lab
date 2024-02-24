import React from 'react'
import Nav from './Nav';
import cart from '../../src/images/icon-cart.svg';
import avater from '../../src/images/image-avatar.png';

const Header = () => {
  return (
    <header className='header'>
       <div>
          <h1>sneackers</h1>
          <Nav/>
       </div>
        <div>
         <a href="cart.html"><img className='header-cart' src={cart} alt='cart'/></a>
         <a href="avater.html"><img className='header-avater' src={avater} alt='avater'/></a> 
        </div>

    </header>

  )
}

export default Header