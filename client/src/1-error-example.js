/*

*/

// (***) first, we need to import {useState} > this is NAMED IMPORT > it needs to be in {} and name must be correct
import React, { useState } from 'react'

const ErrorExample = () => {
  let title = 'random title'

  // (***) [undefined, f] > state = undefined, f is setState() > why it returns undefined? reason: when we call useState(), we need to pass default value, but we didn't pass default value yet
  console.log(useState())

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
