/*
  Axios: Global Defaults P3: Downsides
  - if we make another request, it still uses that default headers

  (***) Network Tab > Fetch/XHR: 
    > Request Headers > Accept === application/json

*/

import { useEffect } from 'react'
import axios from 'axios'

const productsUrl = 'https://course-api.com/react-store-products'
const randomUserUrl = 'https://randomuser.me/api' // (***)

const GlobalInstance = () => {
  const fetchData = async () => {
    try {
      const response1 = await axios.get(productsUrl)
      const response2 = await axios.get(randomUserUrl) // (***)
      console.log('response1', response1)
      console.log('response2', response2)
    } catch (error) {
      console.log(error.response)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return <h2 className='text-center'>global instance</h2>
}
export default GlobalInstance
