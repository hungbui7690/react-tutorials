/*
  React Router V6: Protected Routes
  - right now, though we don't login, we still can go to /dashboard

  (1) create pages/ProtectedRoute.jsx

*/
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import SingleProduct from './pages/SingleProduct'
import Error from './pages/Error'
import SharedLayout from './pages/SharedLayout'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

import ProtectedRoute from './pages/ProtectedRoute'

function App() {
  const [user, setUser] = useState(null)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='products' element={<Products />} />
          <Route path='products/:productId' element={<SingleProduct />} />
          <Route path='login' element={<Login setUser={setUser} />} />

          {/* (2) */}
          <Route
            path='dashboard'
            element={
              <ProtectedRoute user={user}>
                <Dashboard user={user} />
              </ProtectedRoute>
            }
          />

          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
