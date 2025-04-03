import React from 'react'
import Image from "next/image";

interface carrouselProps{
    images:string[]
    imgSelected:string
    onImageClick: (image:string) => void;
}

const Carrousel = (props:carrouselProps) => {
    const {images, onImageClick, imgSelected} = props
  return (
    <div className = "flex justify-center pt-5 gap-5">
        {images.map((image,index) => (
            <button key={index} onClick={() => onImageClick(image)}>
            <Image className={`rounded-xl w-30 h-25 border ${imgSelected === image ? 'border-gray-900' : 'border-gray-400'} `} src={image} alt="Foto test" width = {300} height = {300} />
            </button>
        ))}
    </div>
  )
}

export default Carrousel