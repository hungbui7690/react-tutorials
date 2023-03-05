import React, { useState, useRef } from 'react'

const Question = ({ title, info, prevElement, setPrevElement }) => {
  const infoRef = useRef(null) // (3a) hook this ref to <article>

  // (***) (4)
  const handleAccordion = () => {
    const currentElement = infoRef.current
    currentElement.lastChild.classList.toggle('show')
    setPrevElement(currentElement)

    if (prevElement) {
      if (currentElement !== prevElement) {
        prevElement.lastChild.classList.remove('show')
        return
      } else {
        return
      }
    } else {
      currentElement.firstChild.lastChild.textContent = '-'
    }
  }

  return (
    // (3b)
    <article className='question' ref={infoRef} onClick={handleAccordion}>
      <header>
        <h4>{title}</h4>
        <button className='btn'>+</button>
      </header>
      <p className={`paragraph`}>{info}</p>
    </article>
  )
}

export default Question
