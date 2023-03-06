/*
  Leverage Javascript P2
  
    - with optional chaining: if the person.name is null or undefined, this code will simply return undefined instead of throwing an error. This make the code more robust and readable.

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
