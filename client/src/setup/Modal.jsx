import React, { useEffect } from 'react'

// (3a) destructure
const Modal = ({ modalContent }) => {
  return (
    <div className='modal'>
      {/* (3b) */}
      <p>{modalContent}</p>
    </div>
  )
}

export default Modal
