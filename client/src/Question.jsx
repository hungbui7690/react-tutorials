import React, { useState, useRef } from 'react'

const Question = ({ title, info, prevElement, setPrevElement }) => {
  const infoRef = useRef(null)

  // (***)
  const handleAccordion = () => {
    const currentElement = infoRef.current

    currentElement.lastChild.classList.toggle('show')
    setPrevElement(currentElement)

    if (prevElement) {
      const currentBtn = currentElement.firstChild.lastChild
      const prevBtn = prevElement.firstChild.lastChild
      console.log(currentBtn, prevBtn)
      currentBtn.textContent = currentBtn.textContent === '-' ? '+' : '-'

      if (currentElement !== prevElement) {
        prevElement.lastChild.classList.remove('show')

        // if the previous box is open > then change and close, otherwise, do nothing
        if (prevBtn.textContent === '-') prevBtn.textContent = '+'
        return
      }
    } else {
      currentElement.firstChild.lastChild.textContent = '-'
    }
  }

  return (
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
