import React from 'react'

import "./Home.css"

import {images} from "../../assets"

const Home = () => {
  return (
    <React.Fragment>
   
          <div className='container1'>
            <div className='container2'>
              <h1 className='name'>Hello, I'm <span className='highlight'>George</span></h1>
              <h2 className='position'><span className='highlight'>Front-End Developer</span> <br/> experienced in <span className='highlight'>React.js</span></h2>

              <div className="cta">
                <a href="#about" className='default'>About</a>
                <a href="#contact">Contact</a>
              </div>
            </div>
          </div>

          <div className='ilustration'>
            <img src={images.imagePlaceholder} alt="placeholder" />
          </div>
      
    </React.Fragment>
  )
}

export default Home