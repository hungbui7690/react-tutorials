import axios from 'axios'

// (1)
const authFetch = axios.create({
  baseURL: 'https://course-api.com',
})

export default authFetch
