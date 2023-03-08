import { Link } from 'react-router-dom'

// (1) go to Home & import
const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/products'>Products</Link>
    </nav>
  )
}
export default Navbar
