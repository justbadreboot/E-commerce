import cara from '../assets/img/caraKm.png'
import { NavLink} from 'react-router-dom';

const Footer = () =>{
    return( 
        <footer>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-full" viewBox="0 0 1367.743 181.155">
                <path
                className="fill-current text-gray-100 dark:text-gray-800"
                id="wave"
                data-name="wave"
                d="M0,0S166.91-56.211,405.877-49.5,715.838,14.48,955.869,26.854,1366,0,1366,0V115H0Z"
                transform="translate(0 130)"
                ></path>
            </svg>
            <div className="bg-gradient-to-b from-gray-100 to-transparent dark:from-gray-800 dark:to-transparent -pt-32">
                <div className="container m-auto space-y-8 px-6 text-gray-600 dark:text-gray-400 md:px-2 lg:px-20">
                    <div className="grid grid-cols-8 gap-6 md:gap-0">
                        <div className="col-span-8 border-r border-gray-100 dark:border-gray-800 md:col-span-2 lg:col-span-3">
                            <div className="flex items-center justify-between gap-6 border-b border-white dark:border-gray-800 py-6 md:block md:space-y-6 md:border-none md:py-0" >
                                <img src={cara} alt="KrugerMed" className="w-40 dark:brightness-200 dark:grayscale" />
                                <div className="flex">
                                    <form action="">
                                        <label for="newsletter" className="text-lg font-semibold capitalize text-gray-900 dark:text-gray-200">Subscríbete a nuestro Newsletter</label>
                                        <div className="relative mt-4 input-group">
                                            <input
                                                type="email"
                                                name="newsletter"
                                                id="newsletter"
                                                placeholder="Correo"
                                                className=" input input-bordered invalid:outline-none placeholder-gray-600 dark:placeholder-white rounded-3xl w-full bg-gray-100 dark:bg-gray-900 px-12 py-3  invalid:ring-red-400"
                                             />
                                            <button
                                                type="submit"
                                                title="Submit"
                                                className="btn absolute right-0 w-max rounded-r-3xl bg-primary-100 py-3 px-3 text-center transition">
                                                Enviar
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-8 md:col-span-6 lg:col-span-5">
                            <div className="grid grid-cols-2 gap-6 pb-16 sm:grid-cols-3 md:pl-16">
                                <div>
                                    <h6 className="text-lg font-bold text-primary-100 dark:text-gray-200">Sobre Nosotros</h6>
                                    <ul className="mt-4 list-inside space-y-4">
                                        <li>
                                            <NavLink to='/about'className="transition hover:text-cyan-500">¿Quiénes somos?</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='/about'className="transition hover:text-cyan-500">Nuestro equipo</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='/about'className="transition hover:text-cyan-500">Contáctanos</NavLink>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h6 className="text-lg font-bold text-primary-100 dark:text-gray-200">Catálogo de Productos</h6>
                                    <ul className="mt-4 list-inside space-y-4">
                                        <li>
                                            <NavLink to='/about'className="transition hover:text-cyan-500">Medicamentos</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='/about'className="transition hover:text-cyan-500">Accesorios</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='/about'className="transition hover:text-cyan-500">Kits</NavLink>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h6 className="text-lg font-bold text-primary-100 dark:text-gray-200">Servicos Médicos</h6>
                                    <ul className="mt-4 list-inside space-y-4">
                                        <li>
                                            <NavLink to='/about'className="transition hover:text-cyan-500">Exámenes</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='/about'className="transition hover:text-cyan-500">Especialidades</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='/about'className="transition hover:text-cyan-500">Doctores</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex justify-between border-t border-gray-100 dark:border-gray-800 py-4 pb-4 md:pl-8">
                                <span>&copy; KrugerMed - <span id="year">2023</span> </span>
                                <span>Todos los derechos reservados</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer> 
    )

}
export default Footer;