/*
    Sliders: Autoplay
  - after add functionalities for prev & next button > everything is ok, but at the last item in the array, it won't work with the next button 
    > it's the time to use useEffect() to fix 

*/

import React, { useState, useEffect } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { FaQuoteRight } from 'react-icons/fa'
import data from './data'

function App() {
  const [people, setPeople] = useState(data)
  const [index, setIndex] = useState(0)

  // (1) use useEffect to fix
  useEffect(() => {
    // (a)
    const lastIndex = people.length - 1

    // (b)
    if (index < 0) setIndex(lastIndex) // (i) for prev case
    if (index > lastIndex) setIndex(0) // (ii) for next
  }, [index, people]) // (***)

  // (2) autoplay > use setInterval() > this is the case which we need to use cleanup function > if we try to press next and prev continuously for sometimes or let the auto play runs for a while, we will see that everything works unexpectedly > reason: because 2 useEffect() run at the same time, because index change will trigger setInterval() to run > fix in next lesson
  useEffect(() => {
    setInterval(() => {
      setIndex(index + 1)
    }, 3000)
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

        <button className='prev' onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className='next' onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  )
}

export default App
