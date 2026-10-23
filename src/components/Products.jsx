import React from 'react'
import products from './products/products';
import Product from './products/product';
const Products = ({ itemsCart, setItemsCart }) => {
  return (

    <div className='grid lg:grid-cols-5 gap-10 grid-cols-2 p-5 '>

      {products.map((product) =>
      (<Product
        key={product.id}
        name={product.name}
        image={product.image}
        price={product.price}
        id={product.id}
        setItemsCart={setItemsCart}
        itemsCart={itemsCart} />)
      )}

    </div>
  )
}

export default Products