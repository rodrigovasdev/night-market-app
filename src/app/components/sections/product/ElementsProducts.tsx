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
  return (
    <div>
      <OffCanva title='FILTER' onClick={() => setIsOpen(false) } isOpen={isOpen}>
          <div className='flex flex-col h-full'>
            <div>
            <Accordion items={listItems} title='FILTER'/>
            <Accordion items={listItems} title='TYPE'/>
            <Accordion items={listItems} title='COLOR'/>
            <Accordion items={listItems} title='SIZE'/>
            <Accordion items={listItems} title='DISCOUNTS'/>
            </div>
            <div className='mx-auto w-full'>
              <Button variant='primary' content='Apply' width='w-2/3 mx-auto'></Button>

            </div>
          </div>  
      </OffCanva>

      <div className='flex justify-between py-5 px-5 md:px-40 sticky top-18 bg-white/95 z-50'>
       <h1 className="font-bold text-3xl md:text-4xl">SECTION TITLE</h1>
       <Button onClick={() => setIsOpen(true)}  variant='secondary' content='Filters' width='w-1/3 md:w-1/6' type='icon'><AdjustmentsHorizontalIcon className='w-5 h-5'/></Button>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 p-10 md:px-25 xl:px-40 justify-items-center">
            {productElements}
        </div>
    </div>
  )
}

export default ElementosProducts