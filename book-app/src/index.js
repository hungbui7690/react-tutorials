import React from 'react'
import ReactDOM from 'react-dom/client'

// CSS
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

const BookList = () => {
  return (
    <section className='book-list'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => {
  return (
    <img
      src='https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL900_SR900,600_.jpg'
      alt=''
      width='400px'
    />
  )
}

const Title = () => <h2>I Love You to the Moon and Back</h2>

const Author = () => {
  // 1st {}: back to JS , 2nd {{}}: object
  // > be careful when writing this way > because later, when we use library, and some libraries may use inline style > it's hard to overwrite
  return (
    <h4 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem' }}>
      Amelia Hepworth
    </h4>
  )
}

root.render(
  <React.StrictMode>
    <BookList />
  </React.StrictMode>
)
