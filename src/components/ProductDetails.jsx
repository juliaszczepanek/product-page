import React from 'react'

export default function ProductDetails({ product }) {
    if (!product) return null;    
  return (
   <section className='space-y-10 md:space-y-12 max-[620px]:space-y-8'>
    <h1 className='text-5xl font-extrabold text-blue-950 max-[620px]:text-4xl'>{product.name}</h1>
    <p className='text-xl text-gray-700'>{product.description}</p>
    <p className='text-3xl font-semibold text-blue-900'>{product.price.toFixed(2)} PLN</p>
    </section>
  )
}
