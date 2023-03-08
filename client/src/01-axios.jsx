/*
  Axios: Setup Headers P2: .get(url, {})

  - headers format: 
      headers: {
        Accept: 'application/json'
      }

*/

import { useEffect, useState } from 'react'
import axios from 'axios'

const url = 'https://icanhazdadjoke.com/'

const FetchData = () => {
  const [joke, setJoke] = useState('')

  const fetchDadJoke = async () => {
    try {
      const response = await axios(url, {
        headers: {
          Accept: 'application/json', // (***)
        },
      })
      console.log(response)
    } catch (error) {
      console.log(error.response)
    }
  }

  return (
    <section className='section text-center'>
      <button className='btn' onClick={fetchDadJoke}>
        random joke
      </button>
      <p className='dad-joke'>{joke}</p>
    </section>
  )
}
export default FetchData
