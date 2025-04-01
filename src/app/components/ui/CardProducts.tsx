import React from 'react'
import Button from './Button'
import Image from "next/image";

function CardProducts() {
  return (
        <div className="flex flex-col space-y-2">
                  <Image
                    className="rounded-xl"
                    src="/assets/ecommerce.jpg"
                    alt="Producto"
                    width = {500}
                    height = {300}
                  />
            <span className="font-semibold">Modern Chair</span>
            <span className="text-gray-500">Ergonomic and durable.</span>
            <span className="text-gray-500">$199</span>
            <div className="flex flex-col lg:flex-row w-full gap-2">
                <Button variant="primary" content="Add To Cart" width="w-full lg:w-1/2"/>
                <Button variant="secondary" content="Buy Now" width="w-full lg:w-1/2" />
            </div>
        </div>
  )
}

export default CardProducts