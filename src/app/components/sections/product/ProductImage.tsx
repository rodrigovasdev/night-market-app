import Image from "next/image";
import Carrousel from '@/app/components/ui/Carrousel';
import SatisfactionForm from '@/app/components/sections/product/SatisfactionFormulary';

interface ProductImageProps {
  imageSelected: string;
  images: string[];
  setImage: (image: string) => void;
}

const ProductImage = ({ imageSelected, images, setImage }: ProductImageProps) => (
  <div className="flex flex-col items-center w-full">
    <Image className="rounded-xl w-full md:w-3/4 h-80 md:h-120 border border-slate-300" src={imageSelected} alt="Producto" width={300} height={300} />
    <Carrousel imgSelected={imageSelected} images={images} onImageClick={setImage} />
    <div className="pt-20 hidden md:block">
      <SatisfactionForm />
    </div>
  </div>
);

export default ProductImage;
