import React from 'react'
import Product from './Product'

function OrderSummary(props) {
  return (
    props.orderedItems.map(product => <Product key={product.id} {...product} isCartView orderPlaced/>)
  )
}

export default OrderSummary
