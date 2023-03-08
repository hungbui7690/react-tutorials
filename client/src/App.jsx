/*
  useMemo Hook P2

  (***) In this example, the processedData value is memoized using useMemo and the data prop is passed as a dependency. This means that the processedData value will only be recalculated if the data prop changes.
    (1) MyComponent.jsx

*/

import React from 'react'
import MyComponent from './MyComponent'

const data = ['Hello', 'World']

const App = () => {
  return <MyComponent data={data} />
}

export default App
