import { Link, Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      {/* (***) shared */}
      <h2>Home Page</h2>

      {/* (***) About */}
      <Outlet />
    </div>
  )
}
export default Home
