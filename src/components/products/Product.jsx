import React from 'react'
import { ShoppingCartPlus } from 'lucide-react';
import { Button } from '@heroui/react';
const product = ({ name, price, image, id, setItemsCart, itemsCart }) => {
  const $add = () => (
    itemsCart.some((item) => item.id === id)
      ?
      setItemsCart((prev) =>
        prev.map((item) =>
          item.id === id
            ? { ...item, items: item.items + 1 }
            : item
        )
      )
      :
      setItemsCart((prev) => [
        ...prev,
        {
          id,
          name,
          price,
          image,
          items: 1,
        },
      ])
  )
  return (
    <div className=' flex  flex-col items-center justify-between gap-6 bg-(--bg-surface) rounded-3xl p-3 w-full'>
      <div>
        <img className='w-32 h-32' src={image} alt={name} />
      </div>
      <div className='flex flex-col items-center justify-center gap-5'>
        <h3 className='text-2xl md:text-4xl'>{name}</h3>
        <p className='text-2xl text-(--primary)'>{price} EGP</p>
        <Button onClick={() => $add()}>
          Add to Cart
          <ShoppingCartPlus />
        </Button>
      </div>
    </div>
  )
}

export default product