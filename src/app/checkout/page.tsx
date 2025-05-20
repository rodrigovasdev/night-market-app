import Container from "@/app/components/ui/Container";
import CardContainer from "@/app/components/ui/CardContainer";
import Button from "@/app/components/ui/Button";
import Image from "next/image";
import { XMarkIcon , HeartIcon} from "@heroicons/react/24/solid";

export default function Checkout() {
    //DEJAR EL PADDING MEDIANTE PROPS EN EL COMPONENTE CONTAINER
    return (
        <div className="w-full h-full flex flex-row py-10 gap-10 px-8 md:h-screen bg-gray-200 shadow-md">
            <div className="w-2/3">
                <CardContainer rounded="rounded-r-xl" padding="p-0" >

                    <div className="flex p-1">
                        <Image
                        className=""
                        src="/assets/ecommerce.jpg"
                        alt="Producto"
                        width = {150}
                        height = {150}
                        />
                        <div className="w-1/2 flex flex-col px-10 gap-3"> 
                            <h1 className="text-xl font-bold">Modern Chair</h1>
                            <span className="text-gray-500 text-sm">Ergonomic and durable.</span>
                        </div>
                        <form action="" className="">
                            <input type="number" className="w-1/3 text-center bg-white border-1 border-gray-300 rounded-xl"/>
                        </form>
                        <div className="w-1/2 flex justify-end">
                            
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
            </div>
            <div className="w-1/3">
            <Container>
                    <form action="" className="w-full">
                    <input type="text" className="bg-white rounded-full w-full border-1 border-gray-300" name="" placeholder="jhon.doe@mail.com" id="" />
                    </form>
            </Container>
            </div>
                
                
        </div>
    );
}