import React from 'react'

function Product(props) {
  let actions = null
  if(!props.isCartView) {
    actions = <button className="btn btn-warning" onClick={props.addProduct}>Add To Cart</button>;
  } else if(props.isCartView && !props.orderPlaced) {
    actions = <button className='btn btn-danger remove' onClick={props.removeProduct}>Remove</button>; 
  };

  return (
    <div className='product'>
      <div className='productImage'>
        <img src={`${props.image}`} alt={props.image} height='400'/>
      </div>
      <div className='product-details'>
        <h3 className='productName'>{props.name}</h3>
        <h4 className='productPrice'>
          Rs.{props.price} 
        </h4>
        <h5 className='productStorage'>{props.storage}</h5>
        {actions}
      </div>
    </div>
  )
}

export default Product;
