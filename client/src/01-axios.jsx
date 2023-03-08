/*
  Axios: Custom Instance
  - to fix the issue from the last lesson (global defaults in every request) > we use Custom Instance
    > with this: when we connect to multiple server APIs > we can setup defaults for each server 

  (*) remove the global defaults from App.js
  (1) create axios/custom.js

*/

import { useEffect } from 'react'
import axios from 'axios'

// (2)
import authFetch from './axios/custom'

const productsUrl = 'https://course-api.com/react-store-products'
const randomUserUrl = 'https://randomuser.me/api'

const GlobalInstance = () => {
  const fetchData = async () => {
    try {
      // (3) now, we use authFetch() instead of axios.get()
      const response1 = await authFetch('/react-store-products') // (***) we don't need the full url

      // (4)
      const response2 = await axios.get(randomUserUrl)
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
