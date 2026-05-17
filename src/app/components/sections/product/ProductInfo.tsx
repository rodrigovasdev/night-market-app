import Button from '@/app/components/ui/Button';
import InfoDetail from '@/app/components/ui/InfoDetail';
import SatisfactionForm from '@/app/components/sections/product/SatisfactionFormulary';

interface ProductInfoProps {
  title: string;
  shortDescription: string;
  longDescription: string;
  price: number;
  specifications?: string;
}
const ProductInfo = ({ title, shortDescription, longDescription, price, specifications }: ProductInfoProps) => (
  <div className="flex flex-col items-start w-full pt-5 md:pt-0">
    <span className="text-2xl font-bold">{title}</span>
    <span className="text-md pt-5">{shortDescription}</span>
    <span className="text-md pt-5">{longDescription}</span>
    <span className="text-2xl font-bold pt-5 pb-5">${price}</span>
    <Button variant='primary' width='w-1/2 md:w-1/4' content='Add to Cart' />
    <InfoDetail specifications={specifications || ''} />
    <div className="flex w-full justify-center pt-20 block md:hidden">
      <SatisfactionForm />
    </div>
  </div>
);

export default ProductInfo;
