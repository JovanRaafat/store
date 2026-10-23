import React from 'react'
import { Table } from "@heroui/react"
import Item from './Item';
function Items({ itemsCart, setItemsCart }) {
  return (
    <Table className='bg-(--bg-secondary)'>
      <Table.ScrollContainer className='bg-(--bg-secondary)' >
        <Table.Content aria-label="Team members" className="min-w-150 bg-(--bg-secondary)">
          <Table.Header className='bg-(--bg-secondary)'>
            <Table.Column isRowHeader>Product</Table.Column>
            <Table.Column>Price</Table.Column>
            <Table.Column>Items</Table.Column>
            <Table.Column>Total</Table.Column>
            <Table.Column></Table.Column>
          </Table.Header>
          <Table.Body>
            {itemsCart.map((item) => (<Item key={item.id} id={item.id} name={item.name} image={item.image} items={item.items} price={item.price} setItemsCart={setItemsCart} />))}
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>

  );
}
export default Items