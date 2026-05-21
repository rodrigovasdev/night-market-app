'use client';
import Image from "next/image";
import Button from "@/app/components/ui/Button"

export default function Start() {
  const image = "https://res.cloudinary.com/di7lw3pla/image/upload/q_auto/f_auto/v1779331926/banner2_ibyhxi.png";

  return (
    <>
      <div id="gallery" className="relative w-full h-full md:h-screen" data-carousel="slide">
    
        <div className="relative h-56 overflow-hidden rounded-lg md:h-14/15">
          
            <div className="duration-200 ease-linear" data-carousel-item>
              <Image
              src={image}
              alt="a"
              width={2000}
              height={1000}
              className="duration-700 ease-linear"
              ></Image>
              <div className="flex justify-around px-5 w-4/5 md:w-1/5 gap-6 z-10 absolute bottom-40 right-40">
                  <Button type="link" href="/products" content="Comprar ahora" width="w-2/5 text-center" paddingY="py-3" heigth="h-full" variant="primary"></Button>
                  <Button type="link" href="#featured" content="Mostrar más" width="w-3/5 2xl:w-2/5 text-center " paddingY="py-3"  heigth="h-full" variant="secondary"></Button>
              </div>
            </div>
            
        </div>
      </div>
    </>



  );
}