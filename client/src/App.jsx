/*
  Sliders: Classes
  (1) go to .css file and uncomment:
      - overflow: hidden
      - opacity: 0 
      - some special classes at the end of the file > (a), (b), (c)
    > activeSlide will be the one in the middle (first one ine the array) > nextSlide will be on the right, and lastSlide will be on the left (last one in the array)
    > in general, the next slide will be the one on the right, and is being hidden (overflow:hidden + opacity:0)
    > beside, the parent (section-center) must have height, otherwise it won't work (try to set the background for section & section-center)

  (2) setup in App.js
    > we must set the height for parent (section-center), otherwise, it work work > try to set background for section & section-center

  (3) setup in App.js (return) > more stuffs

*/

import React, { useState, useEffect } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { FaQuoteRight } from 'react-icons/fa'
import data from './data'

function App() {
  const [people, setPeople] = useState(data)
  const [index, setIndex] = useState(0) // (iv) change default index and test

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

          // (2) more stuff: check f12 > index is state, personIndex is in data.js
          let position = 'nextSlide' // (i) default, most of the slides are nextSlide > there are just only 2 specials: lastSlide & activeSlide
          if (personIndex === index) {
            position = 'activeSlide' // (ii) index = 0 and personIndex = 0 (first one in data.js) will be in the middle >> check activeSlide in css: (translateX(0))
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = 'lastSlide'
            /*
                (iii) 
                - lastSlide must be always the one before activeSlide
                - the meaning of if condition: check if that item is the last item in the list or not (check data.js > susan is the last item) > now, there are 2 cases: [1] index !== 0 & [2] index === 0 > we must check for those 2 cases
                - go to:   const [index, setIndex] = useState(0) and set default index to 0, 1, 2, 3 to test
                - remove the condition after || in if condition & check
              */
          }

          // (3) add position class to <article> > className={position}
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
        <button className='prev'>
          <FiChevronLeft />
        </button>
        <button className='next'>
          <FiChevronRight />
        </button>
      </div>
    </section>
  )
}

export default App
