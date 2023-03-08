/*
  useTransition Hook: Problem
  - let us update the state without blocking the UI


  > for example: when user is typing, it triggers a function and filter 20,000 records > take time > user cannot type (UI is blocking)

  (***) to test > slow down CPU > pic: slow-down-cpu
  
*/

import React from 'react'
import LatestReact from './LatestReact'

const App = () => {
  return <LatestReact />
}

export default App
