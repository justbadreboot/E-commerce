import { Link } from "react-router-dom";
import { useGetServicesMainQuery } from "../../store/serverApi";
import ServiceCardMain from "../cards/ServiceCardMain";
import Loader from "../main/Loader";
import ViewMore from "../main/ViewMore";

const MainMedServices = () =>{
    const {data: services, isLoading, isFetching, isSuccess} = useGetServicesMainQuery();

    return(
        <div className="bg-white py-6 sm:py-8 lg:py-12 font-poppins mt-8 md:mt-4">
            <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
                <div className="mb-10 md:mb-16">
                    <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Servicios <span className="text-primary-100">Médicos</span></h2>
                    <p className="mt-2 max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">Nuestros servicios están diseñados para satisfacer sus necesidades de atención médica y ayudarlo a mantener un estilo de vida saludable.</p>
                </div>
                <div className='mb-2 md:mb-4 md:mr-20'>
                    <Link to='/servicios'>
                        <ViewMore />
                    </Link>    
                </div>
                {(isLoading || isFetching) && <Loader />}
                {isSuccess && (
                    <div 
                    data-aos="fade-up"
                    data-aos-duration="1500" 
                    className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8">
                    {services.map( service =>(
                        <ServiceCardMain service={service} key={service.id} />
                    ))}
                </div>
                )}
            </div>
        </div>
    )

}

export default MainMedServices;