import { useEffect, useState } from 'react';
import ProductDetails from './components/ProductDetails';
import ImageCarousel from './components/ImageCarousel';
import AddToCart from './components/AddToCart';
import NavBar from './components/NavBar';
import ProductQuantity from './components/ProductQuantity';
import './App.css'
import ColorSelection from './components/ColorSelection';

function App() {
  const [product, setProduct] = useState(null)
  const [selectedColor, setSelectedColor] = useState("");
  const [cart, setCart]  = useState({ quantity: 0, total: 0 });
  const [quantity, setQuantity] = useState(1)


useEffect(() => {
  fetch("/product.json")
  .then((response) => response.json())
  .then((data) => {
    setProduct(data)
    setSelectedColor(data.colors[0].id)
  })
}, [])

const addToCart = (quantity) => {
  const newQty   = cart.quantity + quantity;
  const newTotal = newQty * product.price;
  setCart({ quantity: newQty, total: newTotal });
};


if (!product) return <p className="p-4">Loading…</p>;

  return (
    <>
    <NavBar cart={cart} />
    <main className="flex flex-wrap lg:items-center gap-10 py-20 justify-center md:px-48 max-lg:px-16 px-4">
    <ImageCarousel images={product.images} />
    <section className="w-full max-w-2xl space-y-10 mx-auto">
              <ProductDetails product={product}/>
        <ColorSelection
          colors={product.colors}
          value={selectedColor}
          onChange={setSelectedColor}
        />
        <ProductQuantity quantity={quantity} setQuantity={setQuantity} />
        <AddToCart onAdd={() => addToCart(quantity)} />
      </section>
     
      
    </main>
    </>
  )
}

export default App