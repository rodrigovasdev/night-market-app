import React from 'react';
import ProductImage from '@/app/components/sections/product/ProductImage';
import ProductInfo from '@/app/components/sections/product/ProductInfo';
import RelatedProducts from '@/app/components/sections/product/RelatedProducts';
import { getProduct } from '@/services/products.service';

const Details = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const product = await getProduct(Number(id));
  const imagesUrl = product.images.map((img) => img.url);
  console.log(product,'este es detalle !!');
  return (
    <div className="flex flex-col md:flex-row w-full pt-10 px-5 md:px-20">
      <div className="flex flex-col items-center w-full md:w-1/2">
        <ProductImage images={imagesUrl} />
      </div>
      <div className="flex flex-col items-start w-full pt-5 md:pt-0 md:w-1/2 md:pr-20">
        <ProductInfo
          title={product.name}
          shortDescription={product.shortDescription}
          longDescription={product.longDescription}
          price={product.price}
          specifications={product.specifications}
        />
        <RelatedProducts />
      </div>
    </div>
  );
};

export default Details;