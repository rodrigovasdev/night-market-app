import CardProducts from "@/app/components/ui/card/ProductCard"
import Container from "../../ui/Container";
export default function FeaturedProducts() {

    return (
        <Container>
            <h1 className="font-bold text-4xl text-center p-5">Featured Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 xl:grid-cols-4 justify-items-center">
                <CardProducts />
                <CardProducts />
                <CardProducts />
                <CardProducts />
            </div>
        </Container>
        
        
    );
}