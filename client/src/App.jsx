/*
  React Router V6: First Pages
  > npm install react-router-dom@6

  (***) not from Official React


  (1)
  - setup in App.js
  
  <BrowserRouter>
    <Routes>
        <Route path='/' element={<div>home page</div>} />

  (2) after setup, we have to routes: / and /testing
*/

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div>home page</div>}></Route>
        <Route
          path='/testing'
          element={
            <div>
              <h2>testing </h2>
            </div>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
