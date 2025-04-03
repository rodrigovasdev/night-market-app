import Button from "@/app/components/ui/Button"
import { UserIcon, ShoppingCartIcon } from "@heroicons/react/24/solid"
import Link from "next/link"

export default function Navbar () {
    return (

            <nav className="bg-white dark:bg-gray-900 z-20 top-0 start-0 sticky border-b border-gray-200 dark:border-gray-600">
                <div className="w-screen flex justify-between p-4">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo"/> */}
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">N-Market</span>
                </a>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">                    
                    <div className="relative hidden md:block">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                            <span className="sr-only">Search icon</span>
                        </div>
                    <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>                    
                    </div>
                    <div className="flex justify-around px-5 gap-3">
                    
                            <Button type="icon">
                                <UserIcon className={`w-5 h-5 text-neutral-950`} />
                            </Button>
                            <Button type="icon">
                                <ShoppingCartIcon className={`w-5 h-5 text-neutral-950`} />
                            </Button>
                    </div>
                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                    
                </div>
                <div className=" hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col justify-items-center h-6 p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
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