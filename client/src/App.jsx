/*
  React Router V6: Nested Pages
  - when we setup nested routes > the children routes will be relative to parent routes 
    + Parent: path = /test
      > Children: path = product 
        > /test/product
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
        {/* (*** a) nested routes > right now, all pages share the same Home component > /about */}
        <Route path='/' element={<Home />}>
          <Route path='about' element={<About />} />
          <Route path='products' element={<Products />} />
        </Route>

        {/* (*** b) /dashboard/stats > show Dashboard */}
        <Route path='/dashboard' element={<div>Dashboard</div>}>
          <Route path='stats' element={<div>Stats</div>} />
        </Route>

        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
