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

  // (1)
  const handleClipboard = () => {
    // (a) if in the clipboard, there is value & the box we click is different than the previous box > then remove class
    if (clipboard && alertRef.current !== clipboard)
      clipboard.classList.remove('show')

    setAlert(true)
    alertRef.current.classList.add('show')
    navigator.clipboard.writeText(hexValue) // remember to write next to clipboard

    setClipboard(alertRef.current) // (b) set clipboard to current ref
  }

  useEffect(() => {
    if (alert === true) {
      const timeout = setTimeout(() => {
        setAlert(false)
        setClipboard(null) // (2) clear clipboard when we hide the text
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

      {/* (***) the alert is always there, it is just hidden by default > and we can toggle on by adding "show" */}
      <p className={`${alert ? 'alert show' : 'alert'}`} ref={alertRef}>
        copy to clipboard
      </p>
    </article>
  )
}

export default SingleColor
