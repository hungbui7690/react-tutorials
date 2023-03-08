import { useCallback, useMemo, useState } from 'react'
import { data } from './data'
import List from './List'

// (***)
import slowFunction from './slowFunction'

const LowerStateChallenge = () => {
  const [people, setPeople] = useState(data)
  const [count, setCount] = useState(0)

  // (***) now, it will run slow at initial render > after that, it will be fast
  const value = useMemo(() => slowFunction(), [])
  console.log(value)

  const removePerson = useCallback(
    (id) => {
      console.log(people)
      const newPeople = people.filter((person) => person.id !== id)
      setPeople(newPeople)
    },
    [people]
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
