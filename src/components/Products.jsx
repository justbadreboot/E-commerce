import { useGetProductsQuery } from '../store/serverApi';
import ProductCard from '../components/cards/ProductCard';  
import Loader from "../components/Loader"
import Pagination from './Pagination';

const Products = () =>{
    const {data: products, isLoading, isFetching, isSuccess} = useGetProductsQuery();

    return(
        <section className="py-10 px-4 font-poppins">
        <h1 className="mb-6 text-center text-3xl font-bold text-gray-900">
            Todos <span className="text-primary-100">Nuestros </span>  Productos
        </h1>
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