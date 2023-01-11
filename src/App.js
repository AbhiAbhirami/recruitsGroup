import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Signin from './components/Signin/Signin'
import Signup from './components/Signup/Signup'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
        {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}

      </Routes>
    </BrowserRouter>
  )
}

export default App
