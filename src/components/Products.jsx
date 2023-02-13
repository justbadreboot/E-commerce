import { useGetProductsQuery } from '../store/serverApi';
import ProductCard from '../components/cards/ProductCard';  
import Loader from "../components/main/Loader"
import Pagination from './main/Pagination';

const Products = () =>{
    const {data: products, isLoading, isFetching, isSuccess} = useGetProductsQuery();

    return(
        <section className="pt-10 px-4 font-poppins">
            <div className="mb-6">
                <h1 className="mb-6 text-center text-3xl font-bold text-gray-700">
                    Todos <span className="text-primary-100">Nuestros </span>  Productos
                </h1>
                <p className="mt-2 max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">Conoce todos los productos que tenemos disponibles para ti.</p>
            </div>
            {((isLoading || isFetching)) && <Loader /> }
            {isSuccess && (
                <div
                data-aos="fade-up"
                data-aos-duration="1200" 
                className="mx-auto grid max-w-screen-xl grid-cols-2 gap-6 p-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    {products.map( product =>(
                        <ProductCard product={product} key={product.id} />
                    ))}
                </div>
            )}
            <div className='mt-4'>
                <Pagination />
            </div>
        </section>
    )
}

export default Products;