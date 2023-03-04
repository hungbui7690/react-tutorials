/*
  - now, if we check log > "unique key prop" > reason: because later, we will add and remove many items in that list > and react wants to manage those component > that's why it blames the error > we just need to add "key" prop to fix that (remember that key must be unique)

  - or we could add index > [*** books.map((book, index) => {} ***] > but this way is not recommended, since later, if we add/remove item, index will change dynamically > that's why we prefer using id 

  (***) in the real world, we will work with API > there must be unique id for us to use
 */

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

// (1) add id field
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

// (2) use id as key
// when we pass the props down, instead of using book={book}, we can also use spread operator > {...book}
const BookList = () => {
  return (
    <section className='book-list'>
      {books.map((book) => {
        return <Book key={book.id} {...book} />
      })}
    </section>
  )
}

// (3) because above we spread the properties out > here we don't use "props.book", but use "prop"
const Book = (props) => {
  const { img, title, author } = props // (***)
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
