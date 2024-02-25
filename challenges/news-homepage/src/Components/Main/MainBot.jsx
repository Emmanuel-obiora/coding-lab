import React from 'react';
import Img1 from '../../images/image-retro-pcs.jpg';
import Img2 from '../../images/image-top-laptops.jpg';
import Img3 from '../../images/image-gaming-growth.jpg';

const MainBot = () => {
  return (
    <div className='main-bot'>
      <section>
        <img src={Img1} alt="Reviving Retro PCs" />
        <article>
          <strong>01</strong>
          <h3>Reviving Retro PCs</h3>
          <p>What happens when old PCs are given modern upgrades?</p>
        </article>
      </section>

      <section>
        <img src={Img2} alt="Top Laptops" />
        <article>
          <strong>02</strong>
          <h3>Top 10 Laptops of 2022</h3>
          <p>Our best picks for various needs and budgets.</p>
        </article>
      </section>
      
      <section>
        <img src={Img3} alt="Gaming" />
        <article>
          <strong>03</strong>
          <h3>The Growth of Gaming</h3>
          <p>How the pandemic has sparked fresh opportunities.</p>
        </article>
      </section>
    </div>
  )
}
export default MainBot