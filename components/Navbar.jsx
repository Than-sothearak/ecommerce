import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className='navbar-conatiner'>
      <p className='logo'>
        <Link href='/'>My Store Headphone
        </Link>
      </p>
      <button type='button' className='cart-icon' onClick={''}>
        <AiOutlineShopping />
        <span className='cart-item-qty'>5</span>
      </button>
    </div>
  )
}

export default Navbar