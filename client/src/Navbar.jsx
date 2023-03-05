/*
  - to set height dynamically, we need to know getBoudingClientRect: https://youtu.be/v8YENdbDv1w
    > this is from JS, not from React

  (1) we need to change className like before > [className='links-container'] > without condition like last lesson 

  To use useRef: 
  (2) create 2 refs
  (3) hook to div and ul 
  (4) use useEffect() > run every time showLinks has changes

*/

import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)
  // (2) crete 2 refs
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)

  // (4) every time links has change > call callback function > we need to check the height of the links (linkRefs === ul) to decide the height of the container (div)
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect()
    console.log(linksHeight) // (***) height of UL
  }, [showLinks])

  return (
    <div className='nav-center'>
      <div className='nav-header'>
        <img src={logo} alt='logo' />
        <button className='nav-toggle' onClick={() => setShowLinks(!showLinks)}>
          <FaBars />
        </button>
      </div>

      {/* (1) change className > remove conditional rendering */}
      <div
        className='links-container'
        ref={linksContainerRef} // (3a) hook ref to component
      >
        <ul
          className='links'
          ref={linksRef} // (3b) hook
        >
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
