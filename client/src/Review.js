import React, { useState } from 'react'
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const Review = () => {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = people[index]

  // (1)
  const checkNumber = (number) => {
    if (number > people.length - 1) return 0
    if (number < 0) return people.length - 1

    return number
  }

  // (2a) one benefit of using Functional Approach is we can write multiple lines in setState()
  const prevPerson = () => {
    setIndex((prevIndex) => {
      let newIndex = prevIndex - 1
      return checkNumber(newIndex)
    })
  }

  // (2b)
  const nextPerson = () => {
    setIndex((prevIndex) => {
      let newIndex = prevIndex + 1
      return checkNumber(newIndex)
    })
  }

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>

      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>

      <div className='button-container'>
        {/* (3a) */}
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        {/* (3b) */}
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>

      <button className='random-btn'>Suprise Me</button>
    </article>
  )
}

export default Review
