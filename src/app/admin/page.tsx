import React from 'react'
import AdminInfoCard from '../components/ui/card/AdminInfoCard'
import TopSellList from '../components/ui/TopSellList'
import { CurrencyDollarIcon, ShoppingCartIcon, CreditCardIcon, CubeIcon} from '@heroicons/react/24/outline'
import GraphicSales from '../components/ui/GraphicSales'
import ProductManagement from '../components/ui/card/ProductManagement'
import CardContainer from '../components/ui/CardContainer'


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
      <div className = "flex flex-col gap-3 h-screen py-5 px-5 md:px-40">
        <h1 className="font-bold text-4xl text-start">Dashboard Overview</h1>

        <div className = "flex flex-col md:flex md:flex-row gap-3 my-5 justify-between">

            <AdminInfoCard title = "Total Revenue" value = "$45,231.89" percentage = {20.1} secondTitle = "Total revenue generated">
              <CurrencyDollarIcon></CurrencyDollarIcon>
            </AdminInfoCard>

            <AdminInfoCard title = "Orders" value = "2,350" percentage = {180.1} secondTitle = "Total orders placed">
              <ShoppingCartIcon></ShoppingCartIcon>
            </AdminInfoCard>

            <AdminInfoCard title = "Average Order Value" value = "$19.25" percentage = {5.1} secondTitle = "Average revenue per order">
              <CreditCardIcon></CreditCardIcon>
            </AdminInfoCard>

            <AdminInfoCard title = "Units Sold" value = "12,870" percentage = {25.5} secondTitle = "Total number of items sold">
              <CubeIcon></CubeIcon>
            </AdminInfoCard>
        </div>

        <div className= "flex flex-col md:flex-row justify-between gap-3">
          <CardContainer width='w-3/4' margin='my-auto mx-auto' padding='py-5 px-10' bgClass='bg-white border border-gray-300'>
            <GraphicSales/>
          </CardContainer>
          
          <TopSellList list={listContent}>
          </TopSellList>
        </div>
      </div>
      <div className="h-0.5 mx-20 bg-neutral-300 mt-5 rounded"></div>

      <section id='admin' className = "h-screen py-5">
        <h1 className="font-bold text-4xl text-start pl-5">Product Management</h1>
        <ProductManagement></ProductManagement>
      </section>
    </>
  )
}

export default page