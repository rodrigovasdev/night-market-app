import CardProducts from "@/app/components/ui/card/ProductCard"
import Container from "@/app/components/ui/Container";
import CardContainer from "@/app/components/ui/CardContainer";

export default function FeaturedProducts() {

    return (
        <Container>
            <CardContainer>
                <h1 className="font-bold text-4xl text-center p-5">Featured Products</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 xl:grid-cols-4 justify-items-center">
                    <CardProducts />
                    <CardProducts />
                    <CardProducts />
                    <CardProducts />
                </div>         
            </CardContainer>      
        </Container> 
    );
}