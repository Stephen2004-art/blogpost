import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Profile from './pages/auth/Profile'



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route exact path='/' element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
