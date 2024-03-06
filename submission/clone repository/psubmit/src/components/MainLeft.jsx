import React from 'react'
import cart from '../images/icon-cart.svg';

const mainLeft = () => {
  return (
   <article className='mainleft'>
    <div className='mainleft-top'>
      <h5>Sneaker Company</h5>
      <h1> Fall Limited Edition</h1>
      <h2>Sneakers</h2>
      <p>
        These low-profile sneakers are your perfect casual wear companion. Featuring a 
        durable rubber outer sole, they’ll withstand everything the weather can offer.
      </p>
    </div>
    <section className='mainleft-mid'>
      <div>
        <strong className='mainleft-mid-amount'>$125.00</strong>
        <span className='mainleft-mid-percent'>50%</span>
      </div>
      <div className='mainleft-mid-discount'>$250.00</div>
    </section>
    <div className='mainleft-bot'>
      <input type="range" className='mainleft-bot-select'></input>
      <button className='mainleft-bot-cart'> <span><img src={cart} alt="" /></span>Add to Cart</button>
    </div>
   </article> 
  )
}

export default mainLeft