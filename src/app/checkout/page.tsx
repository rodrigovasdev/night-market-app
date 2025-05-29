
import CheckoutCard from "../components/ui/card/CheckoutCard";
import { ShoppingCartIcon, ShoppingBagIcon} from "@heroicons/react/24/solid";
import Button from "../components/ui/Button";
export default function Checkout() {
    //DEJAR EL PADDING MEDIANTE PROPS EN EL COMPONENTE CONTAINER
    return (
        <div className="w-full h-full flex flex-col md:flex-row py-10 gap-10 px-5 md:px-40 md:h-screen bg-white ">
            <div className="basis-2/3">
                <div className="flex w-full mx-auto flex-col rounded-xl border-1 border-gray-300">
                    <div className="flex px-10 py-3 md:py-10 items-center justify-between border-b-1 border-gray-300 md:border-0">
                        <h1 className="font-bold text-4xl">SHOPPING CART</h1>
                        <ShoppingCartIcon className={`w-8 h-8 text-neutral-950`} />
                    </div>
                    <div className="flex flex-col py-3 gap-3 px-2 md:px-10 pb-10">
                        <CheckoutCard/>
                        <CheckoutCard/>
                        <CheckoutCard/>
                    </div>
                </div>
            </div>
            
            <div className="basis-1/3">
                <div className="flex w-full mx-auto flex-col rounded-xl border-1 border-gray-300">
                    <div className="flex px-10 py-10 items-center justify-between">
                        <h1 className="font-bold text-2xl">ORDER SUMMARY</h1>
                        <ShoppingBagIcon className={`w-8 h-8 text-neutral-950`} />
                    </div>
                    <div className="flex flex-col px-10 pb-5">
                        <div className="flex justify-between">
                            <span className="">3 Products</span> 
                            <span className="">$525.000</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="">Delivery</span> 
                            <span className="">Free</span>
                        </div>
                    </div>
                    <div className="flex justify-between px-10">
                        <span className="font-semibold">Total</span> 
                        <span className="font-semibold">$525.000</span>
                    </div>
                    <div className="px-10 flex flex-col gap-3 py-10">
                        <Button content="Proceed as Member" width="w-full" variant="primary"/>
                        <Button content="Proceed as Guest" width="w-full"  variant="secondary"/>
                    </div>
                    
                </div>
            </div>
                
        </div>
    );
}