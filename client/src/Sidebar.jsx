import React from 'react'

// (2a)
import { links } from './data'

const Sidebar = () => {
  return (
    <>
      <h4>Sidebar</h4>
      <div className='links-container show-container'>
        <ul className='links'>
          {/* (2b) go to App.js */}
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
    </>
  )
}

export default Sidebar
