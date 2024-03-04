import React, { useState } from 'react';
import Nav from './Nav';
import cart from '../../src/images/icon-cart.svg';
import avater from '../../src/images/image-avatar.png';
import open from '../images/icon-menu.svg';
import close from '../images/icon-close.svg';


const Header = () => {
  const [menuShow, setMenuShow] = useState(false);
 
  const toggleMenu = () => {
    setMenuShow(!menuShow);

    if(!menuShow){
      const navMenu = document.getElementById('navMenu');

      navMenu.classLIst.add('open-mobile-nav');
    } else{
      const navMenu = document.getElementById('navMenu');

      navMenu.classLIst.remove('open-mobile-nav');
    }
  }


  return (
    <header className='header'>
       <div className='menu' onClick={() => toggleMenu()}>
        {menuShow?
        <img src={close} alt=''/>
        :
        <img src={open} alt=''/>
        }
       </div>
       <div>
          <Nav/>
          <h1>sneackers</h1>
       </div>
       <div className='header-user'>
         <a href="cart.html"><img className='header-user-cart' src={cart} alt='cart'/></a>
         <a href="avater.html"><img className='header-user-avater' src={avater} alt='avater'/></a> 
       </div>
    </header>

  )
}

export default Header