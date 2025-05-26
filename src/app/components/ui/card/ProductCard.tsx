import React from 'react'
import Image from "next/image";
import Link from 'next/link';

function ProductCard() {
  return (
    <Link href={'/products/details'}>
      <div className="flex flex-col space-y-2 border-1 bg-white border-gray-200 rounded-lg hover:cursor-pointer hover:shadow-lg hover:border-1 hover:border-gray-900 transition duration-200 ease-in-out">
                  <Image
                    className="rounded-t-lg rounded-l-lg rounded-r-lg rounded-b-none"
                    src="/assets/ecommerce.jpg"
                    alt="Producto"
                    width = {500}
                    height = {300}
                  />
                  <div className = "flex flex-col px-2 gap-3 py-5">
                    <span className="font-semibold">Modern Chair</span>
                    <span className="text-gray-500">Ergonomic and durable.</span>
                    <span className="text-slate-900 font-bold">$199</span>
                    <span className="text-gray-500">Free shipping</span>
                  </div>
        </div>
    </Link>
        
  )
}

export default ProductCard;