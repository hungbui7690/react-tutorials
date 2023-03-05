import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

// (3) destructure > if we check the colors that are returned from values.js > it has rgb & weight > we need both values to set background for each box
const SingleColor = ({ rgb, weight, index }) => {
  // (4)
  const [alert, setAlert] = useState(false) // alert is for "copy to clipboard" feature
  const bcg = rgb.join(',') // convert array into string
  console.log(bcg)

  // (5)
  return <h4>single color</h4>
}

export default SingleColor
