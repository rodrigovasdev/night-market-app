import Button from '@/app/components/ui/Button';
import InfoDetail from '@/app/components/ui/InfoDetail';
import SatisfactionForm from '@/app/components/sections/product/SatisfactionFormulary';

const ProductInfo = () => (
  <div className="flex flex-col items-start w-full pt-5 md:pt-0">
    <span className="text-2xl font-bold">Yellow-shirt</span>
    <span className="text-md pt-5">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec varius libero. Nulla facilisi. Cras pellentesque felis ut consectetur blandit. Nam eget augue euismod, gravida nisi ac, interdum neque. Fusce nec tincidunt est. Integer pretium vestibulum risus, sit amet rutrum nisi suscipit quis. Aenean sed justo sed justo facilisis pulvinar.
    </span>
    <span className="text-2xl font-bold pt-5 pb-5">$25.00</span>
    <Button variant='primary' width='w-1/2 md:w-1/4' content='Add to Cart' />
    <InfoDetail />
    <div className="flex w-full justify-center pt-20 block md:hidden">
      <SatisfactionForm />
    </div>
  </div>
);

export default ProductInfo;
