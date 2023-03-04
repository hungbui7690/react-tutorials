import React from 'react'
import ReactDOM from 'react-dom/client'

// import css file > no "from" keyword
import './index.css'

// (1) setup variables
const root = ReactDOM.createRoot(document.getElementById('root'))
const author = 'Amelia Hepworth'
const title = 'I Love You to the Moon and Back'
const img =
  'https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL900_SR900,600_.jpg'

const BookList = () => {
  return (
    <section className='booklist'>
      <Book />

      {/* (3) pass props here */}
      <Book job='developer' />
      <Book title='random title' number={22} />
    </section>
  )
}

// (4) use props here
const Book = (props) => {
  console.log(props)
  return (
    <article className='book'>
      <img src={img} alt='' width='400px' />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <p>{props.job}</p>
      <p>{props.title}</p>
      <p>{props.number}</p>
    </article>
  )
}

root.render(
  <React.StrictMode>
    <BookList />
  </React.StrictMode>
)
