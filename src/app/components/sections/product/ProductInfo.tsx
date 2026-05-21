'use client';
import { useState } from 'react';
import Button from '@/app/components/ui/Button';
import InfoDetail from '@/app/components/ui/InfoDetail';
import { useCartStore } from '@/store/cart.store';
import { Product } from '@/types/product.types';
import { toast } from 'sonner';
import ConfirmDeletePopUp from '@/app/components/ui/ConfirmDeletePopUp';

interface ProductInfoProps {
  product: Product;
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  const addItem = useCartStore((state) => state.addItem);
  const removeItem = useCartStore((state) => state.removeItem);
  const inCart = useCartStore((state) => state.items.some((item) => item.id === product.id));
  const { name: title, shortDescription, longDescription, price, specifications } = product;
  const [showConfirm, setShowConfirm] = useState(false);
  const [quantity, setQuantity] = useState(1);

  function handleConfirmDelete() {
    removeItem(product.id);
    toast.info(`"${title}" eliminado del carrito`);
    setShowConfirm(false);
  }

  return (
  <>
    {showConfirm && (
      <ConfirmDeletePopUp
        productName={title}
        onConfirm={handleConfirmDelete}
        onCancel={() => setShowConfirm(false)}
      />
    )}
  <div className="flex flex-col items-start w-full pt-5 md:pt-0">
    <span className="text-2xl font-bold">{title}</span>
    <span className="text-md pt-5">{shortDescription}</span>
    <span className="text-md pt-5">{longDescription}</span>
    <span className="text-2xl font-bold pt-5 pb-5">${price}</span>
    <div className='flex w-full gap-3'>
      {inCart
        ? <Button variant='secondary' width='w-1/2 md:w-1/4' content='Quitar del carrito' onClick={() => setShowConfirm(true)} />
        : <Button variant='primary' width='w-1/2 md:w-1/4' content='Añadir al carrito' onClick={() => { addItem({ ...product, quantity }); toast.success(`"${title}" agregado al carrito`); }} />
      }
      {!inCart && (
        <input
          type="number"
          min={1}
          value={quantity}
          onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
          className="w-15 py-2 mb-4 text-center bg-white border-1 border-gray-300 rounded-full"
        />
      )}
    </div>

    <InfoDetail specifications={specifications || ''} productId={product.id} />
  </div>
  </>
  );
};

export default ProductInfo;
