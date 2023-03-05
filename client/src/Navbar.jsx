import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  // (1)
  const [showLinks, setShowLinks] = useState(false)

  return (
    <div className='nav-center'>
      <div className='nav-header'>
        <img src={logo} alt='logo' />

        {/* (2) */}
        <button className='nav-toggle' onClick={() => setShowLinks(!showLinks)}>
          <FaBars />
        </button>
      </div>

      {/* (3) put the div in conditional rendering */}
      {showLinks && (
        <div className='links-container show-container'>
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
      )}

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
