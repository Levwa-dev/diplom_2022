import React from 'react'
import './Css/App.css'
import Main from './Components/Main.js'
import Realtors from './Components/Realtors.js'
import Agencies from './Components/Agencies.js'
import Agency from './Components/Agency.js'
import NotFound from './Components/NotFound.js'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Main/>}/>
        <Route exact path='/realtors' element={<Realtors/>}/>
        <Route exact path='/agencies' element={<Agencies/>}/>
        <Route exact path='/agencies/agency' element={<Agency/>}/>
        <Route exact path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
