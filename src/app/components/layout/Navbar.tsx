"use client";

import Button from "@/app/components/ui/Button"
import { UserIcon, ShoppingCartIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import MegaMenuModal from "@/app/components/ui/MegaMenuModal"
import { useState } from "react"
import PopUpLogin from "../sections/userLoginRegister/PopUpLogin"

export default function Navbar () {

    const [openMegaMenu, setOpenMegaMenu] = useState(false);

    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () =>{
        setMenuOpen(!menuOpen)
        console.log("Hola!")
    }
    const megaMenuData = {
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

    return (

            <nav className="bg-white  px-0 md:px-40 w-full z-60 top-0 start-0 sticky border-b border-gray-200">

                {menuOpen && 
                    <PopUpLogin onClick={toggleMenu}></PopUpLogin>
                }

                <div className="flex justify-between px-4 md:px-0 py-4">

                    <div className="w-1/4 my-auto ">
                        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                            {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo"/> */}
                            <span className="self-center text-3xl font-semibold whitespace-nowrap">N-Market</span>
                        </Link>
                    </div>
                    
                    <div className="flex flex-row-reverse md:order-2 w-1/4 space-x-3 md:space-x-0 ">

                        <div className="hidden md:flex justify-around gap-3">
                            <Button type="icon" width="w-10" paddingX="px-2.5" border="border-none">
                                <MagnifyingGlassIcon className={`w-6 h-6 text-neutral-950`} />
                            </Button>
                            <Button type="icon" width="w-10" paddingX="px-2.5" onClick={toggleMenu} border="border-none">
                                <UserIcon className={`w-6 h-6 text-neutral-950`} />
                            </Button>
                            <Button href="/checkout" type="icon" width="w-10" paddingX="px-2.5" border="border-none">
                                <ShoppingCartIcon className={`w-6 h-6 text-neutral-950`} />
                            </Button>
                        </div>

                        {/* <div className="relative hidden md:block">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-5 h-5 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                                <span className="sr-only">Search icon</span>
                            </div>
                            <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-100 focus:ring-blue-100 focus:border-blue-100" placeholder="Search..."/>                    
                        </div> */}
                        
                        <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-sticky" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                            </svg>
                        </button>
                        
                    </div>
                    
                    <div className="hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col gap-8 items-center p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
                            <Link href="/" className="block py-2 px-3 mx-auto text-gray-950 md:p-0">
                                <li onMouseOver={() => setOpenMegaMenu(false)} className="hover:border-b-2 px-1.5">
                                    Home
                                </li>
                            </Link>

                            <Link onMouseOver={() => setOpenMegaMenu(true)} href="/products" className={`block mx-auto py-2 px-3 text-gray-950 md:p-0 ${openMegaMenu ? 'text-gray-950' : ''}`}>
                                <li className={`hover:border-b-2 px-1.5 ${openMegaMenu ? 'border-b-2' : ''}`}>
                                    Products
                                </li>
                            </Link>

                            <MegaMenuModal data={megaMenuData} isOpen={openMegaMenu} onClose={() => setOpenMegaMenu(false)} />

                            <Link href="/admin" className="block py-2 mx-auto px-3 text-gray-950 md:p-0">
                                <li onMouseOver={() => setOpenMegaMenu(false)} className="hover:border-b-2 px-1.5 ">
                                    Dashboard
                                </li>
                            </Link>

                            <Link href="/admin#admin" className="block mx-auto py-2 px-3 text-gray-950 md:p-0">
                                <li onMouseOver={() => setOpenMegaMenu(false)} className="hover:border-b-2 px-1.5">
                                    Admin
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>

    )
}