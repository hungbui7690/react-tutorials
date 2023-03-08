/*
  Axios: Setup Headers P1

  - some server requires Headers
  - url = 'https://icanhazdadjoke.com/' > this one can returns text/html or application/json or text/plain based on our use > we can pass headers to this server and get what we want > check docs

*/

import { useEffect, useState } from 'react'
import axios from 'axios'

const url = 'https://icanhazdadjoke.com/'
// Accept : 'application/json'

const FetchData = () => {
  const [joke, setJoke] = useState('random dad joke')

  const fetchDadJoke = async () => {
    try {
      const response = await axios(url, {}) // (***) without headers > we don't get the json format as we want > html
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
