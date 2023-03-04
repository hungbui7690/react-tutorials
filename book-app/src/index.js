/*
  All Events: https://reactjs.org/docs/events.html
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
  // (1) attribute, eventHandler > onClick, onMouseOver
  // we have 2 events > click on h2, and click on the button > this is the case which we don't pass parameters into that function
  const clickHandler = () => {
    alert('Hello World')
  }

  return (
    <article className='book'>
      <img src={img} alt='' />

      {/* (***) */}
      <h2 onClick={() => console.log(title)} style={{ cursor: 'pointer' }}>
        {title}
      </h2>
      <h4>{author}</h4>

      {/* (2) */}
      <button type='button' onClick={clickHandler}>
        Submit
      </button>
    </article>
  )
}

root.render(
  <React.StrictMode>
    <BookList />
  </React.StrictMode>
)
