import CardProducts from "../components/ui/CardProducts";
import { JSX } from "react";

export default function Products() {

    const productElements: JSX.Element[] = [];

    for (let i = 0; i < 12; i++) {
        productElements.push(<CardProducts key={i} />);
      }
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-10 p-10 md:px-25 wjustify-items-center">
            {productElements}
        </div>

    );
}
