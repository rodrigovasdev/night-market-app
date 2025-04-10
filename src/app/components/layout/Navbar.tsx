import Button from "@/app/components/ui/Button"
import { UserIcon, ShoppingCartIcon } from "@heroicons/react/24/solid"
import Link from "next/link"

export default function Navbar () {
    return (

            <nav className="bg-white w-full z-20 top-0 start-0 sticky border-b border-gray-200">
                <div className="flex justify-between p-4">

                    <div className="w-1/4 ">
                        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                            {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo"/> */}
                            <span className="self-center text-2xl font-semibold whitespace-nowrap">N-Market</span>
                        </a>
                    </div>
                    
                    <div className="flex flex-row-reverse md:order-2 w-1/4 space-x-3 md:space-x-0 ">

                        <div className="flex justify-around px-5 gap-3">
                            <Button type="icon" width="w-10" paddingX="px-3">
                                <UserIcon className={`w-5 h-5 text-neutral-950`} />
                            </Button>
                            <Button type="icon" width="w-10" paddingX="px-2.5">
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
                        <ul className="flex flex-col items-center p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
                        <li className="hover:border-b-2 px-1.5">
                            <Link href="/" className="block py-2 px-3 text-gray-600 hover:text-gray-950 md:p-0">Home</Link>
                        </li>
                        <li className="hover:border-b-2 px-1.5  ">
                            <Link href="/products" className="block py-2 px-3 text-gray-600 hover:text-gray-950 md:p-0">Products</Link>
                        </li>
                        <li className="hover:border-b-2 px-1.5   ">
                            <Link href="/products/details" className="block py-2 px-3 text-gray-600 hover:text-gray-950 md:p-0">SectionB</Link>
                        </li>
                        <li className="hover:border-b-2 px-1.5 ">
                            <Link href="/" className="block py-2 px-3 text-gray-600 hover:text-gray-950 md:p-0">SectionC</Link>
                        </li>
                        </ul>
                    </div>
                </div>
            </nav>

    )
}