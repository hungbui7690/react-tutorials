import React from 'react'
import avatar from './assets/default-avatar.svg' // (***)

// (***) default params
const Person = ({ name, nickName = 'Shake & Bake', images }) => {
  const img =
    (images && images[0] && images[0].small && images[0].small.url) || avatar // (***) BEFORE optional chaining

  return (
    <div className='users'>
      <h4>{name}</h4>
      <p>Nick Name: {nickName}</p>
      <img src={img} alt='' className='img' />
    </div>
  )
}

export default Person
