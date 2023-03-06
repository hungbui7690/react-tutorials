import React from 'react'
import avatar from './assets/default-avatar.svg' // (***) load default img

// (***) default params
const Person = ({ name, nickName = 'Shake & Bake', images }) => {
  const img = images?.[0]?.small?.url || avatar // (***) WITH optional chaining > without ? > error

  // const img = images?.[0]?.small?.url ?? avatar // (***) COMBINING with the nullish coalescing operator ??

  return (
    <div className='users'>
      <h4>{name}</h4>
      <p>Nick Name: {nickName}</p>
      <img src={img} alt='' className='img' />
    </div>
  )
}

export default Person
