/*
  - in this example, we use parameter
  - if we write like this: [***  onClick={handler(author)} ***] > we call the function > function will be run immediately after it renders > so that we have to use arrow function > onClick={() => {handler(author) }}
  - we can also use event target (e) like we work with JS
*/

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

const books = [
  {
    id: 1,
    author: 'Amelia Hepworth',
    title: 'I Love You to the Moon and Back',
    img: 'https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL900_SR900,600_.jpg',
  },
  {
    id: 2,
    author: 'Bill Martin Jr.',
    title: 'Brown Bear, Brown Bear, What Do You See?',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81EVdWdmOKL._AC_UL900_SR900,600_.jpg',
  },
  {
    id: 3,
    author: 'Colleen Hoover',
    title: 'Reminders of Him: A Novel',
    img: 'https://images-na.ssl-images-amazon.com/images/I/617uZq23IPL._AC_UL900_SR900,600_.jpg',
  },
]

const BookList = () => {
  return (
    <section className='book-list'>
      {books.map((book) => {
        return <Book key={book.id} {...book} />
      })}
    </section>
  )
}

const Book = ({ img, title, author }) => {
  // (1) this function receive e as parameter
  const clickHandler = (e) => {
    console.log(e)
    console.log(e.target)
  }

  // (3)
  const handler = (author) => {
    console.log(author)
  }

  return (
    <article
      className='book'
      // (***) hover effect
      onMouseOver={() => {
        console.log(title)
      }}
    >
      <img src={img} alt='' width='200px' />
      <h2 onClick={() => console.log(title)}>{title}</h2>
      <h4>{author}</h4>

      {/* (2) */}
      <button type='button' onClick={clickHandler} style={{ display: 'block' }}>
        Submit
      </button>

      {/* (4) use arrow function to call ref a function with param */}
      <button
        type='button'
        onClick={() => {
          handler(author)
        }}
      >
        Get Log - Author
      </button>
    </article>
  )
}

root.render(
  <React.StrictMode>
    <BookList />
  </React.StrictMode>
)
