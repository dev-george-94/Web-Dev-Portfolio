import React from 'react'

import {images} from "../../assets"
import "./Contact.css"

const Contact = () => {

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(1);
  }
  
  return (
    <React.Fragment>
      <h1 className='title'>Contact</h1>
      <div className='container1'>
        <div className='container2'>
          <div className='ilustration'>
            <img src={images.imagePlaceholder} alt="placeholder" />
          </div>

          <form id="contact-form" onSubmit={handleFormSubmit}>   

            <div className='form-input-group'>
              <div className='form-input lastname'>
                <label htmlFor='lastname'>Lastname:</label> 
                <input type="text" id='lastname' />
              </div>

              <div className='form-input firstname'>
                <label htmlFor='firstname'>Firstname:</label> 
                <input type="text" id='firstname' />
              </div>
            </div>

            <div className='form-input email'>
              <label htmlFor='email'>Email:</label> 
              <input type="text" id='email' />
            </div>
            
            <div className='form-input message'>
              <label htmlFor='message'>Message:</label> 
              <textarea id="message"></textarea>
            </div>

            <input type="submit" className="default" value="submit" />
          </form>
        </div>


      </div>
    </React.Fragment>
  )
}

export default Contact