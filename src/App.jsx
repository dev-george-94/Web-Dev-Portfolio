
import React from 'react';
import { useState} from 'react';

import './App.css';
import "./themes/theme.css"

import Navbar from "./components/Navbar/Navbar"

import {
  Home,
  About,
  Projects,
  Contact

} from "./pages"
import Page from './components/Page/Page';

const App = () => {

  const pages=[
    <Home/>,
    <About/>,
    <Projects/>,
    <Contact/>
  ];

  const [activePage, setActivePage] = useState(
    null // pages[0].type.name.toLowerCase()
  );


  /* ****************************** */

  

  return (
    <>
      <div className='app'>

        {/* Navbar | Provides Links for all supplied pages */}
        <Navbar 
          pages={pages} 
          activePage={activePage} 
        />

        {/* Pages | Renders all supplied pages */}
        <Page 
          pages={pages} 
          setActivePage={setActivePage}
        />

      </div>
    </>
  )
}

export default App