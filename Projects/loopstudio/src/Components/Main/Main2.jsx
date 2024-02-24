import React from 'react'

const Main2 = () => {
  return (
    <article className='Main2'>
      <section className='creation'>
        <h1>OUR CREATIONS</h1>
        <button>See all</button>
      </section>

      <section className='Main2sec1'>
      <div className='deepearth'>
        <h1>DEEP EARTH</h1>
      </div>
      <div className='nightarcade'>
        {/* <img src={nightarcade} alt='Night arcade' /> */}
        <h1>NIGHT ARCADE</h1>
      </div>
      <div className='soccerteam'>
        {/* <img src={soccerteam} alt='Footballer' /> */}
        <h1>SOCCER TEAM VR</h1>
      </div>
      <div className='grid'>
        {/* <img src={grid} alt='Exotic Car' /> */}
        <h1>THE GRID </h1>
      </div>
      </section>
    <section className='Main2sec2'>
        <div className='fromabove'>
          {/* <img src={fromabove} alt='top view' /> */}
          <h1>FROM UP ABOVE VR</h1>
        </div>
        <div className='borealis'>
          {/* <img src={pocketborealis} alt='borealis' /> */}
          <h1>POCKET BOREALIS</h1>
        </div>
        <div className='curiosity'>
          {/* <img src={curiosity} alt='curiosity' /> */}
          <h1>THE CURIOSITY</h1>
        </div>
        <div className='fisheye'>
          {/* <img src={fisheye} alt='fisheye' /> */}
          <h1>MAKE IT FISHEYE </h1>
        </div>
      </section>
    </article>
  )
}

export default Main2