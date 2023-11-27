import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='nav ' id='navMenu'>
      <ul >
        <li><Link to="/main">Home</Link></li>
        <li><Link to="/form">Form</Link></li>
        <li><Link to="/popular">Popular</Link></li>
        <li><Link to="/trending">Trending</Link></li>
        <li><Link to="/categories">Categories</Link></li>
      </ul>
    </nav>
  )
}

export default Nav