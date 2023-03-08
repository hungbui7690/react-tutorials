/*
  React Router V6: Index Pages
  - Index routes render in the parent routes outlet at the parent route's path.
  - Index routes match when a parent route matches but none of the other children match.
  - Index routes are the default child route for a parent route.
  - Index routes render when the user hasn't clicked one of the items in a navigation list yet.

  (1) create SharedLayout.jsx > copy all from Home to here
  (2) fix Home
  (3) fix App.jsx > use "index" > will match with parent

  <Route path='/' element={<SharedLayout />}>
    <Route index element={<Home />} />

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
        {/* (***) fix here */}
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
