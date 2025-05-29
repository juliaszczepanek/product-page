import { useState } from "react";
import PetsIcon from "@mui/icons-material/Pets";              
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"; 

export default function NavBar({cart}) {
    const [open, setOpen] = useState(false);
  return (
<header className="relative w-full bg-white shadow-sm">
    <div className="w-full max-w-7xl mx-auto px-4 py-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-green-700">
          <PetsIcon  sx={{fontSize: "2.5rem"}} className="mx-3"/>
          <span className="font-bold text-2xl">PetStore</span>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="relative text-green-700 hover:text-green-800 mx-12"
          aria-label="Cart"
        >
          <ShoppingCartIcon sx={{fontSize: "2rem"}}/>
          {cart.quantity > 0 && (
            <span className="absolute -top-1.5 -right-1.5 bg-green-600 text-white
                             w-5 h-5 text-[10px] rounded-full flex items-center
                             justify-center">
              {cart.quantity}
            </span>
          )}
        </button>
      </div>
      {open && (
        <div className="fixed right-12 mt w-64 bg-white rounded-xl shadow p-6 text-md z-10 space-y-6">
          <p className="text-xl font-bold text-blue-950">Shopping Cart</p>
          <p className="flex justify-between">
            <span>Items:</span>
            <span>{cart.quantity}</span>
          </p>
          <p className="flex justify-between font-semibold">
            <span>Total:</span>
            <span>{cart.total.toFixed(2)} PLN</span>
          </p>
        </div>
      )}
    </header>
  )
}
