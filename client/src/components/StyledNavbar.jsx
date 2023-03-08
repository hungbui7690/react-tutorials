import { NavLink } from 'react-router-dom'

const StyledNavbar = () => {
  return (
    <nav className='navbar'>
      {/* (1) add style > be careful with {isActive} > must have {}  */}
      <NavLink
        to='/'
        style={({ isActive }) => {
          return { color: isActive ? 'red' : 'blue' }
        }}
      >
        Home
      </NavLink>

      <NavLink to='/about'>About</NavLink>
      <NavLink to='/products'>Products</NavLink>
    </nav>
  )
}
export default StyledNavbar
