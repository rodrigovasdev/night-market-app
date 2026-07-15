import React, { useState } from 'react'
import Image from "next/image";
import Link from 'next/link';
import { formatPriceCLP } from "@/utils/formatPrice";
import { registerProductVisit } from "@/services/products.service";

interface ProductCardProps {
  title: string;
  shortDescription: string;
  price: number;
  imageUrl: string;
  imageUrl2?: string;
  id: number;
}

function ProductCard({ title, shortDescription, price, imageUrl, id, imageUrl2 }: ProductCardProps) {
  const [hovered, setHovered] = useState(false);
  const currentImage = hovered && imageUrl2 ? imageUrl2 : imageUrl;

  const handleClick = () => {
    registerProductVisit(id);
  };

  return (
    <Link href={'/products/' + id} onClick={handleClick}>
      <div
        className="flex flex-col w-90 md:w-full 2xl:w-90 h-96 bg-white  border-gray-200  hover:cursor-pointer hover:shadow-lg hover:border-1 hover:border-gray-900 transition duration-200 ease-in-out overflow-hidden"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="relative w-full h-full bg-gray-200  overflow-hidden flex items-center justify-center">
          <Image
            className="object-cover w-full h-full transition duration-200 ease-in-out"
            src={currentImage}
            alt="Producto"
            fill
            sizes="288px"
          />
        </div>
        <div className="flex flex-col px-3 gap-3 py-2 flex-grow justify-between">
          <div className="flex flex-col gap-2">
            <span className="font-bold text-md 2xl:text-lg line-clamp-1">{title}</span>
            <span className="text-gray-500 text-sm line-clamp-1">{shortDescription}</span>
          </div>
          <div className="flex justify-between gap-1">
            <span className="text-slate-900 font-bold text-md">{formatPriceCLP(price)}</span>
            <span className="text-gray-500 text-sm">Envío gratis</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;