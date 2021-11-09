import React, { Component } from 'react'
import OrderSummary from './components/OrderSummary';
import Cart from './components/Cart';
import Products from './components/Products';
import Header from './components/Header';

class Shop extends Component {

  constructor() {
    super();
    this.state = {
      cartItems: [],
      isOrderPlaced: false,
      totalPrice: 0,
      showCart: false
    }
  }

  getCartValue = (product, action) => {
    let updatedPrice = this.state.totalPrice;
    switch (action) {
      case 'add':
        updatedPrice += product.price;
        break;
      case 'remove':
        updatedPrice -= product.price;
        break;
      default:
        break;
    }
    return updatedPrice
  };

  addProduct = (product) => {
    let cartItems = [...this.state.cartItems];
    product = { ...product, id: Date.now() }
    cartItems = [...cartItems, product];
    this.setState({ cartItems: cartItems, totalPrice: this.getCartValue(product, 'add') });
  }

  removeProduct = (product) => {
    let cartItems = [...this.state.cartItems];
    const updatedCart = cartItems.filter(item => item.id !== product.id);
    this.setState({ cartItems: updatedCart, totalPrice: this.getCartValue(product, 'remove') });
  }

  placeOrder = () => {
    this.setState({ 
      isOrderPlaced: true,
      showCart: false 
    })
  }

  goToCart = (pass) => {
    if (this.state.isOrderPlaced) {
      this.setState({
        isOrderPlaced: false,
        cartItems: [],
        totalPrice: 0
      })
    }
    this.setState({ showCart: pass })
  }

  render() {
    return (
      <>
        <Header goToCart={this.goToCart} />
        {(this.state.isOrderPlaced &&
          <div className='orderDetails'>
            <h1 className='value'>Total: {this.state.totalPrice}</h1>
            <OrderSummary orderedItems={this.state.cartItems} />
          </div>)}

        {!this.state.showCart && !this.state.isOrderPlaced && (
          <div className='main d-md-flex'>
            <Products addProduct={this.addProduct} />
          </div>
        )}

        {this.state.showCart && !this.state.isOrderPlaced && (
          <div className='cart'>
            <div className='cartValue'>
              <span className='value'>{this.state.totalPrice}</span>
              <button disabled={!this.state.totalPrice} onClick={this.placeOrder} className='btn-order'>Order</button>
            </div>
            <Cart cartItems={this.state.cartItems} removeProduct={this.removeProduct} />
          </div>
        )}
      </>
    )
  }
}

export default Shop;
