import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

// (1) setup 2 objects
const firstBook = {
  author: 'Amelia Hepworth',
  title: 'I Love You to the Moon and Back',
  img: 'https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL900_SR900,600_.jpg',
}
const secondBook = {
  author: 'Bill Martin Jr.',
  title: 'Brown Bear, Brown Bear, What Do You See?',
  img: 'https://images-na.ssl-images-amazon.com/images/I/81EVdWdmOKL._AC_UL900_SR900,600_.jpg',
}

const BookList = () => {
  return (
    <section className='booklist'>
      <Book
        img={firstBook.img} // (2) using var when we pass props
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  )
}

const Book = (props) => {
  // (3) use here
  return (
    <article className='book'>
      <img src={props.img} alt='' width='400px' />
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
    </article>
  )
}

root.render(
  <React.StrictMode>
    <BookList />
  </React.StrictMode>
)
