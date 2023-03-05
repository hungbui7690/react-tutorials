/*
  - there are 2 ways for us to create hex colors: 
    + rgbToHex() from utils.js 
    + color.hex from the data we get
*/

import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

// (2) hexColor from App.js
const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false)
  const bcg = rgb.join(',')
  const hex = rgbToHex(...rgb)
  console.log(hex)

  // (3)
  return (
    <article className={`color`} style={{ backgroundColor: `rgb(${bcg})` }}>
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hex}</p>
    </article>
  )
}

export default SingleColor
