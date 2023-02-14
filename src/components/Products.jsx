import ProductCard from '../components/cards/ProductCard';  
import Loader from "../components/main/Loader"
import Pagination from './main/Pagination';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Products = () =>{

    const [isLoading, setIsLoading] = useState(false)
    const [productos,setProductos] = useState([])
    const [productosPerPage, ] = useState(15)
    const [currentPage, setCurrentPage] = useState(1)
    const totalProducts = productos.length
    
    const lastIndex = currentPage * productosPerPage
    const firstIndex = lastIndex - productosPerPage

    useEffect(()=>{
        getProducts()
    },[])

    useEffect(() => {
        if (productos.length !== 0) {
          setIsLoading(false)
        }
        else{
          setIsLoading(true)
        }
      }, [productos])

    const getProducts = async ()=>{
        await axios.get(`https://product-production-cf12.up.railway.app/api/public/product/all`)
          .then(response => {
            setProductos(response.data)
          })
          .catch(error => {
            console.log(error)
          })
    }
    
    return(
        <section className="pt-10 px-4 font-poppins">
            <div className="mb-6">
                <h1 className="mb-6 text-center text-3xl font-bold text-gray-700">
                    Todos <span className="text-primary-100">Nuestros </span>  Productos
                </h1>
                <p className="mt-2 max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">Conoce todos los productos que tenemos disponibles para ti.</p>
            </div>
            {isLoading ? <Loader/> : (
                <>
                    <div
                    data-aos="fade-up"
                    data-aos-duration="1200" 
                    className="mx-auto grid max-w-screen-xl grid-cols-2 gap-6 p-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                        {productos.map( product =>(
                            <ProductCard product={product} key={product.id} />
                        )).slice(firstIndex,lastIndex)}
                    </div>
                    <div className='mt-4'>
                        <Pagination 
                        productosPerPage={productosPerPage} 
                        currentPage={currentPage} 
                        setCurrentPage={setCurrentPage}
                        totalProducts={totalProducts} />
                    </div>
                </>
            )}
                
        </section>
    )
}

export default Products;