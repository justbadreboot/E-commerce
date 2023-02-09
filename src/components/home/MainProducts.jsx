import { useGetProductsMainQuery, useGetProductsQuery } from '../../store/serverApi';
import ProductCard from '../cards/ProductCard';
import ViewMore from '../main/ViewMore'
import Loader from "../../components/main/Loader"
import { Link } from 'react-router-dom';

const MainProducts = () =>{

    const {data: products, isLoading, isFetching, isSuccess} = useGetProductsMainQuery()

    return(
        <section className="py-10 font-poppins">
            <h1 className="mb-6 text-center text-2xl xl:text-3xl font-bold text-gray-900">
                <span className="text-primary-100">Nuevos </span>Productos
            </h1>
            <p className="mb-6 mt-2 max-w-screen-md text-gray-500 md:text-lg text-center mx-4 sm:mx-auto">Nuestros servicios están diseñados para satisfacer sus necesidades de atención médica y ayudarlo a mantener un estilo de vida saludable.</p>
            <div className='mb-2 md:mb-0 md:mr-20'>
                <Link to='/productos'>
                    <ViewMore />    
                </Link>
            </div>
            {((isLoading || isFetching)) && <Loader /> }
            {isSuccess && (
                <div
                data-aos="fade-up"
                data-aos-duration="1200" 
                className="mx-auto grid max-w-screen-xl grid-cols-2 gap-6 p-6 md:grid-cols-3 lg:grid-cols-4">
                    {products.map( product =>(
                        <ProductCard product={product} key={product.id} />
                    ))}
                </div>
            )}
        </section>
    )
}

export default MainProducts;