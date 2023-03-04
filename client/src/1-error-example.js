/*
  - when we click on title, it does not change > but when we log it out, we still see the value is changed > reasons: because the value is changed, but the component is not re-rendered > this is the reason we need useState() hook

*/

import React from 'react'

const ErrorExample = () => {
  let title = 'random title'

  const handleClick = () => {
    title = 'Hello'
    console.log(title)
  }

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type='button' className='btn' onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  )
}

export default ErrorExample
