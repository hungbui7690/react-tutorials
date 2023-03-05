import React, { useEffect } from 'react'

// (2a) destruct "list"
const Alert = ({ msg, type, showAlert, list }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      showAlert()
    }, 3000)

    return () => {
      clearTimeout(timeout)
    }
  }, [list]) // (2b)

  return <p className={`alert alert-${type}`}>{msg}</p>
}

export default Alert
