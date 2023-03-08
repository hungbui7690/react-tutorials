// (1)
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h2>Home Page</h2>

      {/* (2) */}
      <Link to='/about' className='btn'>
        About
      </Link>
    </div>
  )
}
export default Home
