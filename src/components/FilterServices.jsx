import { useEffect,useState } from "react"
import Pagination from "./main/Pagination"
import {BiSearch} from 'react-icons/bi'
import {FaFilter} from 'react-icons/fa'
import {RxCross2} from 'react-icons/rx'
import { useGetServicesQuery, useGetSpecialtyQuery } from "../store/serverApi";
import Loader from "./main/Loader"

const FilterServices =()=>{

    const {data: services,} = useGetServicesQuery();
    const {data: specialties, isSuccess, isLoading} = useGetSpecialtyQuery()

    const [openFilter, setOpenFilter] = useState(true)

    useEffect(() => {
        window.addEventListener('resize', () => {
          const viewport = window.innerWidth
            if(viewport >= 1024) return setOpenFilter(true)
        })
    })

    return(
        <div className="relative mx-auto py-4 sm:py-12 px-4 md:px-12 w-full max-w-8xl bg-gray-50 font-poppins">
            <div className="grid grid-cols-4 gap-y-8 gap-x-4">
                <div className=" col-span-full pb-2 flex flex-col sm:flex-row items-center justify-between space-y-5 sm:space-y-0 border-b border-gray-200">
                    <h2 className="text-2xl text-ternary-60 font-bold">Búsqueda de Servicios</h2>
                    <div className="flex items-center space-x-5">
                        <div className="hidden lg:inline-block relative">
                            <input type="search" id="search" name="search"
                                placeholder="Buscar"
                                className="form-input pl-11 pr-5 w-72 block shadow-sm rounded-full border-gray-300 bg-gray-50 text-sm placeholder-gray-300 focus:border-primary-100 focus:ring-1 focus:ring-blue-300"
                            />
                            <span className="absolute top-1/2 left-3 text-gray-400 transform -translate-y-1/2">
                                <BiSearch className="w-4 h-4" />
                            </span>
                        </div>
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
                        <p className='text-gray-700 font-bold mb-3'>Especialidades Disponibles</p>
                        <ul className="flex flex-col items-start space-y-2">
                        {isLoading && <Loader />}
                        {isSuccess && (
                            specialties.map(item => (
                                <div key={item.id} className="m-1 flex items-center space-x-3">
                                    <div>
                                        <input type="radio" name="categorias" id={item.name} className="form-radio h-5 w-5 border-gray-300 rounded-full text-green-400 focus:text-green-400 " />
                                    </div>
                                    <span className="text-base text-gray-700 font-medium hover:text-green-400">{item.name}</span>
                                </div>
                            ))
                        )}
                        </ul>
                    </div>
                </div>
                <div className="col-span-full lg:col-span-3">
                    <div className="border-2 border-gray-200 rounded-lg lg:h-full" >
                        <div className="z-0 mx-auto grid max-w-screen-xl grid-cols-2 gap-6 p-6 md:grid-cols-3 xl:grid-cols-4">
                        
                        </div>
                        <Pagination />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterServices;