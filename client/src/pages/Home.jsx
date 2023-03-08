import { Link, Outlet } from 'react-router-dom'

// (2a)
import Navbar from './Navbar'

const Home = () => {
  return (
    <>
      {/* (2b) */}
      <Navbar />

      <section className='section'>
        <Outlet />
      </section>
    </>
  )
}
export default Home
