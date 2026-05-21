"use client";

import { useState } from "react";
import Image from "next/image";
import Carrousel from '@/app/components/ui/Carrousel';

interface ProductImageProps {
  images: string[];
}

const ProductImage = ({ images }: ProductImageProps) => {
  const [imageSelected, setImage] = useState(images[0]);

  return (
  <div className="flex flex-col items-center w-full">
    <Image className="rounded-xl w-full md:w-3/4 h-80 md:h-120 border border-slate-300" src={imageSelected} alt="Producto" width={300} height={300} />
    <Carrousel imgSelected={imageSelected} images={images} onImageClick={setImage} />
  </div>
  );
};

export default ProductImage;
