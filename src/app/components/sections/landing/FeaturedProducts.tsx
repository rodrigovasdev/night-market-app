import CardProducts from "@/app/components/ui/card/ProductCard"

export default function FeaturedProducts() {

    return (
        <section id="featured" className="w-full h-full py-10 px-8 md:px-30 lg:px-40 md:h-3/4 bg-gray-200 shadow-md">
            <div className="bg-gray-50 w-7/8 mx-auto flex flex-col gap-10 rounded-xl py-10 px-4 sm:px-10 lg:px-15 xl:px-25 border-1 border-gray-300">
            <h1 className="font-bold text-4xl text-center p-5">Featured Products</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 xl:grid-cols-4 justify-items-center">
                    <CardProducts />
                    <CardProducts />
                    <CardProducts />
                    <CardProducts />
                </div>
            </div>
        </section>
        
    );
}