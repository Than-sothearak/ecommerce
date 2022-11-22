import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className='navbar-container'>
     <div className='logo'><p>
        <Link href='/'>My Store Headphone
        </Link>
      </p>
      </div>
      <div className='cart'> 
      <button type='button' className='cart-icon' onClick={''}>
        <AiOutlineShopping />
        <span className='cart-item-qty'>5</span>
      </button>
      </div>
      
    </div>
  )
}

export default Navbar