import doctor from '../assets/img/doc.png';

const Cta = () =>{
    return(
        <div class="bg-primary-20 dark:bg-green-900/10 py-8">
            <div class="container m-auto space-y-8 px-6 md:px-12 lg:px-20">
                <div class="items-center justify-center gap-16 text-center md:flex md:text-left">
                    <div class="order-last mb-6 space-y-6 md:mb-0 md:w-7/12 lg:w-6/12">
                        <h1 class="text-4xl font-bold text-primary-100 md:text-5xl dark:text-white">Conoce a Nuestros Doctores</h1>
                        <p class="text-lg text-gray-600 dark:text-gray-300">
                            Contamos con los mejores especialistas para cuidar de ti.
                        </p>
                        <div class="flex flex-wrap gap-6">
                            <a
                                href="#"
                                class="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max">
                                <span class="relative text-base font-semibold text-primary dark:text-white">Ver todos</span >
                            </a>
                        </div>
                    </div>
                    <img src={doctor} class="m-auto md:w-3/12" loading="lazy" alt="doctor" />
                </div>
            </div>
        </div>                            
    )
}
export default Cta;