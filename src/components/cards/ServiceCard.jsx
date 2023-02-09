import Appointment from "../Appointment";

const ServiceCard = ({service}) =>{
    return(
        <>
            <div className="h-full border-1 bg-gray-100 border-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl font-poppins">
                <img className="lg:h-48 md:h-40 w-full h-40 object-cover object-center" src={service.image} alt={service.name} />
                <div className="mt-2 py-4 px-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-2 uppercase">{service.specialty.name}</h2>
                    <h1 className="title-font text-lg font-semibold text-gray-700 mb-3">{service.name}</h1>
                    <p className="leading-relaxed mb-3 text-sm">{service.description}</p>
                    <div className="flex items-center flex-wrap ">
                        <label htmlFor="cita" className="cursor-pointer text-green-400 inline-flex font-semibold items-center md:mb-2 lg:mb-0">Agendar cita
                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                            </svg>
                        </label>
                        <Appointment serviceID={service.id} /> 
                        <span className="text-gray-800 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none pr-2 py-1">
                            ${service.price}
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ServiceCard;