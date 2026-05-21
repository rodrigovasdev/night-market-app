import React from 'react'
import Image from "next/image";
import Link from 'next/link';

interface ProductCardProps {
  title: string;
  shortDescription: string;
  price: string;
  imageUrl: string;
  id: number;
}

function ProductCard({ title, shortDescription, price, imageUrl, id }: ProductCardProps) {
  return (
    <Link href={'/products/' + id}>
      <div className="flex flex-col w-90 h-96 bg-white border-1 border-gray-200 rounded-lg hover:cursor-pointer hover:shadow-lg hover:border-1 hover:border-gray-900 transition duration-200 ease-in-out overflow-hidden">
        <div className="relative w-full h-48 bg-gray-200 rounded-t-lg overflow-hidden flex items-center justify-center">
          <Image
            className="object-cover w-full h-full"
            src={imageUrl}
            alt="Producto"
            fill
            sizes="288px"
          />
        </div>
        <div className="flex flex-col px-3 gap-3 py-4 flex-grow justify-between">
          <div className="flex flex-col gap-2">
            <span className="font-bold text-lg line-clamp-2">{title}</span>
            <span className="text-gray-500 text-sm line-clamp-2">{shortDescription}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-slate-900 font-bold text-lg">{price}</span>
            <span className="text-gray-500 text-sm">Free shipping</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;