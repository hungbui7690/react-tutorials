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
      >
        {/* (1) children: must be in between of Opening & Closing tags > in this case, <p> is in between <Book> > (***) Notes: if we just set here, but without setup the 2nd step, it won't show in the browser */}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
          et.
        </p>
      </Book>

      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  )
}

const Book = (props) => {
  // (2) we can destructuring children from the "props", or we can use directly by using "props.children" > notes: name "children" must be exact, otherwise, we can NOT get it
  const { img, title, author, children } = props
  console.log(props) // (***)

  return (
    <article className='book'>
      <img src={img} alt='' width='200px' />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {children} {/* method 1 */}
      {props.children} {/* method 2 */}
    </article>
  )
}

root.render(
  <React.StrictMode>
    <BookList />
  </React.StrictMode>
)
