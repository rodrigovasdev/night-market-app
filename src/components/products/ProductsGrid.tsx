"use client";

import React, { useState, useEffect } from 'react'
import ProductCard from "@/components/ui/card/ProductCard";
import OffCanva from "@/components/ui/OffCanva";
import Button from "@/components/ui/Button";
import Accordion from '@/components/ui/Accordion';
import { getFilteredProducts } from "@/services/products.service";
import { Product } from '@/types/product.types';
import { getCategories, Category } from '@/services/category.service';
import { Subcategory } from '@/types/category.types';
import DropdownSelector from '@/components/ui/DropdownSelector';



function ProductsGrid() {

  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoadingProducts, setIsLoadingProducts] = useState(true);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<Subcategory | null>(null);
const listItems = ['Mejor precio', 'Mejor calidad', 'Más vendidos', 'Más nuevos'];
const listItems2 = ['Electronics', 'Computers', 'Gaming', 'Streaming'];
const listItems3 = ['Black', 'White', 'Red', 'Blue'];
const listItems4 = ['S', 'M', 'L', 'XL'];
const listItems5 = ['10% off', '20% off', '30% off', '40% off'];
  useEffect(() => {
    setIsLoadingProducts(true);
    getFilteredProducts({
      categoryId: selectedCategory?.id,
      subcategoryId: selectedSubcategory?.id,
    })
      .then((data) => setProducts(data))
      .catch((err) => {
        console.error(err);
        setProducts([]);
      })
      .finally(() => setIsLoadingProducts(false));
  }, [selectedCategory, selectedSubcategory]);

  useEffect(() => {
    getCategories().then((data) => {
      setCategories(data);
    });
  }, []);

  const handleCategorySelect = (item: Category) => {
    setSelectedCategory(item);
    setSelectedSubcategory(null);
  };

  return (
    <>
      <OffCanva title='FILTER' onClick={() => setIsOpen(false) } isOpen={isOpen}>
        <div className='flex flex-col h-full gap-3'>
          <div>
            <Accordion items={listItems} title='FILTER'/>
            <Accordion items={listItems2} title='CATEGORIES'/>
            <Accordion items={listItems3} title='COLOR'/>
            <Accordion items={listItems4} title='SIZE'/>
            <Accordion items={listItems5} title='DISCOUNTS'/>
          </div>
          <div className='w-full flex justify-center '>
            <Button variant='primary' content='Apply' width='w-2/3 mx-auto'></Button>

          </div>
        </div>  
      </OffCanva>

      <section id='products' className='px-4 md:px-40 pb-10 min-h-screen'>
        <div className='flex justify-between py-5 sticky top-18 bg-white/95 z-50'>
          <div className="flex gap-3">
            <DropdownSelector<Category>
              items={categories}
              selected={selectedCategory}
              onSelect={handleCategorySelect}
              onClear={() => { setSelectedCategory(null); setSelectedSubcategory(null); }}
              textSize="text-3xl md:text-4xl"
              placeholder="Todos"
              allOptionLabel="Todos"
            />
            <div className='pt-2'>
              {selectedCategory && (
                <DropdownSelector<Subcategory>
                  items={selectedCategory.subcategories}
                  selected={selectedSubcategory}
                  onSelect={setSelectedSubcategory}
                  onClear={() => setSelectedSubcategory(null)}
                  textSize="text-xl"
                  placeholder="Todos"
                  allOptionLabel="Todos"
                />
              )}
            </div>
          </div>
          {/* <Button onClick={() => setIsOpen(true)}  variant='secondary' content='Filters' width='w-1/3 md:w-1/6' type='icon'><AdjustmentsHorizontalIcon className='w-5 h-5'/></Button> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 justify-items-center">
          {isLoadingProducts
            ? Array.from({ length: 8 }).map((_, index) => (
                <div
                  key={`skeleton-${index}`}
                  className="flex flex-col w-full 2xl:w-90 h-96 bg-white border border-gray-200 rounded-lg overflow-hidden animate-pulse"
                  aria-hidden="true"
                >
                  <div className="w-full h-48 bg-gray-200" />
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
      </section>
    </>


  );
}

export default ProductsGrid