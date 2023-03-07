/*
  Function "Gotcha"
  - add removePerson() 

  > when we remove person > re-render > ok, because we changed the list
  > but, the problem appears when we click on count > it still trigger re-render the list
    > reason: when it re-render lower state > it creates the whole function from scratch 
    > when removePerson() is created, then pass to the List (2) > React considers it as props change > trigger re-render
      > solve in next lesson
  
*/

import { useState } from 'react'
import { data } from './data'
import List from './List'

const LowerStateChallenge = () => {
  const [people, setPeople] = useState(data)
  const [count, setCount] = useState(0)

  // (1) add this function
  const removePerson = (id) => {
    const newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  }

  return (
    <section className='container'>
      <button className='btn' onClick={() => setCount(count + 1)}>
        count {count}
      </button>
      <List
        people={people}
        removePerson={removePerson} // (2) pass
      />
    </section>
  )
}
export default LowerStateChallenge
