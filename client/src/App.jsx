/*
  useMemo Hook P1
  - different than React.memo() that we learn in previous lessons


  - The useMemo hook is a hook in React that allows you to memoize a value. It takes two arguments: the first is a function that returns the value you want to memoize, and the second is an array of dependencies. The hook will return the memoized value that will only change if one of the values in the dependency array changes.

  - By memoizing a value, you can avoid unnecessary calculations and improve the performance of your React application. The value will only be recalculated if one of its dependencies changes, otherwise the same instance of the value will be returned. This can be useful in situations where you have an expensive calculation that you only want to recompute when its dependencies change.


  We have original function (not use useMemo()) 
  (1) MyComponent.jsx

  > next lesson > convert to useMemo()

*/

import React from 'react'
import MyComponent from './MyComponent'

const data = ['Hello', 'World']

const App = () => {
  return <MyComponent data={data} />
}

export default App
