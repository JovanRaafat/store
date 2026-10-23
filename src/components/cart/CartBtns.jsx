import { Button } from '@heroui/react'
import { Trash, RotateCcw } from 'lucide-react'
import React from 'react'
import initialItemsCart from "../../itemsCart";

const CartBtns = ({ setItemsCart }) => {

  const clearCart = () => setItemsCart(() => ([]))
  const reset = () => setItemsCart(() => (initialItemsCart))

  return (
    <div className='flex flex-wrap gap-2 p-2 justify-end'>
      <Button
        variant="outline"
        className="border-danger text-danger"
        onClick={() => clearCart()}
      >
        <Trash />
        Clear Cart
      </Button>
      <Button
        onClick={() => reset()}
        variant="outline"
        className="text-(--text-secondary) bg-(--bg-secondary) hover:bg-(--bg-primary)"
      >
        <RotateCcw />
        Reset
      </Button>
    </div>
  )
}

export default CartBtns