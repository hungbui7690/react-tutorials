import React, { useState } from 'react'
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const Review = () => {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = people[index]

  const checkNumber = (number) => {
    if (number > people.length - 1) return 0
    if (number < 0) return people.length - 1

    return number
  }

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1
      return checkNumber(newIndex)
    })
  }

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1
      return checkNumber(newIndex)
    })
  }

  // (1) generate random number
  const generateRandom = () => {
    const random = Math.floor(Math.random() * people.length)
    return random
  }

  // (2) to avoid duplication when generate random index, there are 2 methods: [1] we can +1, -1 into the result : [2] we can do the way below
  const randomIndex = () => {
    let random = generateRandom()

    // (***) duplication > generate index again
    while (random === index) {
      random = generateRandom()
    }

    setIndex(random)
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
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>

      {/* (3) */}
      <button className='random-btn' onClick={randomIndex}>
        Surprise Me
      </button>
    </article>
  )
}

export default Review
