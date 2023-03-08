/*
  useMemo Hook P3: slowFunction Problem
  - continue from the last useCallback lesson

  (1)
  - create slowFunction file
  - setup a function
  - import in LowerState.js and set it equal to a value


  > now when we increase count, that slowFunction will be run 
    > count will not be updated until slowFunction finishes

*/

import React from 'react'
import LowerState from './LowerState'

const App = () => {
  return <LowerState />
}

export default App
