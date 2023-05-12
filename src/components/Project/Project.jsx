import React from 'react'

import "../../layouts/desktop.css"

import Card from '../Card/Card'

const Project = ({cardFor}) => {

  const project=cardFor;

  return (
    <React.Fragment>
      <div className='project'>

        
        <h2 className='title'>{project.title}</h2>

        
        <div className='container1'>

          <div className='thumbnail'>
            <img src={project.thumbnail} alt={project.title + "-thumbnail"} />
          </div>

          <div className='container2'>
            <p className='description'>{project.description}</p>

            <ul className='skills'>
              {
                project.skillsApplied.map(
                  (skill) => (
                    <li key={skill} className="card">
                      <Card cardFor={skill} />
                    </li>
                  )
                )
              } 
            </ul>

            <div className='cta'>
              <a href={project.link.live} className="default" target="_blank" rel="noreferrer">
                Live
              </a>
              <a href={project.link.code} target="_blank" rel="noreferrer">
                Code
              </a>
            </div>

          </div>
        </div>  

      </div>
    </React.Fragment>
  )
}

export default Project