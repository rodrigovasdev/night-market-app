"use client";

import Button from "@/app/components/ui/Button"
import { UserIcon, ShoppingCartIcon } from "@heroicons/react/24/solid"
import Link from "next/link"
import MegaMenuModal from "@/app/components/ui/MegaMenuModal"
import { useState } from "react"

export default function Navbar () {

    const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);

    const megaMenuData = {
      categories: [
        {
          id: "cat1",
          name: "Ropa",
          subcategories: [
            { id: "sub1", name: "Poleras" },
            { id: "sub2", name: "Pantalones" },
            { id: "sub3", name: "Chaquetas" },
            { id: "sub4", name: "Zapatos" },
          ],
        },
        {
          id: "cat2",
          name: "Electrónica",
          subcategories: [
            { id: "sub5", name: "Smartphones" },
            { id: "sub6", name: "Laptops" },
            { id: "sub7", name: "Accesorios" },
            { id: "sub8", name: "Tablets" },
          ],
        },
        {
          id: "cat3",
          name: "Hogar y Cocina",
          subcategories: [
            { id: "sub9", name: "Utensilios de cocina" },
            { id: "sub10", name: "Electrodomésticos" },
            { id: "sub11", name: "Decoración" },
            { id: "sub12", name: "Muebles" },
          ],
        },
        {
          id: "cat4",
          name: "Deportes",
          subcategories: [
            { id: "sub13", name: "Ropa deportiva" },
            { id: "sub14", name: "Accesorios fitness" },
            { id: "sub15", name: "Bicicletas" },
            { id: "sub16", name: "Camping" },
          ],
        },
        {
          id: "cat5",
          name: "Belleza y Salud",
          subcategories: [
            { id: "sub17", name: "Maquillaje" },
            { id: "sub18", name: "Cuidado de la piel" },
            { id: "sub19", name: "Perfumes" },
            { id: "sub20", name: "Vitaminas y suplementos" },
          ],
        },
      ],
    };
    

    const megaMenuData2 = {
      categories: [
        {
          id: "cat1",
          name: "Computación",
          subcategories: [
            { id: "sub1", name: "Monitores" },
            { id: "sub2", name: "Teclados" },
            { id: "sub3", name: "Mouses" },
          ],
        },
        {
          id: "cat2",
          name: "Gaming",
          subcategories: [
            { id: "sub4", name: "Consolas" },
            { id: "sub5", name: "Juegos" },
            { id: "sub6", name: "Accesorios gamer" },
          ],
        },
        {
          id: "cat3",
          name: "Streaming",
          subcategories: [
            { id: "sub7", name: "Webcams" },
            { id: "sub8", name: "Micrófonos" },
          ],
        },
      ],
    };
    

    const megaMenuData3 = {
      categories: [
        {
          id: "cat1",
          name: "Moda Mujer",
          subcategories: [
            { id: "sub1", name: "Vestidos" },
            { id: "sub2", name: "Blusas" },
            { id: "sub3", name: "Faldas" },
          ],
        },
        {
          id: "cat2",
          name: "Moda Hombre",
          subcategories: [
            { id: "sub4", name: "Camisas" },
            { id: "sub5", name: "Jeans" },
          ],
        },
        {
          id: "cat3",
          name: "Calzado",
          subcategories: [
            { id: "sub6", name: "Zapatillas" },
            { id: "sub7", name: "Botines" },
            { id: "sub8", name: "Sandalias" },
            { id: "sub9", name: "Zapatos formales" },
          ],
        },
      ],
    };
    

    const megaMenuData4 = {
      categories: [
        {
          id: "cat1",
          name: "Bebés",
          subcategories: [
            { id: "sub1", name: "Pañales" },
            { id: "sub2", name: "Leche infantil" },
            { id: "sub3", name: "Cochecitos" },
          ],
        },
        {
          id: "cat2",
          name: "Juguetes",
          subcategories: [
            { id: "sub4", name: "Juguetes educativos" },
            { id: "sub5", name: "Muñecos" },
            { id: "sub6", name: "Autos y pistas" },
          ],
        },
      ],
    };
    

    return (

            <nav className="bg-white w-full sticky z-60 top-0 start-0 border-b border-gray-200">
                <div className="flex justify-between md:justify-around p-4">

                    <div className="w-1/4 my-auto ">
                        <a href="#" className="flex">
                            {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo"/> */}
                            <span className="self-center text-2xl font-semibold whitespace-nowrap">N-Market</span>
                        </a>
                    </div>
                    
                    <div className="flex flex-row-reverse md:order-2 w-1/4 space-x-3 md:space-x-0 ">

                        <div className="hidden md:flex justify-around px-5 gap-3">
                            <Button type="icon" width="w-10" paddingX="px-2.5" border="border-none">
                                <UserIcon className={`w-5 h-5 text-neutral-950`} />
                            </Button>
                            <Button type="icon" width="w-10" paddingX="px-2.5" border="border-none">
                                <ShoppingCartIcon className={`w-5 h-5 text-neutral-950`} />
                            </Button>
                        </div>

                        <div className="relative hidden md:block">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-5 h-5 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                                <span className="sr-only">Search icon</span>
                            </div>
                            <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-100 focus:ring-blue-100 focus:border-blue-100" placeholder="Search..."/>                    
                        </div>
                        
                        <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-sticky" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                            </svg>
                        </button>
                        
                    </div>
                    
                    <div className="hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col items-center cursor-pointer p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
                        <li className="hover:border-b-2 px-1.5 ">
                            <Link onMouseOver={() => setOpenMenuIndex(0)} href="/" className="block py-2 px-3 text-gray-600 hover:text-gray-950 md:p-0">Home</Link>
                            <MegaMenuModal data={megaMenuData} isOpen={openMenuIndex == 0} onClose={() => setOpenMenuIndex(null)} />
                        </li>
                        <li className="hover:border-b-2 px-1.5  ">
                            <Link onMouseOver={() => setOpenMenuIndex(1)} href="/products" className="block py-2 px-3 text-gray-600 hover:text-gray-950 md:p-0">Products</Link>
                            <MegaMenuModal data={megaMenuData2} isOpen={openMenuIndex == 1} onClose={() => setOpenMenuIndex(null)} />
                        </li>
                        <li className="hover:border-b-2 px-1.5   ">
                            <Link onMouseOver={() => setOpenMenuIndex(2)} href="/products/details" className="block py-2 px-3 text-gray-600 hover:text-gray-950 md:p-0">SectionB</Link>
                            <MegaMenuModal data={megaMenuData3} isOpen={openMenuIndex == 2} onClose={() => setOpenMenuIndex(null)} />
                        </li>
                        <li className="hover:border-b-2 px-1.5 ">
                            <Link onMouseOver={() => setOpenMenuIndex(3)} href="/checkout" className="block py-2 px-3 text-gray-600 hover:text-gray-950 md:p-0">SectionC</Link>
                            <MegaMenuModal data={megaMenuData4} isOpen={openMenuIndex == 3} onClose={() => setOpenMenuIndex(null)} />
                        </li>
                        </ul>
                    </div>
                </div>
            </nav>

    )
}