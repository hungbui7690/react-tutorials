import { memo } from 'react'
import Person from './Person'

// (3)
const List = ({ people, removePerson }) => {
  return (
    <div>
      {people.map((person) => {
        return (
          <Person
            key={person.id}
            {...person}
            removePerson={removePerson} // (4)
          />
        )
      })}
    </div>
  )
}
export default memo(List) // (***)
