/*
  Axios: Setup
  - avoid headache when using good old fetch API
    > npm install axios

  - methods: 
    - axios.get(url)
    - axios.post(url)
    - axios.patch/put(url)
    - axios.delete(ulr)

  (***) default get axios(url)

  - Properties:
    - returns a promise
    - response data located in data property
    - error in error.response

*/

import { useEffect } from 'react'
// limit, if 429 wait for 15 min and try again
const url = 'https://course-api.com/react-store-products'

const FirstRequest = () => {
  useEffect(() => {
    console.log('first axios request')
  }, [])

  return <h2 className='text-center'>first request</h2>
}
export default FirstRequest
