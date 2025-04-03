import React from 'react'
import Button from './Button'
import Image from "next/image";

function CardProducts() {
  return (
        <div className="flex flex-col space-y-2 border-1 border-gray-200 rounded-lg">
                  <Image
                    className="rounded-lg"
                    src="/assets/ecommerce.jpg"
                    alt="Producto"
                    width = {500}
                    height = {300}
                  />
                  <div className = "flex flex-col px-2 gap-3">
                    <span className="font-semibold">Modern Chair</span>
                    <span className="text-gray-500">Ergonomic and durable.</span>
                    <span className="text-slate-900 font-bold">$199</span>
                  </div>
            <div className="flex flex-col lg:flex-row w-full gap-2 pb-3 px-3">
              <Button variant="primary" content="Add To Cart" width="w-full lg:w-1/2"/>
              <Button variant="secondary" content="View Details" width="w-full lg:w-1/2" />
            </div>
        </div>
  )
}

export default CardProducts