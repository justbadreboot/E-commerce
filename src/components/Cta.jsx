import { NavLink } from 'react-router-dom';
import doctor from '../assets/img/doc.png';

const Cta = () =>{
    return(
        <div className="bg-primary-20 dark:bg-green-900/10 py-8">
            <div className="container m-auto space-y-8 px-6 md:px-12 lg:px-20">
                <div className="items-center justify-center gap-16 text-center md:flex md:text-left">
                    <div className="order-last mb-6 space-y-6 md:mb-0 md:w-7/12 lg:w-6/12">
                        <h1 className="text-4xl font-bold text-primary-100 lg:text-5xl dark:text-white">Conoce a Nuestros Doctores</h1>
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                            Contamos con los mejores especialistas para cuidar de ti.
                        </p>
                        <div className="flex flex-wrap gap-6">
                            <NavLink to="/"
                                className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max">
                                <span className="relative text-base font-semibold text-primary dark:text-white">Ver todos</span >
                            </NavLink>
                        </div>
                    </div>
                    <img src={doctor} className="m-auto w-64 md:w-3/12" loading="lazy" alt="doctor" />
                </div>
            </div>
        </div>                            
    )
}
export default Cta;