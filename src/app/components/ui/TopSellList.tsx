import React from 'react'
import CardContainer from './CardContainer'

interface jsonType{
    product:string,
    sales:string,
    revenue:string,
}

interface propsTopList{
    list:jsonType[]
}

function TopSellList(props: propsTopList) {
    const list = props.list
  return (
    <CardContainer width = "w-full h-full" padding='py-5' bgClass='bg-white border border-gray-300' margin = 'mb-5'>
        <span className = "font-bold text-md mx-5">Top Selling Products</span>

        <div className="px-8 overflow-auto h-full">
            <div className="flex flex-row w-full justify-between mx-auto border-b-2 py-2 border-neutral-300">
                <span className="font-semibold text-neutral-500 ">Product</span>
                <span className="font-semibold text-neutral-500  text-center">Sales</span>
                <span className="font-semibold text-neutral-500 text-center">Revenue</span>
            </div>

            {list.map((item,index) =>(
                <React.Fragment key={index}>
                <div className="flex flex-row justify-between mx-auto">
                    <span className="font-bold text-sm break-words">
                        {item["product"]}
                    </span>
                    <span className="font-semibold text-neutral-500 text-center">{item["sales"]}</span>
                    <span className="font-semibold text-black-500 text-center">${item["revenue"]}</span>
                </div>
                {index < list.length - 1 && (
                    <div className="h-0.5 bg-neutral-300 mt-5 rounded"></div>
                )}
                </React.Fragment>
            ))}
        </div>
    </CardContainer>
  )
}

export default TopSellList