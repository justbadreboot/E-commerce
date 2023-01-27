const mainServices = () =>{
    const services = [
        {
            id:1,
            img:"https://cdn-icons-png.flaticon.com/512/950/950237.png",
            nombre:"Atención 24/7",
            descripcion:"Brindamos servicio al cliente las 24 horas del día",
        },
        {
            id:2,
            img:"https://cdn-icons-png.flaticon.com/512/411/411712.png",
            nombre:"Envíos a todo el país",
            descripcion:"Recibe tus productos en cualquier lugar que te encuentres",
        },
        {
            id:3,
            img:"https://cdn-icons-png.flaticon.com/512/3262/3262306.png",
            nombre:"Pago Seguro",
            descripcion:"Contamos con plataformas seguras para pagos con tarjetas",
        },
    ]

    return(   
        <div className="py-2 bg-gray-100">
            <div className="xl:container m-auto space-y-4 px-6 text-gray-500 md:px-12">
                <div className="md:mx-2 lg:mx-32 grid gap-8 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 text-center">
                    {services.map( service =>{
                        return(
                            <div key={service.id} className="group relative px-8 py-6 rounded-3xl  dark:border-gray-700 dark:bg-gray-800 dark:lg:bg-transparent border border-gray-100 lg:border-transparent hover:border-gray-100 dark:shadow-none dark:hover:border-gray-700 dark:hover:bg-gray-800 shadow-2xl shadow-gray-600/10 lg:shadow-transparent lg:hover:shadow-gray-600/10 sm:gap-8 sm:flex transition duration-300">
                            <div className="relative">
                                <img src={service.img} className="w-16 inline-block" alt={service.nombre} />
                                <h3 className="m-4 text-xl font-semibold text-gray-800 transition dark:text-white">{service.nombre}</h3>
                                <p className="text-gray-600 dark:text-gray-300">{service.descripcion}</p>
                            </div>
                        </div> 
                        )
                    })}
                </div>
            </div>
      </div>                            
    )
}
export default mainServices;