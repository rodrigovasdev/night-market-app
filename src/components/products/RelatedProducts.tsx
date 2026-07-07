"use client";
import ProductCard from '@/components/ui/card/ProductCard';
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
    <h2 className="py-5 font-bold text-2xl">PRODUCTOS SIMILARES</h2>
    <div className="flex flex-col items-start gap-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {isLoading
          ? Array.from({ length: 4 }).map((_, index) => (
              <div
                                  key={`showcase-skeleton-${index}`}
                                  className="flex flex-col w-full 2xl:w-90 h-96 bg-white border-gray-200 overflow-hidden animate-pulse"
                                  aria-hidden="true"
                              >
                                  <div className="w-full h-full py-36 bg-gray-200" />
                                  <div className="flex flex-col px-3 gap-3 py-4 flex-grow justify-between">
                                      <div className="flex flex-col gap-2">
                                          <div className="h-6 w-3/4 bg-gray-200 rounded" />
                                          <div className="h-4 w-full bg-gray-100 rounded" />
                                          <div className="h-4 w-5/6 bg-gray-100 rounded" />
                                      </div>
                                      <div className="flex flex-col gap-2">
                                          <div className="h-6 w-1/3 bg-gray-200 rounded" />
                                          <div className="h-4 w-1/2 bg-gray-100 rounded" />
                                      </div>
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

