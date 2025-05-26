import React from 'react'
import AdminInfoCard from '../components/ui/card/AdminInfoCard'
import TopSellList from '../components/ui/TopSellList'
import { CurrencyDollarIcon, ShoppingCartIcon, CreditCardIcon, CubeIcon} from '@heroicons/react/24/outline'
import GraphicSales from '../components/ui/GraphicSales'
import ProductManagement from '../components/ui/card/ProductManagement'


function page() {

  const listContent = [
    {product:"Premium Wireless Earbuds", sales:"120", revenue:"1,200"},
    {product:"Premium Wireless Earbuds", sales:"120", revenue:"1,200"},
    {product:"Premium Wireless Earbuds", sales:"120", revenue:"1,200"},
    {product:"Premium Wireless Earbuds", sales:"120", revenue:"1,200"},
    {product:"Premium Wireless Earbuds", sales:"120", revenue:"1,200"}
  ]

  return (
    <>
      <div className = "h-screen">
        <h1 className="font-bold text-4xl text-start p-5">Dashboard Overview</h1>

        <div className = "flex flex-col md:flex md:flex-row gap-5 my-5 mx-3 justify-between">
          <div>
            <AdminInfoCard title = "Total Revenue" value = "$45,231.89" percentage = {20.1} secondTitle = "Total revenue generated">
              <CurrencyDollarIcon></CurrencyDollarIcon>
            </AdminInfoCard>
          </div>
          <div>
            <AdminInfoCard title = "Orders" value = "2,350" percentage = {180.1} secondTitle = "Total orders placed">
              <ShoppingCartIcon></ShoppingCartIcon>
            </AdminInfoCard>
          </div>
          <div>
            <AdminInfoCard title = "Average Order Value" value = "$19.25" percentage = {5.1} secondTitle = "Average revenue per order">
              <CreditCardIcon></CreditCardIcon>
            </AdminInfoCard>
          </div>
          <div>
            <AdminInfoCard title = "Units Sold" value = "12,870" percentage = {25.5} secondTitle = "Total number of items sold">
              <CubeIcon></CubeIcon>
            </AdminInfoCard>
          </div>
        </div>

        <div className= "flex flex-col md:flex-row justify-between mx-3 my-10">
          <GraphicSales></GraphicSales>
          <TopSellList list={listContent}>
          </TopSellList>
        </div>
        <div className="h-0.5 bg-neutral-300 mt-5 rounded"></div>
      </div>

      <div className = "h-screen">
        <h1 className="font-bold text-4xl text-start pl-5">Product Management</h1>
        <ProductManagement></ProductManagement>
      </div>
    </>
  )
}

export default page