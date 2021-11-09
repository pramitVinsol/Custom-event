import React from 'react'
import Product from './Product'

function Cart(props) {
  return (
    <div className='container'>
      {props.cartItems.map(product => <Product key={product.id} {...product} isCartView removeProduct={()=>props.removeProduct(product)} />)}
    </div>
  )
}

export default Cart;
