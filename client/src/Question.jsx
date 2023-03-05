import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const Question = ({ id, title, info }) => {
  // (1)
  const [showInfo, setShowInfo] = useState(false)

  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>

        {/* (2) */}
        <button className='btn' onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : '+'}
        </button>
      </header>

      {/* (3) */}
      {showInfo && <p>{info}</p>}
    </article>
  )
}

export default Question
