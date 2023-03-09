import React from 'react'
import CartItem from './CartItem'
import { connect } from 'react-redux'

// (2a) check pic: dispatch-rdt > we see dispatch() in props
import { CLEAR_CART } from '../action'

// (2b) that's why we can use it here
const CartContainer = ({ cart = [], total, dispatch }) => {
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
        <button
          className='btn clear-btn'
          onClick={() => dispatch({ type: CLEAR_CART })} // (2c) go to reducer
        >
          clear cart
        </button>
      </footer>
    </section>
  )
}

const mapStateToProps = (store) => {
  const { cart, total } = store
  return { cart, total }
}

export default connect(mapStateToProps)(CartContainer)
