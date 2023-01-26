import { NavLink} from 'react-router-dom';
import logo from '../assets/img/logo.png';
import React, { useState } from "react";

const Navbar = () =>{
    const [searchInput, setSearchInput] = useState(true);
    const [mdOptionsToggle, setMdOptionsToggle] = useState(true);
    const [showMenu, setShowMenu] = useState(false);

    return(
        <div className="relative">
            {/* For md screen size */}
            <div id="md-searchbar" className={`${mdOptionsToggle ? "hidden" : "flex"} bg-white lg:hidden py-5 px-6 items-center justify-between`}>
                <div className="flex items-center space-x-3 text-gray-500 dark:text-white">
                    <svg className="fill-stroke" width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M18.9984 18.9999L14.6484 14.6499" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <input type="text" placeholder="Search for products" className="text-sm input input-sm dark:text-gray-300 dark:bg-gray-900 text-gray-600" />
                </div>
                <div className="item-center space-x-5 items-center">
                    <button className="text-gray-500 hover:text-secondary-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span className="flex absolute -mt-7 ml-4">
                        <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-secondary-60 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary-100">
                            </span>
                        </span>
                    </button>
                    <button className="text-gray-500 hover:text-secondary-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                </div>
            </div>

             {/* For lg screen size */}
            <div className="dark:bg-gray-900 bg-primary-100 px-12 py-2">
                <div className="container mx-auto flex items-center justify-between">
                    <NavLink to='/' className="md:w-2/12 cursor-pointer">
                        <img src={logo} className="w-48" alt='Kruger Med' />
                    </NavLink>
                    <ul className="hidden w-8/12 md:flex items-center justify-center font-semibold font-heading space-x-8 text-lg">
                        <li><NavLink to='/' className="text-white hover:text-secondary-100">Productos</NavLink></li>
                        <li><NavLink to='/' className="text-white hover:text-secondary-100">Servicios</NavLink></li>
                        <li><NavLink to='/' className="text-white hover:text-secondary-100">Sobre Nosotros</NavLink></li>
                        <li><NavLink to='/' className="text-white hover:text-secondary-100">Contacto</NavLink></li>
                    </ul>
                    <div className="md:w-2/12 justify-end flex items-center space-x-4 xl:space-x-8 text-white">
                        <div className="hidden lg:flex items-center">
                            <button onClick={() => setSearchInput(!searchInput)} aria-label="search items">
                                <svg className="fill-stroke" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 11C5 15.4183 8.58172 19 13 19C17.4183 19 21 15.4183 21 11C21 6.58172 17.4183 3 13 3C8.58172 3 5 6.58172 5 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2.99961 20.9999L7.34961 16.6499" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <input id="searchInput" type="text" placeholder="Search" className={` ${searchInput ? "hidden" : ""} input input-bordered input-sm text-sm text-gray-600 rounded ml-1  px-1`} />
                        </div>
                        <div className="hidden lg:flex item-center space-x-5 items-center">
                            <button className="flex items-center hover:text-gray-200" >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                <span className="flex absolute -mt-5 ml-4">
                                <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-secondary-40 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary-100">
                                    </span>
                                </span>
                            </button>
                            <button className="flex items-center hover:text-gray-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex lg:hidden">
                            <button aria-label="show options" onClick={() => setMdOptionsToggle(!mdOptionsToggle)} className="text-white hidden md:flex">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-secondary-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                            <button aria-label="open menu" onClick={() => setShowMenu(true)} className="text-white md:hidden ">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-secondary-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
             {/* For sm screen size */}
            <div id="mobile-menu" className={`${showMenu ? "flex" : "hidden"} absolute dark:bg-gray-900 z-10 inset-0 md:hidden bg-white flex-col h-screen w-full`}>
                <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-4 p-4">
                    <div className="flex items-center space-x-3">
                        <svg className="fill-stroke text-gray-800 dark:text-white" width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M18.9984 18.9999L14.6484 14.6499" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <input type="text" placeholder="Search for products" className="input text-sm dark:bg-gray-900 text-gray-600 placeholder-gray-600 dark:placeholder-gray-300 " />
                    </div>
                    <button onClick={() => setShowMenu(false)} aria-label="close menu">
                        <svg className="fill-stroke text-gray-800 dark:text-white" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 4L4 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4 4L12 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
                <div className="mt-6 p-4 block w-full h-full md:h-auto">
                    <ul className="flex flex-col space-y-6 ">
                        <li>
                            <NavLink to="/" class="block md:px-3">
                                <div class="relative text-primary-100 ">
                                    <span>Productos</span>
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/" class="block md:px-3">
                                <div class="relative text-primary-100">
                                    <span>Servicios</span>
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/" class="block md:px-3">
                                <div class="relative text-primary-100">
                                    <span>Sobre Nosotros</span>
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/" class="block md:px-3">
                                <div class="relative text-primary-100">
                                    <span>Contacto</span>
                                </div>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="h-full flex items-end">
                    <ul className="flex flex-col space-y-8 bg-gray-50 w-full py-10 p-4 dark:bg-gray-800">
                        <li>
                            <NavLink to="/" className="dark:text-white text-gray-800 flex items-center space-x-2 hover:underline">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                <p className="text-base">Carrito de compras</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/" className="dark:text-white text-gray-800 flex items-center space-x-2 hover:underline">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p className="text-base">Login</p>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Navbar;
