"use client";
import ProductCard from '@/app/components/ui/card/ProductCard';
import { getLatestProducts } from "@/services/products.service";
import { Product } from '@/types/product.types';
import { useEffect, useState } from "react";

export default function RelatedProducts() {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
    getLatestProducts()
      .then((data) => setProducts(data))
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
    }, []);
    
    return (
  <div>
    <h2 className="py-5 font-bold text-2xl">Related Products</h2>
    <div className="flex flex-col items-start gap-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {isLoading
          ? Array.from({ length: 4 }).map((_, index) => (
              <div
                key={`related-skeleton-${index}`}
                className="flex flex-col w-40 md:w-56 h-56 md:h-72 bg-white border border-gray-200 rounded-lg overflow-hidden animate-pulse"
                aria-hidden="true"
              >
                <div className="w-full h-28 md:h-36 bg-gray-200" />
                <div className="flex flex-col gap-2 p-3">
                  <div className="h-5 w-4/5 bg-gray-200 rounded" />
                  <div className="h-4 w-full bg-gray-100 rounded" />
                  <div className="h-4 w-2/3 bg-gray-100 rounded" />
                </div>
              </div>
            ))
          : products.map((product) => (
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

