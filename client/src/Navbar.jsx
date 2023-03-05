import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

// (2) we will work with mobile first
const Navbar = () => {
  return (
    <div className='nav-center'>
      {/* (i) nav-header contains logo & hamburger icon */}
      <div className='nav-header'>
        <img src={logo} alt='logo' />
        <button className='nav-toggle'>
          <FaBars />
        </button>
      </div>

      {/* (ii) */}
      <div className='links-container show-container'></div>

      {/* (iii) social icons: only shown in big screen */}
      <ul className='social-icons'></ul>
    </div>
  )
}

export default Navbar
