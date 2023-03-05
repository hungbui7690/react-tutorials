import React, { useState, useEffect } from 'react'

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false)
  const bcg = rgb.join(',')
  const hexValue = `#${hexColor}` // add #

  return (
    <article
      className={`color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true)
        navigator.clipboard.writeText(hexValue)
      }} // (3)
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexValue}</p>

      {/* (2) */}
      {alert && <p className='alert'> copy to clipboard</p>}
    </article>
  )
}

export default SingleColor
