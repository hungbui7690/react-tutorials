import React from 'react'
import ReactDOM from 'react-dom/client'

// CSS
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

const BookList = () => {
  return (
    <section className='booklist'>
      <Book />
    </section>
  )
}

// in the {}, it must be expression > it can NOT be statement (at <p>): must return values > if we use let x = 1 > it's not ok
const author = 'Amelia Hepworth'

const Book = () => {
  const title = 'I Love You to the Moon and Back'
  return (
    <article className='book'>
      <img
        src='https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL900_SR900,600_.jpg'
        alt=''
        width='400px'
      />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <p>{6 + 6}</p>
    </article>
  )
}

root.render(
  <React.StrictMode>
    <BookList />
  </React.StrictMode>
)
