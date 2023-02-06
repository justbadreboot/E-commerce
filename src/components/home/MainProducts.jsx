import { useGetProductsQuery } from '../../store/serverApi';
import ProductCard from '../cards/ProductCard';
import ViewMore from '../main/ViewMore'
import Loader from "../../components/main/Loader"
import { Link } from 'react-router-dom';

const MainProducts = () =>{

    const {data: products, isLoading, isFetching, isSuccess} = useGetProductsQuery();

    return(
        <section className="py-10 font-poppins">
            <h1 className="mb-6 text-center text-4xl font-bold text-gray-900">
                <span className="text-primary-100">Nuevos </span>Productos
            </h1>
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