/*
  Form: Controlled Inputs P1: Setup
  - in this form, we have 1 input
*/

const ControlledInputs = () => {
  return (
    <form className='form'>
      <h4>controlled inputs</h4>
      <div className='form-row'>
        <label htmlFor='name' className='form-label'>
          name
        </label>
        <input type='text' className='form-input' id='name' />
      </div>
      <button type='submit' className='btn btn-block'>
        submit
      </button>
    </form>
  )
}
export default ControlledInputs
