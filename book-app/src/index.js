import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
const root = ReactDOM.createRoot(document.getElementById('root'))

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
        img={firstBook.img}
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

// (***) Method 2: destructuring directly at parameters
const Book = ({ img, title, author }) => {
  return (
    <article className='book'>
      <img src={img} alt='' />
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
