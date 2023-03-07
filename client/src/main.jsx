import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import AppContext from './context'
import './index.css'

// (3) go to UserContainer.jsx
ReactDOM.createRoot(document.getElementById('root')).render(
  <AppContext>
    <App />
  </AppContext>
)
