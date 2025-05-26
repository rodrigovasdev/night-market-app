import Button from "@/app/components/ui/Button"
import { PaperAirplaneIcon } from "@heroicons/react/24/solid"
import Container from "@/app/components/ui/Container"
import CardContainer from "@/app/components/ui/CardContainer"
import EnvelopeIcon from "@heroicons/react/24/outline/EnvelopeIcon"
export default function Jumbotron() {
    return (
        <Container>
            <CardContainer>
                <EnvelopeIcon className="w-10 h-10 mx-auto"/>
                <h1 className="font-bold text-4xl text-center w-2/8 2xl:w-1/8 mx-auto py-5 ">STAY UPDATED</h1>
                
                <div className="w-4/5 p-5 mx-auto md:w-full md:mx-0 text-center">
                    <span className="w-auto text-center" >Suscribe to receive exclusive offers, updates, and the latest news from N-Market!</span>
                </div>
                
                <form action="" className="w-4/5 md:w-3/5 mx-auto">
                    <div className="flex gap-1 py-5">
                        <input type="text" className="bg-white justify-self-center ps-5 p-2 items-center rounded-full w-full border-1 border-gray-300" name="" placeholder="jhon.doe@mail.com" id="" />
                        <Button type="icon" border="border-none"  paddingY="py-0" paddingX="px-0" width="w-10" heigth="h-10" >
                            <PaperAirplaneIcon className="w-5 h-5 "/>
                        </Button>
                    </div>
                </form>
            </CardContainer>
        </Container>

    )
}