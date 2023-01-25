const Offers = () =>{
    return(   
        <div className="py-12 bg-gray-100">
            <div className="xl:container m-auto space-y-12 px-6 text-gray-500 md:px-12">
                <div>
                    <h2 className="mt-2 text-2xl font-bold text-gray-800 md:text-center dark:text-white md:text-3xl">
                    Servicios que ofrecemos
                    </h2>
                </div>
                <div className="md:mx-2 lg:mx-32 mt-2 grid gap-8 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 text-center">
                    <div className="group relative p-8 rounded-3xl bg-white dark:border-gray-700 dark:bg-gray-800 dark:lg:bg-transparent border border-gray-100 lg:border-transparent hover:border-gray-100 dark:shadow-none dark:hover:border-gray-700 dark:hover:bg-gray-800 shadow-2xl shadow-gray-600/10 lg:shadow-transparent lg:hover:shadow-gray-600/10 sm:gap-8 sm:flex transition duration-300">
                        <div className="relative">
                            <img
                            src="https://cdn-icons-png.flaticon.com/512/950/950237.png"
                            className="w-10 "
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
                            src="https://cdn-icons-png.flaticon.com/512/4341/4341134.png"
                            className="w-10"
                            alt="package-delivery illustration"
                            />
                            <h3 className="mt-8 mb-4 text-xl font-semibold text-gray-800 transition dark:text-white">
                            Third feature
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                            Neque Dolor, alias quae, quibusdam accusantium.
                            </p>
                        </div>
                    </div>
                    <div className="group relative p-8 rounded-3xl bg-white dark:border-gray-700 dark:bg-gray-800 dark:lg:bg-transparent border border-gray-100 lg:border-transparent hover:border-gray-100 dark:shadow-none dark:hover:border-gray-700 dark:hover:bg-gray-800 shadow-2xl shadow-gray-600/10 lg:shadow-transparent lg:hover:shadow-gray-600/10 sm:gap-8 sm:flex transition duration-300">
                        <div className="relative">
                            <img
                            src="https://cdn-icons-png.flaticon.com/512/3262/3262306.png"
                            className="w-10"
                            alt="pago"
                            />
                            <h3 className="mt-8 mb-4 text-xl font-semibold text-gray-800 transition dark:text-white">
                            Pago Seguro
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                            Neque Dolor, alias quae, quibusdam accusantium.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
      </div>                            
    )
}
export default Offers;