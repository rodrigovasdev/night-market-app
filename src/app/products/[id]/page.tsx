import React from 'react';
import ProductImage from '@/app/components/sections/product/ProductImage';
import ProductInfo from '@/app/components/sections/product/ProductInfo';
import RelatedProducts from '@/app/components/sections/product/RelatedProducts';
import { getProduct } from '@/services/products.service';
import ReviewForm from '@/app/components/sections/product/ReviewForm';

const Details = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const product = await getProduct(Number(id));
  const imagesUrl = product.images.map((img) => img.url);
  return (
    <div className="flex flex-col md:flex-row w-full py-10 px-5 md:px-20">
      <div className="flex flex-col items-center w-full md:w-1/2">
        <ProductImage images={imagesUrl} />
        <div className="hidden md:block">
          <ReviewForm productId={Number(id)} />
        </div>
      </div>
      <div className="flex flex-col items-center w-full md:w-1/2">
        <ProductInfo product={product} />
        <div className="md:hidden w-full">
          <ReviewForm productId={Number(id)} />
        </div>
        <RelatedProducts />
      </div>
    </div>
  );
};

export default Details;