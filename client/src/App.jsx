/*
  React Router V6: Reading URL Params
  - read single product url param > useParams()
  
*/

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import SingleProduct from './pages/SingleProduct' // (1a)
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

          {/* (1b) we can also setup nested routes if we want, but in this case, we don't have to share the layout, so we don't have to use nested layout >  go to SingleProduct */}
          <Route path='products/:productId' element={<SingleProduct />} />

          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
