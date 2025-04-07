import Button from "@/app/components/ui/Button"

export default function Jumbotron() {

    return (

        <div className="w-screen h-screen bg-neutral-200 flex flex-col gap-6">
            <h1 className="font-bold text-5xl text-center">Stay Updated</h1>
            <span className="text-center">Sign up to receive exclusive offers, updates, and the latest news from N-Market!</span>
            
            <div className="flex justify-around px-5 w-1/5 gap-6 z-10 absolute start-1/2 translate-x-[-50%] translate-y-[800%]">
            <Button variant="primary" content="Subscribe"/>
            </div>

        </div>
    )
}