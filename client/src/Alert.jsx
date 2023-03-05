/*
  - dependency list in useEffect()
    + It’s optional. If you don’t specify it, the effect runs after each render.
    + If it’s empty ([]), the effect runs once, after the initial render.

*/

import React, { useEffect } from 'react'

// (4)
const Alert = ({ msg, type, showAlert }) => {
  // (***)
  useEffect(() => {
    // (a)
    const timeout = setTimeout(() => {
      showAlert()
    }, 3000)

    // (b) clear function
    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return <p className={`alert alert-${type}`}>{msg}</p>
}

export default Alert
