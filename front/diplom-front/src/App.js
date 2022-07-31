import React from 'react'
import './Css/App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Main from './Components/MainSite/Main.js'
import Realtors from './Components/MainSite/Realtors.js'
import Agencies from './Components/MainSite/Agencies.js'
import Agency from './Components/MainSite/Agency.js'
import NotFound from './Components/MainSite/NotFound.js'
import Realtor from './Components/MainSite/Realtor.js'
import Offer from './Components/MainSite/Offer.js'

import AdminLogin from './Components/Admin/AdminLogin.js'
import AdminMainPage from './Components/Admin/AdminMainPage.js'
import AdminRealtors  from './Components/Admin/AdminRealtors.js'
import AdminAgencies from './Components/Admin/AdminAgencies.js'
import AdminCreateAgency from './Components/Admin/AdminCreateAgency.js'
import AdminAgency from './Components/Admin/AdminAgency.js'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Main/>}/>
        <Route exact path='/realtors' element={<Realtors/>}/>
        <Route exact path='/agencies' element={<Agencies/>}/>
        <Route exact path='/agencies/agency' element={<Agency/>}/>
        <Route exact path='/realtors/realtor' element={<Realtor/>}/>
        <Route exact path='/offer' element={<Offer/>}/>
        <Route exact path='*' element={<NotFound/>}/>

        <Route exact path='/admin-login' element={<AdminLogin/>}/>
        <Route exact path='/admin/main-page' element={<AdminMainPage/>}/>
        <Route exact path='/admin/realtors' element={<AdminRealtors/>}/>
        <Route exact path='/admin/agencies' element={<AdminAgencies/>}/>
        <Route exact path='/admin/create-agency' element={<AdminCreateAgency/>}/>
        <Route exact path='/admin/agency/:id' element={<AdminAgency/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
