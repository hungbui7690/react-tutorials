/*
  React Router V6: NavLink P1
  - active links
  - difference with Link > at styles & className attributes > we can pass function

  (1) create /components/StyledNavbar.jsx
  

  > After setup, we can see that the active link is different than the other links
    > if we check Elements tab > we see that it will add "active" class for the class is clicked
    > and because in css file, we have setup for active class > it adds the style to that link

*/

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Error from './pages/Error'
import SharedLayout from './pages/SharedLayout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='products' element={<Products />} />
        </Route>
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
