/*
  we repeat code too much > if we check in amazon website, we see that it has too many products > we cannot pass directly like we learned, but using loop
*/

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

// (1) save objects into array
const books = [
  {
    author: 'Amelia Hepworth',
    title: 'I Love You to the Moon and Back',
    img: 'https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL900_SR900,600_.jpg',
  },
  {
    author: 'Bill Martin Jr.',
    title: 'Brown Bear, Brown Bear, What Do You See?',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81EVdWdmOKL._AC_UL900_SR900,600_.jpg',
  },
]

const BookList = () => {
  return (
    <section className='booklist'>
      {/* (2) we use map to create new array from array of objects above (books) */}
      {books.map((book) => {
        const { img, title, author } = book
        return (
          <div className='book'>
            <h3>{title}</h3>
            <h4>{author}</h4>
          </div>
        )
      })}
    </section>
  )
}

const Book = (props) => {
  const { img, title, author } = props
  return (
    <article className='book'>
      <img src={img} alt='' width='200px' />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  )
}

root.render(
  <React.StrictMode>
    <BookList />
  </React.StrictMode>
)
