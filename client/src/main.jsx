import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

// (2a)
import { store } from './store'
import { Provider } from 'react-redux'

const container = document.getElementById('root')
const root = createRoot(container)

// (2b) after setting up, there is still error > fix in next lecture
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
