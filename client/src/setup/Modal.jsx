import React, { useEffect } from 'react'

// (4) destructure
const Modal = ({ modalContent, closeModal }) => {
  // (5)
  useEffect(() => {
    const timeout = setTimeout(() => {
      closeModal() // (***)
    }, 3000)

    // (***) actually, we don't need this step to hide modal in 3s > this is just for cleanup
    return () => {
      clearTimeout(timeout)
    }
  })

  return (
    <div className='modal'>
      <p>{modalContent}</p>
    </div>
  )
}

export default Modal
