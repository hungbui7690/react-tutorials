import React from 'react'

const Book = ({ img, title, author }) => {
  const clickHandler = () => {
    alert('Hello World')
  }
  const handler = (author) => {
    console.log(author)
  }

  return (
    <article
      className='book'
      onMouseOver={() => {
        console.log(title)
      }}
    >
      <img src={img} alt='' width='200px' />
      <h2 onClick={() => console.log(title)}>{title}</h2>
      <h4>{author}</h4>
      <button type='button' onClick={clickHandler}>
        Submit
      </button>
      <button
        type='button'
        onClick={() => {
          handler(author)
        }}
      >
        Get Log - Author
      </button>
    </article>
  )
}

// (2) Default Export > go to index.js
export default Book
