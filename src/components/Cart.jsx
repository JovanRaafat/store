import React from 'react'
import HeederCart from './cart/HeederCart';
import Items from './cart/Items';
import { Button } from '@heroui/react';


const Cart = ({ itemsCart, setItemsCart }) => {


  let total = itemsCart.reduce((sum, item) => {
    return sum + item.price * item.items;
  }, 0);

  return (
    <div className='bg-(--bg-surface)'>
      <HeederCart setItemsCart={setItemsCart} />
      {itemsCart.length ?
        (<Items itemsCart={itemsCart} setItemsCart={setItemsCart} />)
        :
        <p className='text-center text-6xl py-14 text-danger'>Your cart is empty</p>}

      <Button className='m-3 text-3xl p-5'>
        Grand Total {total}
      </Button>
    </div>
  )
}

export default Cart