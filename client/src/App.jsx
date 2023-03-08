/*
  React Router V6: Links
  - user for internal links > navigate around our project
  - if we want to navigate to external links > use <a> 

  (1) /pages/Home.jsx
  
*/

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* (2) */}
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='products' element={<Products />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
