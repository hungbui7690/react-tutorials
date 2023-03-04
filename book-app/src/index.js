/*
  we repeat code too much > if we check in amazon website, we see that it has too many products > we cannot pass directly like we learned, but using loop
*/

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

// (1) instead of create 2 separated objects, we but them in array
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

// (2) using loop to create components
// when we check log >> each child in a list should have a unique "key" prop
const names = ['john', 'peter', 'susan']
const newNames = names.map((newName) => {
  return <h1>{newName}</h1>
})
console.log(newNames)

// (3) if we pass directly "array of strings (names)" into BookList, then ok > but if we pass "array of objects" directly, then ERROR > so that, we have to map from objects into strings
const BookList = () => {
  return <section className='book-list'>{newNames}</section>
}

const Book = (props) => {
  const { img, title, author } = props
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
