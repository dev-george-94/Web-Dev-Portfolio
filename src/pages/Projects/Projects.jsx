import React, { useRef,useState } from 'react'


import "./Projects.css"

import Project from "../../components/Project/Project"
import Gallery from "../../components/Gallery/Gallery"

import { projectList } from '../../util/constants'

const Projects = () => {

  const itemCountCurrent=useRef(1);
  const [itemCount, setItemCount] = useState(1)

  // Same as the Media Queries. Need a better solution

  const updateGalleryCount=()=>{

    if( window.screen.width <= 540){
      // Mobile
      itemCountCurrent.current=1;
    } else if( window.screen.width <= 1368  ){
      // Tablet
      itemCountCurrent.current=2;
    } else {
      //Desktop 
      itemCountCurrent.current=4;
    }

    if(itemCountCurrent.current !== itemCount){
      setItemCount(itemCountCurrent.current);
    }

  }

  window.onresize=updateGalleryCount()
  
  
  return (

    <React.Fragment>
      <h1 className='title'>Projects</h1>

      <Gallery id="projects-gallery" pageScroll="horizontal" itemsPerPage={itemCount}  >
        {
          projectList.map((project,i)=>(
            <React.Fragment key={i}>
              <Project cardFor={project} />
            </React.Fragment>
          ))
        }
      </Gallery>

    </React.Fragment>

  )
}

export default Projects