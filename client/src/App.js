/*
  Accordion: Basic Setup
  - in this project, instead having Question[s] & Question > we just have Question.js 
    > because of that, we will using map() to iterate the questions in App.js

*/

import React, { useState } from 'react'
import SingleQuestion from './Question'

// (1)
import data from './data'

function App() {
  // (2)
  const [questions, setQuestions] = useState(data)

  return (
    <div className='container'>
      <h3>Questions and Answers about Login</h3>
      <div className='section info'>
        {/* (3) pass sang bên Question.js (Single Question) */}
        {questions.map((question) => {
          return <SingleQuestion key={question.id} {...question} />
        })}
      </div>
    </div>
  )
}

export default App
