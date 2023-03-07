/*
  useCallback Hook P1

  - The useCallback hook is a hook in React that allows you to memoize a [function]. It takes two arguments: the first is the function you want to memoize, and the second is an array of dependencies. The hook will return a memoized version of the function that only changes if one of the values in the dependency array changes.

  - By memoizing the function, you can avoid unnecessary re-renders and improve the performance of your React application. The function will only be re-created if one of its dependencies changes, otherwise the same instance of the function will be returned. This can be useful in situations where you have an expensive function that you only want to recompute when its dependencies change.

  
  
  (***) [people] === ok > [] === bad > because when we use useCallback(), we memoize this function > memoize the people array in the function as well > always 4 items

*/

import { useCallback, useState } from 'react'
import { data } from './data'
import List from './List'

const LowerStateChallenge = () => {
  const [people, setPeople] = useState(data)
  const [count, setCount] = useState(0)

  // (***) use here > useCallback(fn, [dep list]) > then test
  const removePerson = useCallback(
    (id) => {
      console.log(people)
      const newPeople = people.filter((person) => person.id !== id)
      setPeople(newPeople)
    },
    [people] // (***) without the "people", test remove function and check the log
  )

  return (
    <section className='container'>
      <button className='btn' onClick={() => setCount(count + 1)}>
        count {count}
      </button>
      <List people={people} removePerson={removePerson} />
    </section>
  )
}
export default LowerStateChallenge
