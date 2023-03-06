/*
  Form: Checkout Inputs
  - input: e.target.value
  - checkbox: e.target.checked
*/

import { useState } from 'react'

const OtherInputs = () => {
  const [shipping, setShipping] = useState(false)

  const handleShipping = (e) => {
    console.log(e.target.checked)
    setShipping(e.target.checked)
  }

  return (
    <div>
      <form className='form'>
        <h4>Other Inputs</h4>
        <div className='form-row' style={{ textAlign: 'left' }}>
          <input
            type='checkbox'
            checked={shipping} // (***) checkout: e.target.checked
            id='shipping'
            name='shipping'
            onChange={handleShipping} // (***)
          />
          <label htmlFor='shipping'> Free Shipping </label>
        </div>
        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </div>
  )
}
export default OtherInputs
