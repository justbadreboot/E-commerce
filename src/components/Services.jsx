import axios from 'axios';
import { useEffect, useState } from 'react';
import ServiceCard from './cards/ServiceCard';
import Loader from './main/Loader';
import Pagination from './main/Pagination';

const Services = () =>{

    const [servicios,setServicios] = useState([])
    const [Loading, setLoading] = useState(false)
    const [serviciosPerPage, ] = useState(9)
    const [currentPage, setCurrentPage] = useState(1)
    const totalServicios = servicios.length

    const lastIndex = currentPage * serviciosPerPage
    const firstIndex = lastIndex - serviciosPerPage

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

    const getServices = async ()=>{
        await axios.get(`https://api-gateway-production-d841.up.railway.app/api/public/service`)
        .then(response => {
            setServicios(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }

    return(
        <section className="pt-10 px-4 font-poppins">
            <div className="mb-6">
                <h1 className="mb-6 text-center text-3xl font-bold text-gray-700">
                    Todos <span className="text-primary-100">Nuestros </span>  Servicios
                </h1>
                <p className="mt-2 max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">Conoce todos los servicios médicos que tenemos disponibles para ti.</p>
            </div>
            {Loading ? <Loader /> : (
                <>
                    <div className='mx-auto grid max-w-screen-xl grid-cols-1 gap-6 p-4 sm:grid-cols-2 lg:grid-cols-3'>
                        {servicios.map(service => (
                            <ServiceCard service={service} key={service.id} />
                        )).slice(firstIndex,lastIndex)}
                    </div>
                    <div className='mt-4'>
                        <Pagination
                        productosPerPage={serviciosPerPage} 
                        currentPage={currentPage} 
                        setCurrentPage={setCurrentPage}
                        totalProducts={totalServicios} />
                    </div>
                </>
            )}
           
        </section>
    )
}

export default Services;