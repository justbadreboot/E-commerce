import Pagination from '../components/main/Pagination'
import { useGetServicesQuery } from '../store/serverApi';
import ServiceCard from './cards/ServiceCard';
import Loader from './main/Loader';

const Services = () =>{
    const {data: services, isLoading, isFetching, isSuccess} = useGetServicesQuery();

    return(
        <section className="pt-10 px-4 font-poppins">
            <div className="mb-6">
                <h1 className="mb-6 text-center text-3xl font-bold text-gray-700">
                    Todos <span className="text-primary-100">Nuestros </span>  Servicios
                </h1>
                <p className="mt-2 max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">Conoce todos los servicios médicos que tenemos disponibles para ti.</p>
            </div>
            <div className='mx-auto grid max-w-screen-xl grid-cols-1 gap-6 p-4 sm:grid-cols-2 lg:grid-cols-3'>
                {(isLoading || isFetching) && <Loader />}
                {isSuccess && (
                    services.map(service => (
                        <ServiceCard service={service} key={service.id} />
                    ))
                )}
            </div>
            <div className='mt-4'>
                <Pagination />
            </div>
        </section>
    )
}

export default Services;