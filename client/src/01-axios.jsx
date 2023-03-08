/*
  Axios: Global Defaults P1: Setup
  - with this, every time we send request to server, these info will be added to our request

  We want to setup these as default:
    axios.defaults.headers.common['Accept'] = 'application/json';
    axios.defaults.baseURL = 'https://api.example.com';
    axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
    axios.defaults.headers.post['Content-Type'] =
    'application/x-www-form-urlencoded';

*/

import { useEffect } from 'react'

const productsUrl = 'https://course-api.com/react-store-products'
const randomUserUrl = 'https://randomuser.me/api'

const GlobalInstance = () => {
  const fetchData = async () => {
    console.log('global axios instance')
  }

  useEffect(() => {
    fetchData()
  }, [])

  return <h2 className='text-center'>global instance</h2>
}
export default GlobalInstance
