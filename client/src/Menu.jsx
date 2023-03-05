import React from 'react'

// (2) destructure
const Menu = ({ items }) => {
  return (
    <div className='section-center'>
      {items.map((menuItem) => {
        // (a) destructure
        const { id, title, img, desc, price } = menuItem

        // (b)
        return (
          <article key={id} className='menu-item'>
            <img src={img} alt={title} className='photo' />
            <div className='item-info'>
              <header>
                <h4>{title}</h4>
                <h5 className='price'>{price}</h5>
              </header>
              <p className='item-text'>{desc}</p>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default Menu
