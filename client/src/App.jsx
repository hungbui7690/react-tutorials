/*
  Sliders: Alternative Method
  - with this way, we don't have to use the first useEffect(), but we will setup directly in the buttons
  
  (1) create 2 functions
  (2) use functional approach in setInterval()
  (3) apply to buttons

*/

import React, { useState, useEffect } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { FaQuoteRight } from 'react-icons/fa'
import data from './data'

function App() {
  const [people, setPeople] = useState(data)
  const [index, setIndex] = useState(0)

  // (1a) we can see the benefit of functional approach > we want to write more code in setState() > that's why we use functional approach
  const nextSlide = () => {
    setIndex((prevIndex) => {
      let index = prevIndex + 1
      if (index > people.length - 1) index = 0

      return index
    })
  }

  // (1b)
  const prevSlide = () => {
    setIndex((prevIndex) => {
      let index = prevIndex - 1
      if (index < 0) index = people.length - 1

      return index
    })
  }

  // (2)
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((prevIndex) => {
        let index = prevIndex + 1
        if (index > people.length - 1) index = 0

        return index
      })
    }, 3000)

    return () => {
      clearInterval(slider)
    }
  }, [index])

  return (
    <section className='section'>
      <div className='title'>
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className='section-center'>
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person

          let position = 'nextSlide'
          if (personIndex === index) {
            position = 'activeSlide'
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = 'lastSlide'
          }

          return (
            <article key={id} className={position}>
              <img src={image} alt={name} className='person-img' />
              <h4>{name}</h4>
              <p className='title'>{title}</p>
              <p className='text'>{quote}</p>
              <FaQuoteRight />
            </article>
          )
        })}

        {/* (3) */}
        <button className='prev' onClick={prevSlide}>
          <FiChevronLeft />
        </button>
        <button className='next' onClick={nextSlide}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  )
}

export default App
