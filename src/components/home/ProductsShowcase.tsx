"use client";

import ProductCard from "@/components/ui/card/ProductCard";
import ProductCardSkeleton from "@/components/ui/card/ProductCardSkeleton";
import Button from "@/components/ui/Button";
import { Product } from "@/types/product.types";

interface ProductsShowcaseProps {
    id?: string;
    title: string;
    products: Product[];
    isLoading: boolean;
    actionLabel?: string;
    actionHref?: string;
}

export default function ProductsShowcase({
    id,
    title,
    products,
    isLoading,
    actionLabel = "Mostrar más",
    actionHref = "/products",
}: ProductsShowcaseProps) {
    const visibleProducts = products.slice(0, 4);

    return (
        <section id={id} className="w-full bg-white px-4 py-20 md:px-40">
            <div className="flex py-5 pb-15 items-center justify-between">
                <h1 className="font-bold text-3xl md:text-4xl ">{title}</h1>
                <Button
                    content={actionLabel}
                    type="link"
                    href={actionHref}
                    width="text-center w-1/2 md:w-1/4 2xl:w-1/8"
                    variant="secondary"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 justify-items-center">
                {isLoading
                    ? Array.from({ length: 4 }).map((_, index) => (
                          <ProductCardSkeleton key={index} />
                      ))
                      : visibleProducts.map((product) => (
                          <ProductCard
                              key={product.id}
                              title={product.name}
                              shortDescription={product.shortDescription}
                              price={product.price}
                              imageUrl={product.images[0]?.url || "/assets/ecommerce.jpg"}
                              imageUrl2={product.images[1]?.url || "/assets/ecommerce.jpg"}
                              id={product.id}
                          />
                      ))}
            </div>
        </section>
    );
}
