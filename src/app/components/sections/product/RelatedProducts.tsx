import CardProducts from '@/app/components/ui/card/ProductCard';

const RelatedProducts = () => (
  <div>
    <h2 className="py-5 font-bold text-2xl">Related Products</h2>
    <div className="flex flex-col items-start gap-5">
      <div className="flex flex-col md:flex-row gap-5">
        <CardProducts />
        <CardProducts />
      </div>
      <div className="flex flex-col md:flex-row gap-5">
        <CardProducts />
        <CardProducts />
      </div>
    </div>
  </div>
);

export default RelatedProducts;
