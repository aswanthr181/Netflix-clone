import React,{ useState } from 'react'
import NavBar from './Components/NavBar/NavBar'
import {originals,action,trending,horror,romance,comedy,documentary} from './urls'
import './App.css'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'


function App() {
  

  return (
    
    <div>
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals' />
      <RowPost url={trending} title='Trending Now' isSmall />
      <RowPost url={action} title='Action' isSmall />
      <RowPost url={romance} title='Romantic' isSmall />
      <RowPost url={comedy} title='Comedy' isSmall />
      <RowPost url={horror} title='Horror' isSmall />
      <RowPost url={documentary} title='Documentaries' isSmall />
      
    </div>
      
  
  )
}

export default App
