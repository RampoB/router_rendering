import React from 'react'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Conditional from './Conditional'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />}/>
          <Route path="/conditional" element={<Conditional />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App