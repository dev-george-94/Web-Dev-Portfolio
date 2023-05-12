import React from 'react'

import { useEffect } from 'react'

import "./Page.css"
import "./animation.css"

const Page = ({pages,setActivePage}) => {

  const userScroll=true;
  
  useEffect(()=>{
    const observer=new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            if(entry.isIntersecting){
                setActivePage(entry.target.id);
            }
        })
    },{threshold:0.7})

    pages.forEach((page)=>{
        const pageId=page.type.name.toLowerCase();
        const pageElement=document.getElementById(pageId)
        observer.observe(pageElement);
    })
    
  },[setActivePage])


  return (
    <div className='pages'>
        { 
            pages.map((page)=>{
                
                const pageName=page.type.name.toLowerCase();
                return(
                    <React.Fragment key={pageName}>
                        <div 
                            id={pageName} 
                            className="page"
                        > {page} </div>
                    </React.Fragment>
                )
            })
        }
  </div>
  )
}

export default Page