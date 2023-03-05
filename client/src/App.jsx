/*
   Accordion: Logic P2
  - right now, if we click on the different, it still close the old one, but there are some problems: 
    [1] we can not close the opening element when we click on it
    [2] the (-) sign does not switch to (+) after closing

*/

import React, { useState } from 'react'
import SingleQuestion from './Question'
import data from './data'

function App() {
  const [questions, setQuestions] = useState(data)
  const [prevElement, setPrevElement] = useState(null)

  return (
    <div className='container'>
      <h3>Questions and Answers about Login</h3>
      <section className='info'>
        {questions.map((question) => {
          return (
            <SingleQuestion
              key={question.id}
              {...question}
              prevElement={prevElement}
              setPrevElement={setPrevElement}
            />
          )
        })}
      </section>
    </div>
  )
}

export default App
