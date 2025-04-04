"use client";

import React, { useState } from 'react';
import ProductImage from '@/app/components/sections/ProductImage';
import ProductInfo from '@/app/components/sections/ProductInfo';
import RelatedProducts from '@/app/components/sections/RelatedProducts';

const Details = () => {
  const imagesUrl = ["/assets/image1.jpg","/assets/image2.jpg","/assets/image3.jpg"];
  const [imageIsClicked, setImageIsClicked] = useState(imagesUrl[0]);

  return (
    <div className="flex flex-col md:flex-row w-full pt-10 px-5 md:px-20">
      <div className="flex flex-col items-center w-full md:w-1/2">
        <ProductImage imageSelected={imageIsClicked} images={imagesUrl} setImage={setImageIsClicked} />
      </div>
      <div className="flex flex-col items-start w-full pt-5 md:pt-0 md:w-1/2 md:pr-20">
        <ProductInfo />
        <RelatedProducts />
      </div>
    </div>
  );
};

export default Details;