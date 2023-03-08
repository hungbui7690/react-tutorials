/*
  Axios: POST Request P2
  - send data to the server
  - axios.post(url, { data })
  - axios.post(url, { data },{})
    > add more options: send auth headers...

  (***) check network tab > Fetch/XHR > Response
    > test with john/johnn@gmail.com / susan...
*/

import { useState } from 'react'
import axios from 'axios'
const url = 'https://course-api.com/axios-tutorial-post'

const PostRequest = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    // (***)
    try {
      const response = await axios.post(url, { name: name, email: email }) // cannot use {name, email}
      console.log(response)
    } catch (error) {
      console.log(error.response.data)
    }
  }

  return (
    <section>
      <h2 className='text-center'>post request</h2>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input
            type='text'
            className='form-input'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            email
          </label>
          <input
            type='email'
            className='form-input'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type='submit' className='btn btn-block'>
          login
        </button>
      </form>
    </section>
  )
}
export default PostRequest
