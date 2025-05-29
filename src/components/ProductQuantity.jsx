import React, {useState} from 'react'

export default function ProductQuantity({quantity, setQuantity}) {


  return (
    <div className='flex gap-4 justify-center items-center'>
        <button 
            className="w-12 h-12 text-xl
            border border-green-500     
            text-green-700 rounded-full 
            transition                         
            hover:bg-green-600 hover:text-white 
            hover:border-green-600"
            onClick={() => setQuantity(prev => Math.max(1, prev - 1))}>-
        </button>
        <p className='text-2xl'>{quantity}</p>
        <button 
            className="w-12 h-12 text-xl
            border border-green-500     
            text-green-700 rounded-full 
            transition                         
            hover:bg-green-600 hover:text-white 
            hover:border-green-600"
            onClick={() => setQuantity(prev => prev + 1 )}>+
        </button>
      
    </div>
  )
}
