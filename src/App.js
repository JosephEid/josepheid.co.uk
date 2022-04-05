import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home'

import './App.css'
import HappyBirthday from './Components/HappyBirthday/HappyBirthday'

function App () {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/happyBirthday' element={<HappyBirthday />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
