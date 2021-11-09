import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header(props) {
  return (
    <div className='heading'>
      <button className="btn btn-light" onClick={()=>props.goToCart(false)}>Home</button>
      <button className="btn btn-dark" onClick={()=>props.goToCart(true)}>Show Cart</button>
    </div>
  )
}

export default Header;
