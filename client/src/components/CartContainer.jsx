import React from 'react'
import CartItem from './CartItem'
import { connect } from 'react-redux' // (a)

// (d)
const CartContainer = ({ cart = [], total }) => {
  if (cart.length === 0) {
    return (
      <section className='cart'>
        <header>
          <h2>your bag</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    )
  }

  return (
    <section className='cart'>
      <header>
        <h2>your bag</h2>
      </header>
      <article>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />
        })}
      </article>
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button className='btn clear-btn'>clear cart</button>
      </footer>
    </section>
  )
}

// (b)
const mapStateToProps = (store) => {
  const { cart, total } = store
  return { cart, total }
}

// (c)
export default connect(mapStateToProps)(CartContainer)
