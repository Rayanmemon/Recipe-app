import React from 'react'
import Login from './pages/Login'
import Header from './components/Header'
import Home from './pages/Home'
import Recipes from './pages/Recipes1'
import { Routes, Route } from 'react-router-dom'
import Add from './pages/Add'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const App = () => {
  return (
    <div className='w-screen h-screen font-sans-serif'>
      <Routes>
        <Route path='/' element={< Login/>} />
      </Routes>

      <div className="post-login">
        <Header/>
        <Routes>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/Recipe' element={<Recipes/>}/>
          <Route path='/Add' element={<Add/>}/>
        </Routes> 
      </div>
    </div>

  )
}

export default App
