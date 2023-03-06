/*
  Leverage Javascript P1

*/

import { people } from './data'
import Person from './Person'

const List = () => {
  return (
    <div>
      {people.map((person) => {
        return (
          <Person
            className='user'
            key={person.id}
            person={person}
            {...person} // (***)
          />
        )
      })}
    </div>
  )
}
export default List
