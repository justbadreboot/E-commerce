const mainServices = () =>{
    return(   
        <div className="py-12 bg-gray-100">
            <div className="xl:container m-auto space-y-12 px-6 text-gray-500 md:px-12">
                <div className="md:mx-2 lg:mx-32 mt-2 grid gap-8 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 text-center">
                    <div className="group relative p-8 rounded-3xl bg-white dark:border-gray-700 dark:bg-gray-800 dark:lg:bg-transparent border border-gray-100 lg:border-transparent hover:border-gray-100 dark:shadow-none dark:hover:border-gray-700 dark:hover:bg-gray-800 shadow-2xl shadow-gray-600/10 lg:shadow-transparent lg:hover:shadow-gray-600/10 sm:gap-8 sm:flex transition duration-300">
                        <div className="relative">
                            <img
                            src="https://cdn-icons-png.flaticon.com/512/950/950237.png"
                            className="w-16 inline-block"
                            alt="atencion"
                            />
                            <h3 className="mt-8 mb-4 text-xl font-semibold text-gray-800 transition dark:text-white">
                                Atención 24/7
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Brindamos servicio al cliente las 24 horas del día
                            </p>
                        </div>
                    </div>
                    
                    <div className="group relative p-8 rounded-3xl bg-white dark:border-gray-700 dark:bg-gray-800 dark:lg:bg-transparent border border-gray-100 lg:border-transparent hover:border-gray-100 dark:shadow-none dark:hover:border-gray-700 dark:hover:bg-gray-800 shadow-2xl shadow-gray-600/10 lg:shadow-transparent lg:hover:shadow-gray-600/10 sm:gap-8 sm:flex transition duration-300">
                        <div className="relative">
                            <img
                            src="https://cdn-icons-png.flaticon.com/512/411/411712.png"
                            className="w-16 inline-block"
                            alt="package-delivery illustration"
                            />
                            <h3 className="mt-8 mb-4 text-xl font-semibold text-gray-800 transition dark:text-white">
                                Envíos a todo el país
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Recibe tus productos en cualquier lugar que te encuentres
                            </p>
                        </div>
                    </div>
                    <div className="group relative p-8 rounded-3xl bg-white dark:border-gray-700 dark:bg-gray-800 dark:lg:bg-transparent border border-gray-100 lg:border-transparent hover:border-gray-100 dark:shadow-none dark:hover:border-gray-700 dark:hover:bg-gray-800 shadow-2xl shadow-gray-600/10 lg:shadow-transparent lg:hover:shadow-gray-600/10 sm:gap-8 sm:flex transition duration-300">
                        <div className="relative">
                            <img
                            src="https://cdn-icons-png.flaticon.com/512/3262/3262306.png"
                            className="w-16 inline-block"
                            alt="pago"
                            />
                            <h3 className="mt-8 mb-4 text-xl font-semibold text-gray-800 transition dark:text-white">
                                Pago Seguro
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Contamos con plataformas seguras para pagos con tarjetas
                            </p>
                        </div>
                    </div>
                </div>
            </div>
      </div>                            
    )
}
export default mainServices;