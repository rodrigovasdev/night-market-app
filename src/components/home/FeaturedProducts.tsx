"use client";

import ProductsShowcase from "@/components/home/ProductsShowcase";
import { getLatestProducts } from "@/services/products.service";
import { Product } from '@/types/product.types';
import { useEffect, useState } from "react";
export default function FeaturedProducts() {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
    getLatestProducts()
      .then((data) => setProducts(data))
            .catch((err) => console.error(err))
            .finally(() => setIsLoading(false));
    }, []);
    
    return (
        <ProductsShowcase
            id="featured"
            title="RECIEN AÑADIDOS"
            products={products}
            isLoading={isLoading}
        />
    );
}