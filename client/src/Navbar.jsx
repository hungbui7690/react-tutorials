/*
  - in css file, at media queries: 
    .links-container {
      height: auto !important;
    }

  - because in css, we cannot setup "current.style.height" > this is inline css > we must have !important to overwrite
  _ if we comment that line > in small device we hide the link > when change to big screen, we won't see the links

/////////////////////////////////////////////////////////

  Why don't we set the DIV as the one we use to adjust height, but use the UL? 
    <div className='links-container' ref={linksContainerRef}>
      <ul className='links' ref={linksRef}>
      
  - because in css, we set height link-container = 0 
    > when we log height at (2) > when we click toggle button, it will set the height = 0 > so, we need to wrap ul insde div > so that div can get the height of ul
  
*/

import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)

  // (1) after finish this, we can add more links to test
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height

    // (2) get height of container
    console.log(linksContainerRef.current.getBoundingClientRect()) // height = 0

    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`
    } else {
      linksContainerRef.current.style.height = '0px'
    }
  }, [showLinks])

  return (
    <div className='nav-center'>
      <div className='nav-header'>
        <img src={logo} alt='logo' />
        <button className='nav-toggle' onClick={() => setShowLinks(!showLinks)}>
          <FaBars />
        </button>
      </div>

      <div className='links-container' ref={linksContainerRef}>
        <ul className='links' ref={linksRef}>
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
