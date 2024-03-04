import React, { useState } from 'react';
import cart from '../images/icon-cart.svg';


const MainLeft = () => {

  const [items, setItems] = useState(0);

  const handleIncrease = () => {
    setItems(items + 1);
  };

  const handleDecrease = () => {
    if (items > 0) {
      setItems(items - 1);
    }
  };


  const handleAddToCart = () => {
    alert('Item added to cart!');
  };


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
      <div className='mainleft-mid-num'>
        <strong >$125.00</strong>
        <div>
        <span >50%</span>
        </div>
      </div>
      <div className='mainleft-mid-discount'>$250.00</div>
    </section>
    <div className="mainleft-bot">
      <div className="mainleft-bot-count">
        <button>
        <span onClick={handleDecrease}>-</span>
        <div>{items}</div>
        <span onClick={handleIncrease}>+</span>
        </button>
      </div>
    <div className="mainleft-bot-add2cart">
      <button onClick={handleAddToCart}>
        <img src={cart} alt="Cart" />
        <p>Add to cart</p>
      </button>
    </div>
    </div>
   </article> 
  )
}

export default MainLeft