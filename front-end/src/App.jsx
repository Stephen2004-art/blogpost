import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Profile from './pages/auth/Profile'
import Register from './pages/auth/Register'
import Login from './pages/auth/Login'
import Help from './pages/Help'
import Password from './pages/Password'



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route exact path='/' element={<Profile/>}/>
        <Route exact path='/register' element={<Register/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/help' element={<Help/>}/>
        <Route exact path='/password' element={<Password/>}/>


        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
