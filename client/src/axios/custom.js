import axios from 'axios'

const authFetch = axios.create({
  baseURL: 'https://course-api.com',
})

// (***) modify request b4 sending to server
authFetch.interceptors.request.use(
  function (request) {
    console.log('got request')

    return request // (***) must return request
  },
  function (error) {
    return Promise.reject(error)
  }
)

// (***) modify response from server b4 send back to client
authFetch.interceptors.response.use(
  function (response) {
    console.log('got response')
    response.name = 'Hung' // modify response

    return response // (***) must return response
  },
  function (error) {
    console.log(error.response)
    if (error.response.status === 404) {
      // do something
      console.log('NOT FOUND')
    }
    return Promise.reject(error)
  }
)

export default authFetch
