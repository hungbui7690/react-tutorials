import React, { useState, useEffect, useRef } from 'react'

// (3) destructure
const SingleColor = ({
  rgb,
  weight,
  index,
  hexColor,
  clipboard,
  setClipboard,
}) => {
  const [alert, setAlert] = useState(false)
  const alertRef = useRef(null) // (4)

  const bcg = rgb.join(',')
  const hexValue = `#${hexColor}`

  // (6)
  const handleClipboard = () => {
    setAlert(true)
    navigator.clipboard.writeText(hexValue)
    console.log(alertRef.current)
  }

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
      onClick={handleClipboard} // (7)
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexValue}</p>

      <p
        className={`${alert ? 'alert show' : 'alert'}`}
        ref={alertRef} // (5)
      >
        copy to clipboard
      </p>
    </article>
  )
}

export default SingleColor
