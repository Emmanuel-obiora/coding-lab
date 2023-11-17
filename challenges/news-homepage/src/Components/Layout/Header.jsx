import React, { useState } from 'react';
import Nav from './Nav';
import Logo from '../../images/logo.svg';
import Open from '../../images/icon-menu.svg';
import Close from '../../images/icon-menu-close.svg';

const Header = () => {
  const [menuShow, setMenuShow] = useState(false);

  const toggleMenu = () =>{
    setMenuShow(!menuShow);

    if(!menuShow){
      const navMenu = document.getElementById('navMenu');

      navMenu.classList.add('open-mobile-nav');
    } else{
      const navMenu = document.getElementById('navMenu');

      navMenu.classList.remove('open-mobile-nav');
    }
  }


  return (
    <header className='header'>
      <img src={Logo} alt="" />
      <Nav />
      <div className='menu' onClick={()=>toggleMenu()}>
        {menuShow?
          <img src={Close} alt="" />
        :
          <img src={Open} alt="" />
        }
      </div>
    </header>
  )
}

export default Header