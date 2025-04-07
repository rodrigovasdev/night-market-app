import CardProducts from "@/app/components/ui/CardProducts"

export default function FeaturedProducts() {

    return (
        <div className="h-screen">
            <h1 className="font-bold text-3xl text-center">Featured Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-10 p-10 md:px-25 justify-items-center">
                <CardProducts />
                <CardProducts />
                <CardProducts />
                <CardProducts />
            </div>
        </div>
        
    );
}