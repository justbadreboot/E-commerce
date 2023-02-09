import { useGetDoctorsQuery } from "../store/serverApi";
import DoctorCard from "./cards/DoctorCard";
import Loader from './main/Loader';

const Doctors =()=>{
    const {data: doctores, isLoading, isFetching, isSuccess} = useGetDoctorsQuery();

    return(
        <section className="pt-10 px-4 font-poppins">
            <div className="mb-6">
                <h1 className="mb-6 text-center text-3xl font-bold text-gray-700">
                    Todos <span className="text-primary-100">Nuestros </span>  Doctores
                </h1>
                <p className="mt-2 max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">Conoce a nuestro equipo médico</p>
            </div>
            {(isLoading || isFetching) && <Loader />}
            <div className='mx-auto grid max-w-screen-xl grid-cols-2 gap-6 p-4 md:grid-cols-3'>
                {isSuccess && (
                    doctores.map(doctor => (
                        <DoctorCard doctor={doctor} key={doctor.id} />
                    ))
                )}
            </div>
        </section>
    )

}
export default Doctors;