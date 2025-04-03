"use client";

import React from 'react'
import Image from "next/image";
import Carrousel from '@/app/components/ui/Carrousel';
import { useState } from 'react';
import Button from '@/app/components/ui/Button';
import InfoDetail from '@/app/components/ui/InfoDetail';
import StarsGive from '@/app/components/ui/StarsGive';
import CardProducts from '@/app/components/ui/CardProducts';

const Details = () => {

  const imagesUrl = ["/assets/image1.jpg","/assets/image2.jpg","/assets/image3.jpg"]

  const [imageIsClicked, setImageIsClicked] = useState(imagesUrl[0])

  return (

    <div className = "flex flex-col md:flex-row w-full pt-10 px-5 md:px-20">
      <div className = "flex flex-col items-center w-full md:w-1/2">
        <Image className="rounded-xl w-full md:w-3/4 h-80 md:h-120 border border-slate-300" src={imageIsClicked} alt="Producto" width = {300} height = {300}/>
        <Carrousel imgSelected = {imageIsClicked} images={imagesUrl} onImageClick = {setImageIsClicked}></Carrousel>
      </div>
      <div className = "flex flex-col items-start w-full pt-5 md:pt-0 md:w-1/2 md:pr-20">
          <span className = "text-2xl font-bold">Yellow-shirt</span>
          <span className = "text-md pt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec varius libero. Nulla facilisi. Cras pellentesque felis ut consectetur blandit. Nam eget augue euismod, gravida nisi ac, interdum neque. Fusce nec 
            tincidunt est. Integer pretium vestibulum risus, sit amet rutrum nisi suscipit quis. Aenean sed justo sed justo facilisis pulvinar.</span>
          <span className = "text-2xl font-bold pt-5 pb-5">$25.00</span>
          <Button variant='primary' width='w-1/2 md:w-1/4' content='Add to Cart'></Button>
          <InfoDetail></InfoDetail>
          <StarsGive></StarsGive>
          <h2 className = "py-5 font-bold text-2xl">Related Products</h2>
          <div className = "flex flex-col items-start gap-5">
            <div className = "flex flex-col md:flex-row gap-5">
              <CardProducts></CardProducts>
              <CardProducts></CardProducts>
            </div>
            <div className = "flex flex-col md:flex-row gap-5">
              <CardProducts></CardProducts>
              <CardProducts></CardProducts>
            </div>
          </div>
      </div>
    </div>

  )
}

export default Details