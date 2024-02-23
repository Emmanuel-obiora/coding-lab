import React from 'react'

const Footer = () => {
  return (
    <footer className='footer'>
      <section className='footerleft'>
        <div>
          <h1> Loopstudios </h1>
        </div>
        <div>
          <><ul className='footerleftnav'>
            <li><a href="./">About</a></li>
            <li> <a href="./">Careers</a></li>
            <li> <a href="./">Events</a></li>
            <li> <a href="./">Products</a></li>
            <li> <a href="./">Support</a></li>
          </ul></>
        </div>
      </section>
      <section className="footerright">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>.
          Coded by <a href="http://google.com " target='_blank' rel="noreferrer">Ejimofor</a>.
          <p>© 2021 Loopstudios. All rights reserved.</p>
      </section>
    </footer>
  )
}

export default Footer