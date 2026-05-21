"use client";

import ProductCard from "@/app/components/ui/card/ProductCard"
import Container from "@/app/components/ui/Container";
import CardContainer from "@/app/components/ui/CardContainer";
import Button from "@/app/components/ui/Button";
import { getLatestProducts } from "@/services/products.service";
import { Product } from '@/types/product.types';
import { useEffect, useState } from "react";
export default function FeaturedProducts() {
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
    getLatestProducts()
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
    }, []);
    
    return (
        <Container id="featured"> 
            <CardContainer>
                 <div className="flex py-5 pb-15 items-center justify-between">
                        <h1 className="font-bold text-3xl md:text-4xl ">RECIEN AÑADIDOS</h1>
                        <Button content="Mostrar más" type="link" href="/products" width="text-center w-1/2 md:w-1/4 2xl:w-1/8"  variant="secondary"></Button>
                    </div>
               
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 2xl:gap-10 xl:grid-cols-4 justify-items-center">
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
            </CardContainer>                
        </Container> 
        
    );
}