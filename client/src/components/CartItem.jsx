import React from 'react'

// (1a)
import { DECREASE, INCREASE, REMOVE } from '../action'
import { connect } from 'react-redux'

// (1d) these are props that are passed from CartContainer > OK
// we just need dispatch from 1c
const CartItem = ({ img, title, price, amount, remove }) => {
  return (
    <div className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className='item-price'>${price}</h4>
        {/* (1e)  */}
        <button className='remove-btn' onClick={remove}>
          remove
        </button>
      </div>
      <div>
        {/* increase amount */}
        <button className='amount-btn'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
            <path d='M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z' />
          </svg>
        </button>
        {/* amount */}
        <p className='amount'>{amount}</p>
        {/* decrease amount */}
        <button className='amount-btn'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
            <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
          </svg>
        </button>
      </div>
    </div>
  )
}

// (1b) setup as arrow function to prevent dispatch from invoke
const mapDispatchToProps = (dispatch) => {
  return { remove: () => dispatch({ type: REMOVE }) }
}

// (1c) since we have the props that are passed from CartContainer > we don't need to have mapStateToProps
// but we need the dispatch function
export default connect(null, mapDispatchToProps)(CartItem)
