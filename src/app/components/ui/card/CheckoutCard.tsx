import CardContainer from "@/app/components/ui/CardContainer";
import Button from "@/app/components/ui/Button";
import Image from "next/image";
import { XMarkIcon , HeartIcon} from "@heroicons/react/24/solid";


export default function CheckoutCard() {

    return(
        <CardContainer width="w-full" rounded="rounded-xl" padding="p-0" bgClass="bg-white border-1 border-gray-300">
                    <div className="flex justify-between">
                        
                        <div className="flex gap-3 p-2.5">
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
                       

                        <form action="" className="my-auto">
                            <input type="number" className="w-20 py-2 text-center bg-white border-1 border-gray-300 rounded-xl"/>
                        </form>

                        <span className="font-semibold my-auto">$125.000</span>

                        <div className="my-auto flex justify-end">
                            <div className="flex flex-col">
                                <Button type="icon" width="w-10" paddingX="px-2.5">
                                    <XMarkIcon className={`w-5 h-5 text-neutral-950`} />
                                </Button>
                                <Button type="icon" width="w-10" paddingX="px-2.5">
                                    <HeartIcon className={`w-5 h-5 text-neutral-950`} />
                                </Button>
                            </div>
                        </div>

                    </div>
                </CardContainer>
    )
}