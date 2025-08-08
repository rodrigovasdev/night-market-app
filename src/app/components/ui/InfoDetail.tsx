"use client";

import React from 'react'
import { useState } from 'react'
import Image from "next/image";
import { Star } from "lucide-react";

function InfoDetail() {

    const [isOptionSelected, setIsOptionSelected] = useState(0)

    const options = ["Description","Additional information","Reviews"]

  return (
    <div className = "w-full justify-around pt-10">
        <div className = "flex">
        {options.map((option,index) => 
        <span key={index} className = {`cursor-pointer flex-1 text-center border-b-4 p-4 ${isOptionSelected === index ? "font-bold border-black" : "text-gray-400 border-transparent"}`} onClick = {()=>setIsOptionSelected(index)}>
            {option}
        </span>
        )}
        </div>
        <div className = "h-40">
            {isOptionSelected === 0 && <p className = "text-md pt-5 overflow-hidden max-h-40"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Proin nec varius libero. Nulla facilisi. Cras pellentesque felis ut consectetur blandit. Nam eget augue euismod, 
                gravida nisi ac, 
                interdum neque. 
                Fusce nec tincidunt est. Integer p
                retium vestibulum risus, sit amet rutrum nisi suscipit quis. Aenean sed justo sed justo facilisis pulvinar.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Proin nec varius libero. Nulla facilisi. Cras pellentesque felis ut consectetur blandit. Nam eget augue euismod, 
                gravida nisi ac, 
                interdum neque. 
                Fusce nec tincidunt est. Integer p
                retium vestibulum risus, sit amet rutrum nisi suscipit quis. Aenean sed justo sed justo facilisis pulvinar.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Proin nec varius libero. Nulla facilisi. Cras pellentesque felis ut consectetur blandit. Nam eget augue euismod, 
                gravida nisi ac, 
                interdum neque. 
                Fusce nec tincidunt est. Integer p
                retium vestibulum risus, sit amet rutrum nisi suscipit quis. Aenean sed justo sed justo facilisis pulvinar.</p>}
            {isOptionSelected === 1 && <p className = "text-md pt-5 overflow-hidden max-h-40">Esto es informacion adicional de prueba</p>}
            {isOptionSelected === 2 && 
                <div className = "flex flex-col pt-10 overflow-hidden max-h-40">
                    <div className = "flex flex-row">
                        <div className = "flex flex-col text-center">
                            {/* <Image className="rounded-full h-25 w-25" src="/assets/gorda.jpg"alt="Producto" width = {300} height = {300}/> */}
                            <span className = "font-semibold">Josefa</span>
                        </div>
                        <div className = "flex flex-col pl-5">
                            <div className="flex text-yellow-400">
                                {[...Array(5)].map((_, index) => (
                                    <Star key={index} fill="currentColor" stroke="none" className="w-6 h-6"/>
                                ))}
                            </div>
                            <span className = "font-bold text-sm pt-3">Muy buenas poleras</span>
                        </div>
                    </div>
                </div>
            }
        </div>
    </div>
  )
}

export default InfoDetail