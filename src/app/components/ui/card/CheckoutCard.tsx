import CardContainer from "@/app/components/ui/CardContainer";
import Button from "@/app/components/ui/Button";
import Image from "next/image";
import { XMarkIcon , HeartIcon} from "@heroicons/react/24/solid";


export default function CheckoutCard() {

    return(
        <CardContainer width="w-full" rounded="md:rounded-xl" padding="p-0" bgClass="bg-white border-b-1 md:border-1 border-gray-300">
                    <div className="flex justify-between">
                        
                        <div className="w-2/3 flex flex-col md:flex-row gap-3 p-2.5">
                             <Image
                                className=""
                                src="/assets/ecommerce.jpg"
                                alt="Producto"
                                width = {200}
                                height = {200}
                                />

                            <div className="flex flex-col gap-3 my-auto "> 
                                <h1 className="text-xl font-bold">Modern Chair</h1>
                                <span className="text-gray-500 text-sm">Ergonomic and durable.</span>
                            </div>
                        </div>
                       
                        <div className="flex flex-col md:flex-row w-1/3 my-0 md:my-auto justify-between">
                            <form action="" className="order-2 md:order-1 my-auto mx-auto">
                                <input type="number" className="w-15 py-2 text-center bg-white border-1 border-gray-300 rounded-xl"/>
                            </form>

                            <span className="order-3 md:order-2 font-semibold my-auto mx-auto">$125.000</span>

                            <div className="order-1 md:order-3 my-auto flex justify-end">
                                <div className="flex flex-col gap-1 px-1">
                                    <Button type="icon" width="w-10" paddingX="px-2.5" border="border-none">
                                        <XMarkIcon className={`w-5 h-5 text-neutral-950`} />
                                    </Button>
                                    <Button type="icon" width="w-10" paddingX="px-2.5" border="border-none">
                                        <HeartIcon className={`w-5 h-5 text-neutral-950`} />
                                    </Button>
                                </div>
                            </div>

                        </div>

                    </div>
                </CardContainer>
    )
}