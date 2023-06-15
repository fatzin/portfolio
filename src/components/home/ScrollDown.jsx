import React from 'react'
import { BsMouse} from 'react-icons/bs'

function ScrollDown() {
  return (
    <div className="home__scroll">
        <a href="#about" className="home__scroll-button button--flex">
          <BsMouse className='home__scroll-mouse'/>
        <span className="home__scroll-name">Rolar para baixo</span>
        <i className="uil uil-arrow-down home__scroll-arrow"></i>
        </a>
    </div>
  )
}

export default ScrollDown