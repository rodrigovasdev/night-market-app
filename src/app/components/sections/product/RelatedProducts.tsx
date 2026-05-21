"use client";
import ProductCard from '@/app/components/ui/card/ProductCard';
import { getLatestProducts } from "@/services/products.service";
import { Product } from '@/types/product.types';
import { useEffect, useState } from "react";

export default function RelatedProducts() {
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
    getLatestProducts()
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
    }, []);
    
    return (
  <div>
    <h2 className="py-5 font-bold text-2xl">Related Products</h2>
    <div className="flex flex-col items-start gap-5">
      <div className="grid grid-cols-2 gap-3">
        {products.map((product) => (
            <ProductCard
            key={product.id}
            title={product.name}
            shortDescription={product.shortDescription}
            price={product.price}
            imageUrl={product.images[0]?.url || '/assets/ecommerce.jpg'}
            id={product.id}
            />
        ))}
      </div>
    </div>
  </div>
        
    );
}

