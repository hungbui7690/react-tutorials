/*
  - now we can toggle, but when click on the toggle button > missing transition > fix below
  - after fix, we check css file, we will see: 
    > .show-container {
        height: 10rem;
      }
    > height is fixed > so that when we add more links, we cannot see > we can only see 4 links 
    > learn in next lesson

*/

import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)

  return (
    <div className='nav-center'>
      <div className='nav-header'>
        <img src={logo} alt='logo' />
        <button className='nav-toggle' onClick={() => setShowLinks(!showLinks)}>
          <FaBars />
        </button>
      </div>

      {/* (***) use template string */}
      <div
        className={`${
          showLinks ? 'show-container links-container' : 'links-container'
        }`}
      >
        <ul className='links'>
          {links.map((link) => {
            const { id, url, text } = link
            return (
              <li key={id}>
                <a href={url}>{text}</a>
              </li>
            )
          })}
        </ul>
      </div>

      <ul className='social-icons'>
        {social.map((socialIcon) => {
          const { id, url, icon } = socialIcon
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          )
        })}{' '}
      </ul>
    </div>
  )
}

export default Navbar
