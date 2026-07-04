"use client";

import ProductsShowcase from "@/components/home/ProductsShowcase";
import { getTopSellingProducts, TopSellingProduct } from "@/services/products.service";
import { useEffect, useState } from "react";

export default function TopSellingProducts() {
    const [products, setProducts] = useState<TopSellingProduct[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getTopSellingProducts()
            .then((data) => setProducts(data.slice(0, 4)))
            .catch((err) => console.error(err))
            .finally(() => setIsLoading(false));
    }, []);

    return (
        <ProductsShowcase
            id="top-selling"
            title="MAS VENDIDOS"
            products={products}
            isLoading={isLoading}
        />
    );
}
