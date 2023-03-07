// (5)
const Person = ({ name, removePerson, id }) => {
  return (
    <div className='container'>
      <h4>{name}</h4>
      <button className='btn' onClick={() => removePerson(id)}>
        Remove Person
      </button>
    </div>
  )
}
export default Person
