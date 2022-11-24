import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { AiOutlineMinus, AiFillStar, AiOutlineStar, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import toast from 'react-hot-toast';
import { useStateContext } from '../context/StateContext';
import { urlFor } from '../lib/client';

const Cart = () => {
const cartRef = useRef();
const { totalPrice,  totalQty, cartItems, setShowCart, toggleCartItemQuanitity, onRemove } = useStateContext();

  return (
    <div className='cart-wrapper' ref={cartRef}>
      <div className='cart-container'>
        <button type='button' className='cart-heading' onClick={() => setShowCart(false)}>
          <AiOutlineLeft />
          <span className='heading'>Your Cart</span>
          <span className='cart-num-items'>({totalQty}) items</span>
        </button>
        {cartItems.length < 1 && (
          <div className='empty-cart'>
            <AiOutlineShopping size={150} />
            <h3>Your Shopping bag is empty</h3>
            <Link href='/'>
              <button type='button' className='btn' onClick={() => setShowCart(false)}>
                Continue Shopping
              </button>
            </Link>
          </div>
        )}

        <div className='product-container'>
          {cartItems.length >= 1 && cartItems.map((product) => (
             <div className='product' key={product._id}>
              <img src={urlFor(product?.image[0])}
              className='cart-product-image'/>
              <div className='item-desc'>
                <div className='flex top'>
                <h5>{product.brand}</h5>
                <h4>${product.price.toLocaleString('en', { maximumFractionDigits: 0 })}</h4>
                </div>
                <div className='flex bottom'>
                <div>
                <p className='quantity-desc'>
                   <span className='minus' onClick={() => toggleCartItemQuanitity(product._id, 'dec')}><AiOutlineMinus /></span>
                   <span className='num'>{product.quantity}</span>
                   <span className='plus' onClick={() => toggleCartItemQuanitity(product._id, 'inc')}><AiOutlinePlus /></span>
                   </p>
                </div>
                <button type='button' className='remove-item' onClick={() => onRemove(product)}>
                  <TiDeleteOutline />
                </button>
              </div>
              </div>
             </div>
          ))}
        </div>
         {cartItems.length >= 1 && (
          <div className='cart-buttom'>
            <div className='total'>
              <h3>Total</h3>
              <h3>${totalPrice.toLocaleString('en', { maximumFractionDigits: 0 })}</h3>
            </div>
            <div className='btn-container'>
              <button type='button' className='btn' onClick=''>
                Playment
              </button>
            </div>
          </div>
         )}
      </div>
    </div>
  )
}

export default Cart