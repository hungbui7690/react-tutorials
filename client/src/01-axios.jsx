/*
  Axios: Setup Headers P3: Display Joke

*/

import { useEffect, useState } from 'react'
import axios from 'axios'

const url = 'https://icanhazdadjoke.com/'

const FetchData = () => {
  const [joke, setJoke] = useState('')

  const fetchDadJoke = async () => {
    try {
      // (1) extract data
      const { data } = await axios(url, {
        headers: {
          Accept: 'application/json',
        },
      })
      setJoke(data.joke)
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
