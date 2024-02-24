import React from 'react';
import deepearth from '../images/desktop/image-deep-earth.jpg';
import nightarcade from '../images/desktop/image-night-arcade.jpg';
import soccerteam from '../images/desktop/image-soccer-team.jpg';
import grid from '../images/desktop/image-grid.jpg';
import fromabove from '../images/desktop/image-from-above.jpg';
import pocketborealis from '../images/desktop/image-pocket-borealis.jpg';
import curiosity from '../images/desktop/image-curiosity.jpg';
import fisheye from '../images/desktop/image-fisheye.jpg';

const MainBodyBottom = () => {
  return (
    <article className='MainBodyBottom'> 
      <sction>
        <h1>Our creations</h1>
        <h2>See all</h2>
      </sction>                               
      <section>
        <div>
            <img src= {deepearth} alt='Half Moon' />
            <h1>DEEP EARTH</h1>
        </div>
        <div>
            <img src= {nightarcade} alt='Night arcade' />
            <h1>NIGHT ARCADE</h1>
        </div>
        <div>
            <img src= {soccerteam} alt='Footballer' />
            <h1>SOCCER TEAM VR</h1>
        </div>
        <div>
            <img src= {grid} alt='Exotic Car' />
            <h1>THE GRID </h1>
        </div>
      </section>
      <section>
        <div>
          <img src= {fromabove} alt='top view' />
          <h1>FROM UP ABOVE VR</h1>
        </div>
        <div>
          <img src= {pocketborealis} alt='borealis' />
          <h1>POCKET BOREALIS</h1>
        </div>
        <div>
          <img src= {curiosity} alt='curiosity' />
          <h1>THE CURIOSITY</h1>
        </div>
        <div>
          <img src= {fisheye} alt='fisheye' />
          <h1>MAKE IT FISHEYE </h1>
        </div>
      </section>
    </article>
  )
}

export default MainBodyBottom