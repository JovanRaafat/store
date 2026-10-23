import Products from "./components/Products";
import Navbar from "./components/Navbar";
import Cart from "./components/cart";
import initialItemsCart from "./itemsCart";
import { useState } from "react";
function App() {
  const [itemsCart, setItemsCart] = useState(initialItemsCart);

  return (
    <div className="text-(--text-primary) bg-(--bg-primary) min-h-screen">
      <Navbar itemsCart={itemsCart} />
      <Products itemsCart={itemsCart} setItemsCart={setItemsCart} />
      <Cart itemsCart={itemsCart} setItemsCart={setItemsCart} />
    </div>
  );
}

export default App;