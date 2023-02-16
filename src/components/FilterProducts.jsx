import { useEffect, useState } from 'react'
import {BiSearch} from 'react-icons/bi'
import {FaFilter} from 'react-icons/fa'
import {RxCross2} from 'react-icons/rx'
import ProductCard from './cards/ProductCard';
import Pagination from './main/Pagination'
import { useGetCategoriesQuery} from '../store/serverApi'
import Loader from './main/Loader'
import axios from 'axios';

const Filter =()=>{
  const {data: categorias, isSuccess, isLoading} = useGetCategoriesQuery();

  const [dataOriginal, setDataOriginal] = useState([])
  const [products,setProductos] = useState([])
  const [openFilter, setOpenFilter] = useState(true)
  const [selectedOption, setSelectedOption] = useState("")
  const [nomCategoria,setNomCategoria] = useState('')
  const [Loading, setLoading] = useState(false)
  const [productosPerPage, ] = useState(12)
  const [currentPage, setCurrentPage] = useState(1)
  const totalProducts = products.length
  
  const lastIndex = currentPage * productosPerPage
  const firstIndex = lastIndex - productosPerPage

  useEffect(() => {
    window.addEventListener('resize', () => {
      const viewport = window.innerWidth
      if(viewport >= 1024) return setOpenFilter(true)
      })
  })

  useEffect(()=>{
    getProducts()
  },[])

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2500);
  },[])

  const handleOnChange = (e) =>{
    let temp = parseInt(e.target.value)
    if(temp ===0){
      setProductos(dataOriginal)
    }else{
      setSelectedOption(temp)
      let res = dataOriginal.filter(product => product.category.id === temp)
      let cat = categorias.filter(cat => cat.id===temp)
      setProductos(res)
      setNomCategoria(cat[0].name)
    }
    const viewport = window.innerWidth
    if(viewport <= 1024) return setOpenFilter(false)
  }

  const handleOnSearch = (e) =>{
    let temp = e.target.value
    if(temp === '')
      setProductos(dataOriginal)
    else{
      let res = dataOriginal.filter(product => product.name.toLowerCase().includes(temp))
      if(res.length ===0)
        setProductos("Vacio")
      else
        setProductos(res)
    }
  }

  const getProducts = async ()=>{
    await axios.get(`https://api-gateway-production-d841.up.railway.app/api/public/product/all`)
      .then(response => {
        setProductos(response.data)
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
          <h2 className="text-2xl text-ternary-60 font-bold">Búsqueda de Productos</h2>
          <div className="flex items-center space-x-5">
            <div className="hidden lg:inline-block relative">
              <input type="search" id="search" name="search"
                placeholder="Buscar"
                className="form-input pl-11 pr-5 w-72 block shadow-sm rounded-full border-gray-300 bg-gray-50 text-sm placeholder-gray-300 focus:border-primary-100 focus:ring-1 focus:ring-blue-300"
                onChange={handleOnSearch}
              />
              <span className="absolute top-1/2 left-3 text-gray-400 transform -translate-y-1/2">
                <BiSearch className="w-4 h-4" />
              </span>
            </div>
            <div className="lg:hidden inline-block relative">
              <p>{nomCategoria}</p>
            </div>
            <button className="lg:hidden text-gray-400 hover:text-blue-400" onClick={() => setOpenFilter(!openFilter)}>
              <FaFilter className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className={`z-10 lg:hidden absolute inset-0 bg-gray-500 bg-opacity-75 ${openFilter ? "visible" : "invisible"}`} />
        
        <div className={`z-10 col-span-1 absolute top-0 right-0 lg:inset-0 lg:relative w-full h-full max-h-full max-w-xs  bg-gray-50 transition-all duration-300 ease-in-out transform ${openFilter ? "translate-x-0 opacity-100" : "translate-x-full opacity-100 hidden"}`}>
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
            <p className='text-gray-700 font-bold mb-3'>Categorías Disponibles</p>
            <ul className="flex flex-col items-start space-y-2">
            {isLoading && <Loader />}
              {isSuccess && (
                categorias.map(category => (
                  <div key={category.id} className="m-1 flex items-center space-x-3">
                    <div>
                      <input type="radio" name="categorias" id={category.name} value={category.id} 
                        onChange={handleOnChange}
                       className="form-radio h-5 w-5 border-gray-300 rounded-full text-green-400 focus:text-green-400 " />
                    </div>
                    <span className="text-base text-gray-700 font-medium hover:text-green-400">{category.name}</span>
                  </div>
                ))
              )}
              {selectedOption !== "" && (
                <div className="m-1 pt-4 flex items-center space-x-3">
                  <div>
                    <input type="radio" name="categorias" value={0} 
                      onChange={handleOnChange} 
                    className="form-radio h-5 w-5 border-gray-300 rounded-full text-green-400 focus:text-green-400 " />
                  </div>
                  <span className="text-base text-gray-700 font-medium hover:text-green-400">Todas</span>
                </div>
              )}  
            </ul>
          </div>
        </div>
        <div className="col-span-full lg:col-span-3">
          <div className="border-2 border-gray-200 rounded-lg lg:h-full" >
            {Loading ?  <Loader/> : (
              <>  
                <div className={`${products==='Vacio' ? 'py-40 grid-cols-1 xl:grid-cols-1 text-center' : 'xl:grid-cols-4' } z-0 mx-auto grid max-w-screen-xl grid-cols-2 gap-6 p-6 md:grid-cols-3 `}>
                {products !== "Vacio" ? (
                  products.map( product =>(
                    <ProductCard product={product} key={product.id}/>
                  )).slice(firstIndex,lastIndex)
                  ):(
                    <p>Resultados no encontrados</p>
                )}
                </div>
                {products !== "Vacio" && (   
                  <div className='mt-4'>
                    <Pagination 
                    productosPerPage={productosPerPage} 
                    currentPage={currentPage} 
                    setCurrentPage={setCurrentPage}
                    totalProducts={totalProducts} />
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

export default Filter;