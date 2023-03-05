import React, { useState, useEffect, useRef } from 'react'

const SingleColor = ({
  rgb,
  weight,
  index,
  hexColor,
  clipboard,
  setClipboard,
}) => {
  const [alert, setAlert] = useState(false)
  const alertRef = useRef(null)

  const bcg = rgb.join(',')
  const hexValue = `#${hexColor}`

  // (2)
  const handleClipboard = () => {
    setAlert(true)
    alertRef.current.classList.add('show') // (a) toggle class to display the hidden alert
    setClipboard(alertRef.current) // (b) save the current element to clipboard
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
      onClick={handleClipboard}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexValue}</p>

      {/* (1) the alert is always there, it is just hidden by default > and we can toggle on by adding "show" */}
      <p className={`${alert ? 'alert show' : 'alert'}`} ref={alertRef}>
        copy to clipboard
      </p>
    </article>
  )
}

export default SingleColor
