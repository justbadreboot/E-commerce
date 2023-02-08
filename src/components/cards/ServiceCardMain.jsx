const ServiceCardMain = ({service}) =>{
    return(
        <a href="/" className="group h-48 md:h-52 flex flex-col bg-gray-100 rounded-lg shadow-lg overflow-hidden relative">
            <img src={service.image} loading="lazy" alt={service.name} className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />
            <div className="bg-gradient-to-t from-gray-800 md:via-transparent to-transparent absolute inset-0 pointer-events-none"></div>
                <div className="relative p-4 mt-auto">
                <span className="block text-white text-sm ">{service.specialty.name}</span>
                <h2 className="text-white text-xl font-bold transition duration-100 mb-2">{service.name}</h2>
                <span className="text-green-300 font-semibold">Agendar Cita</span>
            </div>
        </a>
    )

}

export default ServiceCardMain;