import React from 'react'
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Singin from './Pages/Singin'
import Dashboard from './Pages/Dashboard'
import About from './Pages/About'
import Header from './Components/Header'
import Projects from './Pages/Projects'
import Signup from './Pages/Signup'
import FooterCom from './Components/Footer'
import PrivateRoute from './Components/PrivateRoute'
import OnlyAdminPrivateRoute from './Components/OnlyAdminPrivateRoute'
import CreatePost from './Pages/CreatePost'
import UpdatePost from './Pages/UpdatePost'
import PostPage from './Pages/PostPage'
import ScrollToTop from './Components/ScrollToTop'
import Search from './Pages/Search'

const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop/>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route element={<PrivateRoute />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
      <Route element={<OnlyAdminPrivateRoute />}>
          <Route path='/createpost' element={<CreatePost />} />
          <Route path='/updatepost/:postId' element={<UpdatePost />} />
        </Route>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/signin' element={<Singin/>}/>
      <Route path='/search' element={<Search/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/post/:postSlug' element={<PostPage />} />
    </Routes>
    <FooterCom/>
    </BrowserRouter>
  )
}

export default App