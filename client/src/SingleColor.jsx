/*
  now, it looks ok, but the problem is it's hard to see then the colors are dark > since text and background are all dark colors
  > this is why we pass the index from App.jsx to here 
  > we light color, we don't touch, but at the base color to forwards, we we change the text into lighter colors
  > <article className={`color`} > we use template string for className
  > we can also use the "type" of each color to check if it is tint, base or shade to change the text color based on each type

*/

import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false)
  const bcg = rgb.join(',')
  const hex = rgbToHex(...rgb)

  // (***)
  return (
    <article
      className={`color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>#{hexColor}</p>
    </article>
  )
}

export default SingleColor
