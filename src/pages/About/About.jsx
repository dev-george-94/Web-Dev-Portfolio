import React from 'react'

import "./About.css"
import {images} from "../../assets"

// Images
import Card from '../../components/Card/Card'

const About = () => {

  const skills=[
    "react",
    "javascript",
    "html5",
    "css",
  ];

  return (
    <React.Fragment>
      
      <h1 className='page-header'>About Me</h1>
      
      <div className='container1'>

        <div className='ilustration'>
          <img src={images.imagePlaceholder} alt="placeholder"/>
        </div> 
          
        <div className='container2'>

          <p className='text-summary'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quis aperiam nihil minus odit magni? Deserunt, distinctio exercitationem nostrum in recusandae rem ipsum unde molestias atque dignissimos non deleniti mollitia? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          
          </p>
          
          <div className='container3'>
            <h2>Skills:</h2>
            <ul className='skill-list'>
               {
                skills.map(
                  (skill)=>(
                    <li key={skill} className="card">
                      <Card cardFor={skill} />
                    </li>
                  )
                )
              } 
            </ul>
          </div>

        </div>

      </div>
      
      <div className='cta'>
        <a className="default" href="#projects">Projects</a>
      </div>


      {/* <a className="cta" href="#projects">Projects</a> */}


    </React.Fragment>
  )
}

export default About