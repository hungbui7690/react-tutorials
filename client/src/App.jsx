/*
  React Router V6: Page Components
  - check pages/ folder
*/

import { BrowserRouter, Routes, Route } from 'react-router-dom'

// (1)
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
