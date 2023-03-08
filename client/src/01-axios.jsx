/*
  Axios: Interceptors
  - interceptors: 
    + request: right b4 request is sent to server
    + response: right b4 response is sent back to client


  (***) in this case, we add interceptors to custom instance 
    > but interceptors can also be added to any axios request/response > check axios docs
  

  (1) custom.js

*/

import { useEffect } from 'react'

// (2)
import authFetch from './axios/custom'
import axios from 'axios'

const Axios = () => {
  const fetchData = async () => {
    try {
      const response = await authFetch('/react-store-products')

      console.log(response)
    } catch (error) {
      console.log(error.response)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return <h2 className='text-center'>Interceptors</h2>
}
export default Axios
