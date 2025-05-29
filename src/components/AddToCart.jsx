import React from 'react'

export default function AddToCart({ onAdd }) {
  return (
<button onClick={onAdd}
   className="text-xl
   w-full
   border border-green-500     
   text-green-700                     
    py-3 rounded-full 
   transition                         
   hover:bg-green-600 hover:text-white 
   hover:border-green-600             
 ">Add to cart</button>
  )
}
