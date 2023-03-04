import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

// (2) destructure
const Question = ({ id, title, info }) => {
  // (3)
  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn'>
          <AiOutlineMinus />
        </button>
      </header>
      <p>{info}</p>
    </article>
  )
}

export default Question
