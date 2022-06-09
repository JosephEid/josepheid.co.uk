import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home'

import './App.css'
import HappyBirthday from './Components/HappyBirthday/HappyBirthday'
import HappyBirthday2 from './Components/HappyBirthday2/HappyBirthday2'

function App () {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/happyBirthday' element={<HappyBirthday />} />
          <Route path='/happyBirthdayHannah' element={<HappyBirthday2 />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
