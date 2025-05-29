"use client";

import React, {useState} from 'react'
import CardProducts from "@/app/components/ui/card/ProductCard";
import OffCanva from "@/app/components/ui/OffCanva";
import Button from "@/app/components/ui/Button";
import Accordion from '../../ui/Accordion';
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';
import { JSX } from "react";



function ElementosProducts() {

  const [isOpen, setIsOpen] = useState(false);
    const productElements: JSX.Element[] = [];

    for (let i = 0; i < 12; i++) {
        productElements.push(<CardProducts key={i} />);
      }
const listItems = ['Mejor precio', 'Mejor calidad', 'Más vendidos', 'Más nuevos'];
const listItems2 = ['Electronics', 'Computers', 'Gaming', 'Streaming'];
const listItems3 = ['Black', 'White', 'Red', 'Blue'];
const listItems4 = ['S', 'M', 'L', 'XL'];
const listItems5 = ['10% off', '20% off', '30% off', '40% off'];

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

      <section id='products' className='px-4 md:px-40 pb-10'>
        <div className='flex justify-between py-5 sticky top-18 bg-white/95 z-50'>
          <h1 className="font-bold text-3xl md:text-4xl">SECTION TITLE</h1>
          <Button onClick={() => setIsOpen(true)}  variant='secondary' content='Filters' width='w-1/3 md:w-1/6' type='icon'><AdjustmentsHorizontalIcon className='w-5 h-5'/></Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 justify-items-center">
              {productElements}
        </div>
      </section>
    </>


  );
}

export default ElementosProducts