import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 px-5 start-0 border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-full flex flex-wrap items-center justify-between mx-auto p-3">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="/img/navLogo.png" className="h-15" alt="Flowbite Logo" />

                </Link>
                <div className="flex xl:order-2 space-x-3 xl:space-x-0 rtl:space-x-reverse">
                    <button type="button" className="flex flex-row items-center text-white bg-green-800 hover:bg-green-900 hover:cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-[18px] px-8 py-2 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 me-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                        800 5200</button>
                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg xl:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full xl:flex xl:w-auto xl:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 xl:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 xl:space-x-1 rtl:space-x-reverse xl:flex-row xl:mt-0 xl:border-0 xl:bg-white dark:bg-gray-800 xl:dark:bg-gray-900 dark:border-gray-700">
                        <li className='w-full xl:w-30'>
                            <Link to="/" className="nav-item font-bold text-green-900" aria-current="page">Home</Link>
                        </li>
                        <li className='w-full xl:w-30'>
                            <Link to="/menu" className="nav-item font-bold text-green-900">Menu</Link>
                        </li>
                        <li className='w-full xl:w-30'>
                            <Link to="/about" className="nav-item font-bold text-green-900">About Us</Link>
                        </li>
                        <li className='w-full xl:w-30'>
                            <Link to="/contact" className="nav-item font-bold text-green-900">Contact</Link>
                        </li>
                        <li className='w-full xl:w-30'>
                            <Link to="/blog" className="nav-item font-bold text-green-900">Blog</Link>
                        </li>
                        <li className='w-full xl:w-30'>
                            <Link to="/careers" className="nav-item font-bold text-green-900">Careers</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar