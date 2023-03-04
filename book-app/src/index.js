/*
  - Import & Export are not from React, but from ES6 Modules
  - we can see that index.js is becoming very busy
  

  (1) (2) create 2 files:
    - book.js (default export) 
    - data.js (named export)

*/

import React from 'react'
import ReactDOM from 'react-dom/client'

// (3) NAMED export > name must be matched with the name in "data.js"
import { books } from './data'
// (4) DEFAULT export > we don't need to match the name
import SpecificBook from './book'

import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

const BookList = () => {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <SpecificBook key={book.id} {...book} />
      })}
    </section>
  )
}

root.render(
  <React.StrictMode>
    <BookList />
  </React.StrictMode>
)
