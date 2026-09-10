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
    <Link href={'/products/' + id} onClick={handleClick} className="block w-full min-w-0 max-w-90 md:max-w-none">
      <div
        className="flex h-96 w-full min-w-0 flex-col overflow-hidden border border-transparent bg-white hover:cursor-pointer hover:shadow-lg hover:border-gray-900 transition duration-200 ease-in-out"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="relative h-64 w-full shrink-0 overflow-hidden bg-gray-200">
          <Image
            className="object-cover w-full h-full transition duration-200 ease-in-out"
            src={currentImage}
            alt="Producto"
            fill
            sizes="288px"
          />
        </div>
        <div className="flex min-h-0 min-w-0 flex-1 flex-col justify-between gap-3 overflow-hidden px-3 py-2">
          <div className="flex min-w-0 flex-col gap-2">
            <span className="h-7 truncate text-md font-bold leading-7 2xl:text-lg">{title}</span>
            <span className="h-5 truncate text-sm leading-5 text-gray-500">{shortDescription}</span>
          </div>
          <div className="flex min-w-0 items-center justify-between gap-1">
            <span className="min-w-0 truncate text-slate-900 font-bold text-md">{formatPriceCLP(price)}</span>
            <span className="shrink-0 whitespace-nowrap text-gray-500 text-sm">Envío gratis</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;