import Button from "@/app/components/ui/Button"
import { PaperAirplaneIcon } from "@heroicons/react/24/solid"

export default function Jumbotron() {

    return (

        <section className="w-full h-full py-10 px-8 md:px-30 lg:px-40 bg-gray-200 shadow-md">
            <div className="bg-gray-50 w-7/8 mx-auto flex flex-col gap-10 rounded-xl py-10 border-1 border-gray-300 ">
                <h1 className="font-bold text-4xl text-center p-5">Stay Updated</h1>
                <div className="w-4/5 mx-auto md:w-full md:mx-0 text-center ">
                    <span className="w-auto text-center" >Suscribe to receive exclusive offers, updates, and the latest news from N-Market!</span>
                </div>
                
                <form action="" className="w-4/5 md:w-1/3 mx-auto">
                    <div className="flex">
                        <input type="text" className="bg-white justify-self-center ps-5 p-2 items-center rounded-full w-full border-1 border-gray-300" name="" placeholder="jhon.doe@mail.com" id="" />
                        
                        <div className="hover:bg-neutral-100">
                            <Button type="icon" aux="absolute right-10 " width="w-0" paddingX="px-0" >
                                <PaperAirplaneIcon className="w-5 h-5 "/>
                            </Button>
                        </div>

                    </div>
                </form>

            </div>
        </section>
    )
}