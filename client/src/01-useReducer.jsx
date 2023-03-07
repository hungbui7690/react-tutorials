/*
  useReducer P1: Challenge
    - lite version of Redux
    - when app grows, it's hard to manage our application with just useState() > especially when there are many developers working on the same project > state management libraries like Redux come into play > create structures & rules that we need to follow to change the state > less bugs + easier code management

    (***) problem with those library: require quite a bit of boilerplate code

////////////////////////////////////////////////////

  - Challenge: 
    - let's add reset functionality
    - when we remove all the items on the screen > show that reset button 
    - when click on that button: load all data back to default

*/

import React from 'react'
import { data } from './data'

const ReducerBasics = () => {
  const [people, setPeople] = React.useState(data)

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  }

  const clearList = () => {
    setPeople([])
  }

  return (
    <div className='container'>
      {people.map((person) => {
        const { id, name } = person
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        )
      })}
      <button className='btn' style={{ marginTop: '2rem' }} onClick={clearList}>
        clear
      </button>
    </div>
  )
}

export default ReducerBasics
