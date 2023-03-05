import React, { useState, useEffect } from 'react'

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false)
  const bcg = rgb.join(',')
  const hexValue = `#${hexColor}`

  useEffect(() => {
    if (alert === true) {
      const timeout = setTimeout(() => {
        setAlert(false)
      }, 3000)

      return () => clearTimeout(timeout)
    }
  }, [alert])

  return (
    <article
      className={`color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true)
        navigator.clipboard.writeText(hexValue)
      }}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexValue}</p>

      <p className={`${alert ? 'alert show' : 'alert'}`}> copy to clipboard</p>
    </article>
  )
}

export default SingleColor
