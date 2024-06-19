import React from 'react'
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Singin from './Pages/Singin'
import Dashboard from './Pages/Dashboard'
import About from './Pages/About'
import Login from './Pages/Login'
import Header from './Components/Header'

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/ddashboard' element={<Dashboard/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signin' element={<Singin/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App