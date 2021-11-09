import React from 'react'
import Product from './Product'
import Gold from './images/Gold.jpg'
import Sierra from './images/Sierra Blue.jpg'
import Pacific from './images/Pacific Blue.jpg'
import Starlight from './images/Starlight.jpg'

const productData = [
  {name:'Iphone 13 pro (Sierra Blue)', price:78999, storage:'128gb', image:Sierra},
  {name:'Iphone 13 pro (Pacific Blue)', price:98998, storage:'256gb', image:Pacific},
  {name:'Iphone 13 pro (Gold)', price:118999, storage:'512gb', image:Gold},
  {name:'Iphone 13 pro (Starlight)', price:122999, storage:'512gb', image:Starlight}
];

function Products(props) {
  return (
    productData.map(product => <Product key={product.name} {...product} isCartView={false} addProduct={()=>props.addProduct(product)} />)
  )
};

export default Products