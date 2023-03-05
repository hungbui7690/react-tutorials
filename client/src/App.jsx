/*
  Accordion: Logic P1

*/

import React, { useState } from 'react'
import SingleQuestion from './Question'
import data from './data'

function App() {
  const [questions, setQuestions] = useState(data)
  const [prevElement, setPrevElement] = useState(null) // (1)

  return (
    <div className='container'>
      <h3>Questions and Answers about Login</h3>
      <section className='info'>
        {questions.map((question) => {
          return (
            <SingleQuestion
              key={question.id}
              {...question}
              prevElement={prevElement} // (2a)
              setPrevElement={setPrevElement} // (2b)
            />
          )
        })}
      </section>
    </div>
  )
}

export default App
