import CardProducts from "@/app/components/ui/card/ProductCard"
import Container from "@/app/components/ui/Container";
import CardContainer from "@/app/components/ui/CardContainer";
import Button from "@/app/components/ui/Button";
export default function FeaturedProducts() {

    return (
        <Container> 
            <CardContainer>
                 <div className="flex py-5 pb-15 items-center justify-between">
                        <h1 className="font-bold text-4xl ">FEATURED PRODUCTS</h1>
                        <Button content="Show more" width="w-2/8 2xl:w-1/8"  variant="secondary"></Button>
                    </div>
               
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 2xl:gap-10 xl:grid-cols-4 justify-items-center">
                    <CardProducts />
                    <CardProducts />
                    <CardProducts />
                    <CardProducts />
                </div>        
            </CardContainer>                
        </Container> 
        
    );
}