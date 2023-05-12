import React from 'react'

import "./Card.css"
import { mappedIcons } from '../../util/constants'

const Card = ({cardFor}) => {
  
  const card = mappedIcons[cardFor];


  return (
    <React.Fragment>
      <div className="image">

        { 
          typeof card.logo === "string" && (
            <img src={card?.logo} alt={card.name.toLowerCase() + "-logo"} />
          )
        }

        {
          typeof card.logo === "object" && (
            card.logo
          )
        }

        
      </div>
      <div className='label'>{card.name}</div>
    </React.Fragment>
  )
}

export default Card