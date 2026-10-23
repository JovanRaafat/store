import React from 'react'
import CartBtns from './CartBtns';
import { ShoppingCart } from "lucide-react";

const HeederCart = ({ setItemsCart }) => {
  return (
    <div className='flex justify-between px-2 md:px-10'>
      <div className='flex gap-2 text-2xl justify-center items-center'>
        <ShoppingCart />
        <h2>Your Cart</h2>
      </div>
      <CartBtns setItemsCart={setItemsCart} />
    </div>
  )
}

export default HeederCart