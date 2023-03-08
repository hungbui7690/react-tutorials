/*
  Axios: Global Defaults P2

  (1) create axios/global.js
  (2) import to App.js


  (***) Network Tab > Fetch/XHR: Headers > find Accept

*/

import { useEffect } from 'react'
import axios from 'axios' // (***) be careful, if miss this line > no error > but return undefined

const productsUrl = 'https://course-api.com/react-store-products'
const randomUserUrl = 'https://randomuser.me/api'

const GlobalInstance = () => {
  const fetchData = async () => {
    try {
      const response = await axios.get(productsUrl)
      console.log(response)
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
