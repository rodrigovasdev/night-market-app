import React from 'react'
import CardProducts from "@/app/components/ui/CardProducts";
import { JSX } from "react";

function ElementosProducts() {

    const productElements: JSX.Element[] = [];

    for (let i = 0; i < 12; i++) {
        productElements.push(<CardProducts key={i} />);
      }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-10 p-10 md:px-25 justify-items-center">
        {productElements}
    </div>
  )
}

export default ElementosProducts