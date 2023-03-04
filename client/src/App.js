/*
  Accordion: Display Questions (UI) 

  (1) Question.js
*/

import React, { useState } from 'react'
import SingleQuestion from './Question'
import data from './data'

function App() {
  const [questions, setQuestions] = useState(data)

  return (
    <div className='container'>
      <h3>Questions and Answers about Login</h3>
      <section className='info'>
        {questions.map((question) => {
          // (1) spread operator
          return <SingleQuestion key={question.id} {...question} />
        })}
      </section>
    </div>
  )
}

export default App
