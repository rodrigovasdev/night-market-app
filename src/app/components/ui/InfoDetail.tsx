"use client";

import React from 'react'
import { useState } from 'react'
import ReviewCarousel from '@/app/components/ui/ReviewCarousel';

interface InfoDetailProps {
    specifications: string;
    productId: number;
}

function InfoDetail({ specifications, productId }: InfoDetailProps) {

    const [isOptionSelected, setIsOptionSelected] = useState(0)

    const options = ["Descripción", "Reseñas"]

  return (
    <div className = "w-full h-100 justify-around pt-10">
        <div className = "flex">
        {options.map((option,index) => 
        <span key={index} className = {`cursor-pointer flex-1 text-center border-b-4 p-4 ${isOptionSelected === index ? "font-bold border-black" : "text-gray-400 border-transparent"}`} onClick = {()=>setIsOptionSelected(index)}>
            {option}
        </span>
        )}
        </div>
        <div className = "">
            {isOptionSelected === 0 && (
                <div className="text-md pt-5 flex flex-col gap-1">
                    {specifications.split('.').filter(s => s.trim()).map((line, i) => (
                        <span key={i}>{line.trim()}.</span>
                    ))}
                </div>
            )}
                                                {isOptionSelected === 1 && <ReviewCarousel productId={productId} />}
        </div>
    </div>
  )
}

export default InfoDetail