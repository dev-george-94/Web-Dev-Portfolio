import React from 'react'
import { useState } from 'react';

import "./Navbar.css"
import "./animation.css"

import { HiMenu,HiX} from "react-icons/hi"

import Card from '../Card/Card';


import {logos} from "../../assets"

/*
Issues:
  #1. Scrolling does not update Navbar
  #2. Page Links do not Update Navbar, Scroll Does
  #3. Using page link will not reflect in website or navbar when used from external page
*/



const Navbar = ({pages,activePage}) => { 


  const [showNavbar, setShowNavbar] = useState(false);
  // Read all pages available and create links for them
  return (
    <React.Fragment>
      <div className={"navbar " + (showNavbar ? "open":"closed")}>
        <div className='container1'>

          <div className='navigation'>
            <div 
              className='btn-toggle card' 
              onClick={()=>{setShowNavbar(!showNavbar)}}
            >
              {showNavbar ? <HiX/> : <HiMenu/>}
            </div>

            {/* Pages */}
            <ul className='links'>
            {
              
              pages.map(
                (page)=>{
                  
                  const pageName=page.type.name.toLowerCase();

                  return (
                    <li key={"page-link_" + pageName} className={"link-" + pageName}>

                      <a 
                        href={"#" + pageName} 
                        className={(pageName === activePage ? "current " : "") + "card"}
                        onClick={
                          ()=>{
                            setShowNavbar(false);
                          }
                        }
                      > 
                        <Card cardFor={pageName}/>
                      </a>
                    </li>
                  )
                }
              )
            }
            </ul>
          </div>
          <div className='overlay-shadow'></div>
        </div>
      </div>
    </React.Fragment>
  )

  
}

export default Navbar

