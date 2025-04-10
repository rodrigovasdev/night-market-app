import CardProducts from "@/app/components/ui/CardProducts"

export default function FeaturedProducts() {

    return (
        <div className="w-full h-full py-10 px-40 md:h-3/4 bg-gray-200">
            <div className="bg-white w-7/8 mx-auto flex flex-col gap-10 rounded-xl py-10 md:px-25 border-1 border-gray-300">
                <h1 className="font-bold text-3xl text-center">Featured Products</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 xl:grid-cols-4 justify-items-center">
                    <CardProducts />
                    <CardProducts />
                    <CardProducts />
                    <CardProducts />
                </div>
            </div>
        </div>
        
    );
}