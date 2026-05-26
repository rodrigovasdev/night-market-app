"use client";

import Button from "@/app/components/ui/Button"
import SearchSection from "@/app/components/sections/search/SearchSection";
import OffCanva from "@/app/components/ui/OffCanva";
import { Bars3Icon, HomeIcon, ShoppingBagIcon, ShoppingCartIcon, UserIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import { useState } from "react"
import PopUpLogin from "../sections/userLoginRegister/PopUpLogin"
import { useUserStore } from '@/store/user.store'
import { useCartStore } from '@/store/cart.store'
export default function Navbar () {

    const [openMegaMenu, setOpenMegaMenu] = useState(false);

    const [menuOpen, setMenuOpen] = useState(false)
    const [searchSectionOpen, setSearchSectionOpen] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const toggleMenu = () =>{
        setMenuOpen(!menuOpen)
    }

    const openLoginFromMobileMenu = () => {
        setMobileMenuOpen(false)
        setMenuOpen(true)
    }

    const closeMobileMenu = () => {
        setMobileMenuOpen(false)
    }

    const navLinks = [
        { href: '/', label: 'Inicio', icon: HomeIcon },
        { href: '/products', label: 'Tienda', icon: ShoppingBagIcon },
    ]

    const name = useUserStore((state) => state.name) || 'Invitado';
    const itemCount = useCartStore((state) => state.itemCount);

    return (

            <nav className="bg-white  px-0 md:px-40 w-full z-60 top-0 start-0 sticky border-b border-gray-200">

                {menuOpen && 
                    <PopUpLogin onClick={toggleMenu}></PopUpLogin>
                }

                {mobileMenuOpen && (
                    <OffCanva onClick={() => setMobileMenuOpen(false)} isOpen={mobileMenuOpen} title="Navegación">
                        <ul className="flex flex-col gap-3 p-4 font-medium">
                            <li>
                                <button
                                    type="button"
                                    onClick={openLoginFromMobileMenu}
                                    className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-lg font-medium text-neutral-950 transition-colors hover:bg-neutral-100"
                                >
                                    <UserIcon className="h-5 w-5 text-neutral-950" />
                                    <span>Login</span>
                                </button>
                            </li>

                            <li>
                                <Link
                                    href="/checkout"
                                    onClick={closeMobileMenu}
                                    className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-lg font-medium text-neutral-950 transition-colors hover:bg-neutral-100"
                                >
                                    <ShoppingCartIcon className="h-5 w-5 text-neutral-950" />
                                    <span className="relative">
                                        Carrito
                                        <span className="absolute -top-3 -right-5 flex h-4 w-4 items-center justify-center rounded-full bg-neutral-950 text-[10px] font-bold text-white pointer-events-none">
                                            {itemCount}
                                        </span>
                                    </span>
                                </Link>
                            </li>

                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        onClick={closeMobileMenu}
                                        className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-lg font-medium text-neutral-950 transition-colors hover:bg-neutral-100"
                                    >
                                        <link.icon className="h-5 w-5 text-neutral-950" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </OffCanva>
                )}

                {
                    <SearchSection onClick={() => setSearchSectionOpen(false)} isOpen={searchSectionOpen}/>
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
                            {/* <Button type="icon" width="w-10" paddingX="px-2.5" onClick={() => setSearchSectionOpen(true)} border="border-none">
                                <MagnifyingGlassIcon className={`w-6 h-6 text-neutral-950`} />
                            </Button> */}
                                <Button href="/checkout" type="icon" width="w-10" paddingX="px-2.5" border="border-none">
                                    <ShoppingCartIcon className={`w-6 h-6 text-neutral-950`} />
                                    <span className="absolute -top-1 -right-1 bg-neutral-950 text-white text-xs font-bold w-4 h-4 flex items-center justify-center rounded-full pointer-events-none">
                                        {itemCount}
                                    </span>
                                </Button>
                               
                            <Button href='' type="icon" width="w-full" aux="flex gap-2.5" paddingX="px-2.5" onClick={toggleMenu} border="border-none">
                                <UserIcon className={`w-6 h-6 text-neutral-950`} />
                                {name}
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
                        
                        <Button
                            type="icon"
                            width="w-10"
                            heigth="h-10"
                            paddingX="px-0"
                            paddingY="py-0"
                            border="border-none"
                            aux="md:hidden"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <Bars3Icon className="w-6 h-6 text-neutral-950" />
                        </Button>
                        
                    </div>
                    
                    <div className="hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col gap-8 items-center p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onMouseOver={() => link.href === '/products' ? setOpenMegaMenu(true) : setOpenMegaMenu(false)}
                                    className={`block mx-auto py-2 px-3 text-gray-950 md:p-0 ${openMegaMenu && link.href === '/products' ? 'text-gray-950' : ''}`}
                                >
                                    <li className={`hover:border-b-2 px-1.5 ${openMegaMenu && link.href === '/products' ? 'border-b-2' : ''}`}>
                                        {link.label}
                                    </li>
                                </Link>
                            ))}

                            {/* <Link href="/admin" className="block py-2 mx-auto px-3 text-gray-950 md:p-0">
                                <li onMouseOver={() => setOpenMegaMenu(false)} className="hover:border-b-2 px-1.5 ">
                                    Dashboard
                                </li>
                            </Link> */}

                            {/* <Link href="/admin#admin" className="block mx-auto py-2 px-3 text-gray-950 md:p-0">
                                <li onMouseOver={() => setOpenMegaMenu(false)} className="hover:border-b-2 px-1.5">
                                    Admin
                                </li>
                            </Link> */}
                        </ul>
                    </div>
                </div>
            </nav>

    )
}