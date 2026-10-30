import React from 'react'
import { Table } from "@heroui/react"
import { Button } from '@heroui/react'
import { Trash } from 'lucide-react'
import { Plus, Minus } from 'lucide-react'
const Item = ({ name, price, image, items, id, setItemsCart }) => {
  const $remove = () => (
    setItemsCart((prev) => (
      prev.filter((item) => item.id !== id)
    )
    )
  )
  const increase = () => (
    setItemsCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, items: item.items + 1 }
          : item
      )
    ))
  const decrease = () => {
    if (items < 2) {
      $remove();
    } else {
      setItemsCart((prev) =>
        prev.map((item) =>
          item.id === id
            ? { ...item, items: item.items - 1 }
            : item
        )
      );
    }
  }

  return (
    <Table.Row>
      <Table.Cell className='bg-(--bg-surface)'>
        <div className='flex gap-5 items-center'>
          <img src={image} alt={name} className='w-10' />
          <p className=' text-2xl text-(--text-primary)'>{name}</p>
        </div>
      </Table.Cell>
      <Table.Cell className=" text-2xl bg-(--bg-surface) text-(--text-primary)">{price} EGP</Table.Cell>
      <Table.Cell className="bg-(--bg-surface) text-(--text-primary)">
        <div className='flex gap-3 items-center'>
          <Button variant="tertiary"
            onClick={() => (decrease())}
            className="bg-(--bg-secondary)">
            <Minus />
          </Button>
          <p className=' text-2xl bg-(--bg-surface)'>{items}</p>
          <Button onClick={() => (increase())}>
            <Plus />
          </Button>
        </div>
      </Table.Cell>
      <Table.Cell className=" text-2xl bg-(--bg-surface) text-(--text-primary)">{price * items} EGP</Table.Cell>
      <Table.Cell className="bg-(--bg-surface)">
        <Button
          onClick={() => $remove()}
          variant="outline"
          className="border-danger text-danger"
        >
          <Trash />
          Remove
        </Button>
      </Table.Cell>
    </Table.Row>
  )
}

export default Item