import { useEffect,useState } from "react"
import Pagination from "./main/Pagination"
import {BiSearch} from 'react-icons/bi'
import {FaFilter} from 'react-icons/fa'
import {RxCross2} from 'react-icons/rx'
import { useGetSpecialtyQuery } from "../store/serverApi";
import ServiceCardSearch from "./cards/ServiceCardSearch"
import Loader from "./main/Loader"
import axios from "axios"

const FilterServices =()=>{

    const {data: specialties, isSuccess, isLoading} = useGetSpecialtyQuery()

    const [dataOriginal, setDataOriginal] = useState([])
    const [openFilter, setOpenFilter] = useState(true)
    const [servicios,setServicios] = useState([])
    const [selectedOption, setSelectedOption] = useState("")
    const [nomSpec,setNomSpec] = useState('')

    const [Loading, setLoading] = useState(false)
    const [serviciosPerPage, ] = useState(9)
    const [currentPage, setCurrentPage] = useState(1)
    const totalServicios = servicios.length

    const lastIndex = currentPage * serviciosPerPage
    const firstIndex = lastIndex - serviciosPerPage

    useEffect(() => {
        window.addEventListener('resize', () => {
          const viewport = window.innerWidth
            if(viewport >= 1024) return setOpenFilter(true)
        })
    })

    useEffect(()=>{
        getServices()
    },[])

    useEffect(() => {
        if (servicios.length !== 0) {
          setLoading(false)
        }
        else{
          setLoading(true)
        }
    }, [servicios])

    const handleOnChange = (e) =>{
        let temp = parseInt(e.target.value)
        if(temp ===0){
            setServicios(dataOriginal)
        }else{
            setSelectedOption(temp)
            let res = dataOriginal.filter((x) => x.specialty.id === temp)
            setServicios(res)
            let cat = specialties.filter(cat => cat.id===temp)
            setNomSpec(cat[0].name)
        }
        const viewport = window.innerWidth
        if(viewport <= 1024) return setOpenFilter(false)
    }
    
    const handleOnSearch = (e) =>{
        let temp = e.target.value
        if(temp === '')
            setServicios(dataOriginal)
        else{
            let res = dataOriginal.filter(x => x.name.toLowerCase().includes(temp))
            if(res.length ===0)
                setServicios("Vacio")
            else
                setServicios(res)
        }
    }

    const getServices = async ()=>{
        await axios.get(`https://api-gateway-production-d841.up.railway.app/api/public/service`)
        .then(response => {
            setServicios(response.data)
            setDataOriginal(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }
    
    return(
        <div className="relative mx-auto py-4 sm:py-12 px-4 md:px-12 w-full max-w-8xl bg-gray-50 font-poppins">
            <div className="grid grid-cols-4 gap-y-8 gap-x-4">
                <div className=" col-span-full pb-2 flex flex-col sm:flex-row items-center justify-between space-y-5 sm:space-y-0 border-b border-gray-200">
                    <h2 className="text-2xl text-ternary-60 font-bold">Búsqueda de Servicios</h2>
                    <div className="flex items-center space-x-5">
                        <div className="hidden lg:inline-block relative">
                            <input type="search" id="search" name="search"
                                placeholder="Buscar"
                                className="form-input pl-11 pr-5 w-72 block shadow-sm rounded-full border-gray-300 bg-gray-50 text-sm placeholder-gray-300 focus:border-primary-100 focus:ring-1 focus:ring-blue-300" onChange={handleOnSearch}
                            />
                            <span className="absolute top-1/2 left-3 text-gray-400 transform -translate-y-1/2">
                                <BiSearch className="w-4 h-4" />
                            </span>
                        </div>
                        <div className="lg:hidden inline-block relative">
                            <p>{nomSpec}</p>
                        </div>
                        <button className="lg:hidden text-gray-400 hover:text-blue-400" onClick={() => setOpenFilter(!openFilter)}>
                            <FaFilter className="w-6 h-6" />
                        </button>
                    </div>
                </div>
                <div className={`z-10 lg:hidden absolute inset-0 bg-gray-500 bg-opacity-75 ${openFilter ? "visible" : "invisible"}`} />
                <div className={`z-10 col-span-1 absolute top-0 right-0 lg:inset-0 lg:relative w-full h-full max-h-full max-w-xs bg-gray-50 transition-all duration-300 ease-in-out transform ${openFilter ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 hidden"}`}>
                    <div className="lg:hidden py-5 px-5 flex items-center justify-between border-b border-gray-200">
                        <h3 className="text-xl text-gray-600 font-medium">Filtros de Búsqueda</h3>
                        <button className="text-gray-400 hover:text-gray-700" onClick={() => setOpenFilter(false)}>
                        <RxCross2 className="w-5 h-5" />
                        </button>
                    </div>
                    <div className="lg:hidden relative m-5">
                        <input type="search" id="search" name="search"
                        placeholder="Buscar" onChange={handleOnSearch}
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
                                        <input type="radio" name="especialidad" id={item.name} 
                                        value={item.id} 
                                        onChange={handleOnChange}
                                        className="form-radio h-5 w-5 border-gray-300 rounded-full text-green-400 focus:text-green-400 " />
                                    </div>
                                    <span className="text-base text-gray-700 font-medium hover:text-green-400">{item.name}</span>
                                </div>
                            ))
                        )}
                        </ul>
                        {selectedOption !== "" && (
                            <div className="m-1 pt-4 flex items-center space-x-3">
                            <div>
                                <input type="radio" name="especialidad" value={0} 
                                onChange={handleOnChange} 
                                className="form-radio h-5 w-5 border-gray-300 rounded-full text-green-400 focus:text-green-400 " />
                            </div>
                            <span className="text-base text-gray-700 font-medium hover:text-green-400">Todas</span>
                            </div>
                        )}  
                    </div>
                </div>
                <div className="col-span-full lg:col-span-3">
                    <div className="border-2 border-gray-200 rounded-lg lg:h-full" >
                    {Loading ? <Loader/> : (
                        <>
                            <div className={` ${servicios==='Vacio' && 'py-40 xl:grid-cols-1 text-center' }   z-0 mx-auto grid max-w-screen-xl grid-cols-1 sm:grid-cols-2 gap-6 p-6 md:grid-cols-3`}>
                                {servicios !== "Vacio" ? (
                                    servicios.map( service =>(
                                        <ServiceCardSearch service={service} key={service.id} />
                                    )).slice(firstIndex,lastIndex)
                                ) : (
                                    <p className="text-center">Resultados no encontrados</p>
                                )}
                            </div>
                            {servicios !== "Vacio" && ( 
                                <div className='mt-4'>
                                <Pagination 
                                productosPerPage={serviciosPerPage} 
                                currentPage={currentPage} 
                                setCurrentPage={setCurrentPage}
                                totalProducts={totalServicios} />
                            </div>
                            )}
                        </>
                    )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterServices;