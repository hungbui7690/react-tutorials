/*
  React Router V6: Shared Layout P1
  - fix the problem of previous lecture > /about show Home
    > we need to go to the parent: Home and import Outlet

  (1) Home.jsx

*/

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Error from './pages/Error'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='about' element={<About />} />
          <Route path='products' element={<Products />} />
        </Route>
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
