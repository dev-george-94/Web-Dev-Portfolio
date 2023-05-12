import React, { useState,useEffect,useRef } from 'react'



import "./Gallery.css"

// Further Improvements for this component 
/* 
    a. Immediately set navlink state to active, not after scrolling
    b. After clicking the navigation links, set navlink state and once observe catches up, to active
*/

const Gallery = (props) => {

  const [activeGalleryPage, setActiveGalleryPage] = useState("page1");
  const navTo=useRef(null)

  const {id,itemsPerPage,pageScroll}=props;


  const gallery={}
  const gallery_items=props.children

  //Put Items into Pages   
  for(let i=1;i<=gallery_items.length;i++){
    const page=Math.ceil(i/itemsPerPage);

    if(!gallery["page" + page]){
        gallery["page" + page]=[];
    }
    gallery["page" + page].push(gallery_items[i-1]);
  }

  //Create a mutli dimesional Array to Allow Mapping   
  const gallery_pages=[];
  for(let prop in gallery){
    gallery_pages.push(gallery[prop])
  }

  /****************************************************/

  useEffect(()=>{
    const observer=new IntersectionObserver((entries)=>{
        
        (
            entries.filter(
                (page)=>{return page.isIntersecting}
            )
        ).forEach(
            (entry)=>{
                if(!navTo.current){
                    setActiveGalleryPage(entry.target.id);
                } else if(navTo.current===entry.target.id){
                    navTo.current=null;
                    setActiveGalleryPage(entry.target.id);
                }      
            }
        )
        
    },{threshold:0.51})

    for(let i=1;i<=gallery_pages.length;i++){
        observer.observe(document.getElementById("page" + i))
    }

  },[])

  return (
    <React.Fragment>
        <div id={id} className="gallery">
            <ul className='content' style={pageScroll==="horizontal" ? {flexDirection:'row'} : {flexDirection:'column'} }>
                {
                    gallery_pages.map(
                        (page,i)=>{
                            return (
                                <React.Fragment key={"page" + i}>
                                    <li className={"page"} id={"page" + (i + 1)} >
                                        {
                                            page.map(
                                                (item,j)=>{
                                                    return ( 
                                                        <React.Fragment key={"page" + i + "-item" + j}>
                                                            {item}
                                                        </React.Fragment>
                                                    )
                                                }
                                            )
                                        }
                                    </li>
                                </React.Fragment>
                            )
                        }
                    )
                }
            </ul>

            {
                gallery_pages.length>1 && (

                    <ul className="links">
                    {
                        gallery_pages.map(
                            (page,i)=>{
                                const currentPage="page" + (i+1);
                                return (
                                    <React.Fragment key={i}>
                                        <li className={'link ' + (activeGalleryPage === currentPage ? "current":"")}>
                                            <a 
                                            href={"#" + currentPage} 
                                            onClick={(e)=>{
                                                
                                                navTo.current=currentPage
                                            }}
                                            > <div/> </a>
                                        </li>
                                    </React.Fragment>
                                )
                            }
                        )
                    }
                    </ul>

                )
            }
            
        </div>
    </React.Fragment>
  )
}

export default Gallery