'use client';
import { useState } from "react";
import Image from "next/image";
import Button from "@/app/components/ui/Button"

export default function Start() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
  ];
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  return (
    <>
      <div id="gallery" className="relative w-full h-full md:h-screen" data-carousel="slide">
    
        <div className="relative h-56 overflow-hidden rounded-lg md:h-14/15">
          
            <div className="duration-200 ease-linear" data-carousel-item>
              <Image
              src={images[currentIndex]}
              alt="a"
              width={2000}
              height={1000}
              className="duration-700 ease-linear"
              ></Image>
              <div className="flex justify-around px-5 w-4/5 md:w-1/5 gap-6 z-10 absolute top-4/5 md:top-2/3 start-1/2 translate-x-[-50%] translate-y-[-50%]">
                  <Button content="Buy now" width="w-2/5" paddingY="py-3" heigth="h-full" variant="primary"></Button>
                  <Button type="link" href="#featured" content="Show more" width="w-3/5 2xl:w-2/5 text-center " paddingY="py-3"  heigth="h-full" variant="secondary"></Button>
              </div>
            </div>
            
        </div>
    
        <button type="button" onClick={handlePrev} className="absolute top-0 start-0 z-10 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                </svg>
                <span className="sr-only">Previous</span>
            </span>
        </button>
        <button type="button" onClick={handleNext} className="absolute top-0 end-0 z-10 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                </svg>
                <span className="sr-only">Next</span>
            </span>
        </button>

      </div>
    </>



  );
}