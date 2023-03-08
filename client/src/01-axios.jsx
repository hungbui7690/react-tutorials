/*
  Axios: GET Request
  - promise === async/await === try/catch
  - data === response.data
  - error === error.response (catch block)

  (***) unlike fetch() > Axios treats 404 as error
    > error.response

*/

import { useEffect } from 'react'
import axios from 'axios' // (1)

const url = 'https://course-api.com/react-store-products' // (***) test by changing url to create error

const FetchData = () => {
  // (2)
  const fetchData = async () => {
    try {
      const response = await axios.get(url)
      const data = response.data // (***)

      console.log(response)
      console.log(data)
    } catch (error) {
      console.log(error.response) // (***)
    }
  }

  useEffect(() => {
    fetchData() // (3)
  }, [])

  return <h2 className='text-center'>first request</h2>
}
export default FetchData
