import React, { useEffect, useState } from 'react'
import { Disclosure, Menu } from '@headlessui/react'
import {BsChevronDown} from "react-icons/bs"
import {BiSearch} from 'react-icons/bi'
import {BsFillGridFill} from 'react-icons/bs'
import {FaFilter} from 'react-icons/fa'
import {RxCross2} from 'react-icons/rx'
import ProductCard from '../components/cards/ProductCard';
import Pagination from './Pagination'
import { useGetCategoriesQuery } from '../store/serverApi'

const Filter =()=>{
  const {data: categorias, isSuccess} = useGetCategoriesQuery();

  const [openFilter, setOpenFilter] = useState(true)
  const [sortOptions, setSortOptions] = useState([
    { name: 'Most Popular', href: '#', current: true },
    { name: 'Newest', href: '#', current: false },
    { name: 'Best Rating', href: '#', current: false },
    { name: 'Price: Low to High', href: '#', current: false },
    { name: 'Price: High to Low', href: '#', current: false },
  ])
  
  const filters = [
    {
      id: 'marcas',
      name: 'Por Marca',
      options: [
          { value: 'Buliclo', label: 'Buliclo', checked: false },
          { value: 'Carlotin', label: 'Carlotin', checked: false },
          { value: 'Merguinez', label: 'Merguinez', checked: false },
          { value: 'Swifty', label: 'Swifty', checked: true },
          { value: 'TamTam', label: 'TamTam', checked: false },
      ],
    },
  ]
  const sortBy = (value) => {
      let newState = [...sortOptions]
      newState.map(option => option.current = false)
      newState.find(option => option.name === value).current = true
      setSortOptions(newState)
  } 
  useEffect(() => {
    window.addEventListener('resize', () => {
    const viewport = window.innerWidth
    if(viewport >= 1024) return setOpenFilter(true)
    })
  })

  const products=[
    {
      id:1,
      name:"Enterogermina",
      image:"https://drfernandojuca.com/wp-content/uploads/2021/05/ENTEROGERMINA-2000-MILLONES-X-10-FRASCOS-BEBIBLES-600x600.jpg",
      rate:4.5,
      pvp:20,
    },
    {
      id:2,
      name:"Curitas translúcidas",
      image:"https://d2o812a6k13pkp.cloudfront.net/Productos/40392165_02.jpg",
      rate:4.5,
      pvp:20,
    },
    {
      id:3,
      name:"Bago Vital Digestivo",
      image:"https://img.offers-cdn.net/assets/uploads/offers/ec/7771294/bagovital-digest-sobre-20-g-caja-con-large.jpeg",
      rate:4.5,
      pvp:20,
    },
    {
      id:4,
      name:"Bloqueador Solar 120g",
      image:"https://dermasoft.com.ec/wp-content/uploads/sites/2/2022/09/UMBRELLA-PLUS-600x600-1.gif",
      rate:4.5,
      pvp:20,
    },
    {
      id:5,
      name:"Enterogermina",
      image:"https://dermasoft.com.ec/wp-content/uploads/sites/2/2022/09/UMBRELLA-PLUS-600x600-1.gif",
      rate:4.5,
      pvp:20,
    },
    {
      id:6,
      name:"Bago Vital Digestivo",
      image:"https://img.offers-cdn.net/assets/uploads/offers/ec/7771294/bagovital-digest-sobre-20-g-caja-con-large.jpeg",
      rate:4.5,
      pvp:20,
    },
  ]

  return(
    <div className="relative mx-auto py-4 sm:py-12 px-4 md:px-12 w-full max-w-8xl bg-gray-50 font-poppins">
      <div className="grid grid-cols-4 gap-y-8 gap-x-4">
        <div className=" col-span-full pb-2 flex flex-col sm:flex-row items-center justify-between space-y-5 sm:space-y-0 border-b border-gray-200">
          <h2 className="text-2xl text-ternary-60 font-bold">Búsqueda de Productos</h2>
          <div className="flex items-center space-x-5">
            <div className="hidden lg:inline-block relative">
              <input type="search" id="search" name="search"
                placeholder="Buscar"
                className="form-input pl-11 pr-5 w-60 block shadow-sm rounded-full border-gray-300 bg-gray-50 text-sm placeholder-gray-300 focus:border-primary-100 focus:ring-1 focus:ring-blue-300"
              />
              <span className="absolute top-1/2 left-3 text-gray-400 transform -translate-y-1/2">
                <BiSearch className="w-4 h-4" />
              </span>
            </div>
            <Menu as="div" className="flex-shrink-0 relative">
              <Menu.Button className="inline-flex items-center text-base text-gray-400 font-semibold hover:text-gray-700">
                Ordenar por
                <BsChevronDown className="ml-2 w-5 h-5" />
              </Menu.Button>
              <Menu.Items className=" z-20 absolute right-0 mt-4 p-2 w-40 flex flex-col rounded-md shadow-2xl bg-white origin-top-right">
                {sortOptions.map(option => (
                  <Menu.Item key={option.name}>
                    {({ active }) => (
                      <a href={option.href} 
                        className={`p-1 block rounded ${active ? "bg-gray-50" : option.current ? "bg-blue-50 text-blue-500" : "bg-transparent text-gray-400"} text-base font-medium whitespace-nowrap`}
                        onClick={() => sortBy(option.name)}
                      >
                        {option.name}
                      </a>
                    )}
                  </Menu.Item>
                ))
                }
              </Menu.Items>
            </Menu>
            <button className="lg:hidden text-gray-400 hover:text-blue-400" onClick={() => setOpenFilter(!openFilter)}>
              <FaFilter className="w-6 h-6" />
            </button>
          </div>
        </div>
        <div className={`z-10 lg:hidden absolute inset-0 bg-gray-500 bg-opacity-75 ${openFilter ? "visible" : "invisible"}`} />
        <div className={`z-10 col-span-1 absolute top-0 right-0 lg:inset-0 lg:relative w-full h-full max-h-full max-w-xs overflow-y-scroll lg:overflow-auto bg-gray-50 transition-all duration-300 ease-in-out transform ${openFilter ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}>
          <div className="lg:hidden py-5 px-5 flex items-center justify-between border-b border-gray-200">
            <h3 className="text-xl text-gray-600 font-medium">Filtros de Búsqueda</h3>
            <button className="text-gray-400 hover:text-gray-700" onClick={() => setOpenFilter(false)}>
              <RxCross2 className="w-5 h-5" />
            </button>
          </div>
          <div className="lg:hidden relative m-5">
            <input type="search" id="search" name="search"
              placeholder="Buscar"
              className="form-input pl-11 pr-5 w-52 block shadow-sm rounded-full border-gray-300 bg-gray-50 text-sm placeholder-gray-300 focus:border-blue-300 focus:ring-1 focus:ring-blue-300"
            />
            <span className="absolute top-1/2 left-3 text-gray-400 transform -translate-y-1/2">
              <BiSearch className="w-4 h-4" />
            </span>
          </div>
          <div className="mt-5 pb-5 pl-5 border-b border-gray-200">
            <p className='text-gray-700 font-bold mb-3'>Categorías Disponibles</p>
            <ul className="flex flex-col items-start space-y-2">
              {isSuccess && (
                categorias.map(category => (
                  <div key={category.id} className="m-1 flex items-center space-x-3">
                    <div>
                      <input type="radio" name="categorias" id={category.namel} className="form-radio h-5 w-5 border-gray-300 rounded-full text-green-400 focus:text-green-400 " />
                    </div>
                    <span className="text-base text-gray-700 font-medium hover:text-green-400">{category.name}</span>
                  </div>
                ))
              )}  
            </ul>
          </div>
          <div>
            {filters.map(section => (
              <Disclosure as="div" key={section.id} className="border-b border-gray-200">
                {({ open }) => (
                  <div className={`py-5 pl-5 pr-3 flex flex-col ${open && "bg-blue-50"}`}> 
                    <Disclosure.Button className="group flex items-center justify-between">
                      <span className="text-base text-gray-700 font-semibold">{section.name}</span>
                      <BsChevronDown className={`w-6 h-6 ${open ? "transform rotate-90" : "text-gray-400 group-hover:text-gray-700 "}`} />
                    </Disclosure.Button>
                    {section.id !== "color" &&
                      <Disclosure.Panel className="mt-5 flex flex-col">
                        {section.options.map(option => (
                          <div key={option.label} className="m-1 flex items-center space-x-3">
                            <div>
                              <input type="checkbox" name={option.label} id={option.label} defaultValue={option.value} defaultChecked={option.checked} className="form-checkbox h-5 w-5 border-gray-300 rounded text-blue-400 focus:ring-blue-400" />
                            </div>
                            <span className="text-base text-gray-700">{option.label}</span>
                          </div>
                        ))}
                      </Disclosure.Panel>
                    }
                  </div>
                )}
              </Disclosure>
            ))}
          </div>
        </div>
        <div className="col-span-full lg:col-span-3">
          <div className="border-2 border-gray-200 rounded-lg lg:h-full" >
            <div className="z-0 mx-auto grid max-w-screen-xl grid-cols-2 gap-6 p-6 md:grid-cols-3 xl:grid-cols-4">
              {products.map( product =>(
                <ProductCard product={product} key={product.id}/>
              ))}
            </div>
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  )

}

export default Filter;