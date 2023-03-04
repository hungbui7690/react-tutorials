/*
  we repeat code too much > if we check in amazon website, we see that it has too many products > we cannot pass directly like we learned, but using loop
*/

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

// (1)
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
    <section className='book-list'>
      {/* (2) instead of return div, we return <Book> and pass props into it > after being displayed in the browser, it still states the error "unique key prop" > fix in next lecture */}
      {books.map((book) => {
        return <Book book={book} />
      })}
    </section>
  )
}

// (3) get the props here
const Book = (props) => {
  const { img, title, author } = props.book
  console.log(props)
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
