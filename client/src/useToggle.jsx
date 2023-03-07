import { useState } from 'react'

const useToggle = (defaultValue) => {
  const [show, setShow] = useState(defaultValue)
  const toggle = () => {
    setShow(!show)
  }
  return { show, toggle } // (***) must have return > can return [] or {}
}

export default useToggle
