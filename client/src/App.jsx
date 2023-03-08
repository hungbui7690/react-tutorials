/*
  Suspense API: Solution
    
  (1) LatestReact.jsx

  (***) test > in Network tab > filter JS file > we don't see the SlowComponent as initial loading anymore
*/

import React from 'react'
import LatestReact from './LatestReact'

const App = () => {
  return <LatestReact />
}

export default App
