/*
  Performance P4: Lower State Challenge - Solution
  - we see that the List will be re-render > so we move the Form to another file

  > Test in RDT: Profile tab

*/

import { useState } from 'react'
import { data } from './data'
import List from './List'

import Form from './Form' // (***)

const LowerStateChallenge = () => {
  const [people, setPeople] = useState(data)

  // (***) add param name
  const addPerson = (name) => {
    const fakeId = Date.now()
    const newPerson = { id: fakeId, name }
    setPeople([...people, newPerson])
  }

  return (
    <section>
      {/* (***) pass addPerson */}
      <Form addPerson={addPerson} />
      <List people={people} />
    </section>
  )
}
export default LowerStateChallenge
