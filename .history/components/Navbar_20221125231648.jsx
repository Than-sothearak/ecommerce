import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from "react-icons/ai";
import { useStateContext } from '../context/StateContext';
import { Cart } from './';


const Navbar = () => {

const { totalQty, showCart,setShowCart } = useStateContext();
       
return (
    <div className='navbar-container'>
     <div className='logo'><p>
        <Link href='/'>My Store Headphone
        </Link>
      </p>
      </div>
      
      <div className='cart'>
      <Link href='/login'>Login</Link>
      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className='cart-item-qty'>{totalQty}</span>
      </button>
      </div>
      {showCart && <Cart />}
    </div>
  )
}

export default Navbar