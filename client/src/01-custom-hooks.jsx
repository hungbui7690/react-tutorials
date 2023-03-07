/*
  Custom Hooks P4: Fetch User Hook
  - create useFetchPerson.jsx
  - import and use

  (***) previous lesson: we need these states > we need to return these states from the custom hook
    
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [user, setUser] = useState(null)
*/

import useFetchPerson from './useFetchPerson'

const MultipleReturnsFetchData = () => {
  const { isLoading, isError, user } = useFetchPerson() // (***) use here + remove useEffect()

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h2>There was an error...</h2>
  }

  const { avatar_url, name, company, bio } = user

  return (
    <div>
      <img
        style={{ width: '150px', borderRadius: '25px' }}
        src={avatar_url}
        alt={name}
      />
      <h2>{name}</h2>
      <h4>works at {company}</h4>
      <p>{bio}</p>
    </div>
  )
}
export default MultipleReturnsFetchData
