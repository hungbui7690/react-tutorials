/*
  
//////////////////////////////////////////////////////////////////

  (1) check file data.jsx > then we use map() to render the data 
  (2) create Sidebar.jsx (this is an example file, we just use it for this lesson)
  (3) import in App.js 
  (4) setup in Sidebar.jsx 
  (5) go to data.jsx and make some change > we will see both sidebar and navbar will be changed > this is the benefit when having data in 1 place 
  (6) do the same with Social Icons 

  (***) (small screen) we can see that in data.jsx, there are 5 links, but after this lecture, it just shows 4 links > set height in css file
*/

import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import logo from './logo.svg'

import { links, social } from './data' // (***)

const Navbar = () => {
  return (
    <div className='nav-center'>
      <div className='nav-header'>
        <img src={logo} alt='logo' />
        <button className='nav-toggle'>
          <FaBars />
        </button>
      </div>

      <div className='links-container show-container'>
        <ul className='links'>
          {/* (1a) */}
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
        {/* (1b) create Sidebar.js */}
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
