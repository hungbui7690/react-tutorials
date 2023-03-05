import React, { useEffect } from 'react'

// (3) use template string to setup classes > alert-success / alert-danger
const Alert = ({ msg, type }) => {
  return <p className={`alert alert-${type}`}>{msg}</p>
}

export default Alert
