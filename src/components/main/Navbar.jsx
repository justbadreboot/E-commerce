import { Link, NavLink, useNavigate} from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import logo2 from '../../assets/img/logo2.png';
import { useEffect, useState } from "react";
import firestore from '../../helpers/firebaseConfig';
import { collection, onSnapshot } from 'firebase/firestore';
import  {FaUserAlt} from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser } from '../../store/userSlice';

const Navbar = () =>{

    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [count, setCount] = useState("")
    const user = useSelector((state) => state.users.currentUser);

    const navigate = useNavigate()
    const collectionName =  'cart '+ user

    useEffect ( ()=>{
        const getItemsCount = onSnapshot(collection(firestore,collectionName), snapshot =>{
            let items = 0
            snapshot.docs.map(doc =>  items += doc.data().cantidad)
            setCount(items)
        },(error) => {
            console.log(error)
        })
        return () =>{
            if(user)
                getItemsCount()
        }
    },[collectionName,user])

    const handleOnClick =()=>{
        localStorage.removeItem("token")
        localStorage.removeItem("currentUser")
        dispatch(setCurrentUser(null));
        navigate("/")
    } 
    
    return(
        <div className=" bg-gray-200 h-full w-full font-poppins">
            <nav className="bg-primary-100 shadow xl:block hidden">
                <div className="mx-auto container px-6 xl:py-2">
                    <div className="flex items-center justify-between">
                        <div className="flex w-full sm:w-auto items-center sm:items-stretch justify-end sm:justify-start">
                            <Link to="/">
                                <img className='w-48 ml-6' src={logo} alt="KrugerMed" />
                            </Link>
                        </div>
                        <div className="flex">
                            <div className="hidden xl:flex md:mr-6 xl:mr-16 ">
                                <div className="flex px-5 items-center py-6 text-lg leading-5 text-white hover:text-gray-600 hover:bg-primary-40 focus:outline-none transition duration-150 ease-in-out">
                                    <div className="dropdown dropdown-hover">
                                        <label tabIndex="0" className="py-6">Productos</label>
                                        <ul tabIndex="0" className="menu dropdown-content rounded-lg p-2 shadow text-gray-800 bg-primary-20 w-44 mt-4">
                                            <li><Link className='text-sm active:bg-green-400' to='/productos'>Ver todos</Link></li> 
                                            <li><Link className='text-sm active:bg-green-400' to='/buscarProductos'>Buscar</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex px-5 items-center py-6 text-lg leading-5 text-white hover:text-gray-600 hover:bg-primary-40 focus:outline-none transition duration-150 ease-in-out">
                                    <div className="dropdown dropdown-hover">
                                        <label tabIndex="0" className="py-6">Servicios</label>
                                        <ul tabIndex="0" className="menu dropdown-content rounded-lg p-2 shadow text-gray-800 bg-primary-20 w-44 mt-4">
                                            <li><Link className='text-sm active:bg-green-400' to='/servicios'>Ver todos</Link></li> 
                                            <li><Link className='text-sm active:bg-green-400' to='/buscarServicios'>Buscar</Link></li>
                                            <li><Link className='text-sm active:bg-green-400' to='/doctores'>Doctores</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex px-5 items-center py-6 text-lg leading-5 text-white hover:text-gray-600 hover:bg-primary-40 focus:outline-none transition duration-150 ease-in-out">
                                    <div className="dropdown dropdown-hover">
                                        <label tabIndex="0" className="py-6">Nosotros</label>
                                        <ul tabIndex="0" className="menu dropdown-content rounded-lg p-2 shadow text-gray-800 bg-primary-20 w-44 mt-4">
                                            <li><Link className='text-sm active:bg-green-400' to='/nosotros'>Equipo</Link></li> 
                                        </ul>
                                    </div>
                                </div>
                                <NavLink to='/contacto' className="flex px-5 items-center py-6 text-lg leading-5 text-white hover:text-gray-600 hover:bg-primary-40 focus:outline-none transition duration-150 ease-in-out">Contacto</NavLink>
                            </div>
                            <div className="hidden xl:flex items-center px-10">
                                <Link to="/carrito">
                                    <button className=" hidden md:flex items-center text-white" >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 hover:text-secondary-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                        {user && (
                                            <span className="flex absolute -mt-5 ml-4">
                                                <span className="badge animate-ping absolute inline-flex badge-sm p-2 rounded-full bg-secondary-40 opacity-75"></span>
                                                <span className="badge badge-sm relative inline-flex rounded-full p-2 indicator-item bg-secondary-100 border-secondary-100">{count}</span>
                                            </span>
                                        )}
                                    </button>
                                </Link>
                                {user ? ( 
                                    <div className="dropdown dropdown-end">
                                        <label tabIndex="0" className="flex items-center text-white cursor-pointer ml-6">
                                            <FaUserAlt className='w-5 h-5 hover:text-secondary-80' />
                                        </label>
                                        <ul tabIndex="0" className="mt-2 p-2 menu menu-compact rounded-lg dropdown-content w-52 bg-primary-20 shadow">
                                            <li><Link  className='active:bg-green-400' to='/perfil'>Perfil</Link></li>
                                            <li><div className='active:bg-green-400' onClick={()=> handleOnClick()}>Cerrar Sesión</div></li> 
                                        </ul>
                                    </div>
                                ): (
                                    <Link to="/login">
                                        <button className="flex items-center ml-5 text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 hover:text-secondary-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </button>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <nav >
                <div className="py-2 px-6 w-full flex xl:hidden justify-between items-center  bg-primary-100 z-40">
                    <div className="w-48">
                        <Link to="/">
                            <img src={logo} alt='KrugerMed' />
                        </Link>
                    </div>
                    <div className="flex items-center">
                        <div id="menu" className="text-gray-800" >
                            {show ? (
                                ""
                            ) : (
                                <>
                                    <div className="flex items-center px-6">
                                        <Link to="/carrito">
                                            <button className="  items-center text-white" >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 hover:text-secondary-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                                </svg>
                                                <span className="flex absolute -mt-5 ml-4">
                                                    <span className="badge animate-ping absolute inline-flex badge-sm p-2 rounded-full bg-secondary-40 opacity-75"></span>
                                                    <span className="badge badge-sm relative inline-flex rounded-full p-2 indicator-item bg-secondary-100 border-secondary-100">{count}</span>
                                                </span>
                                            </button>
                                        </Link>
                                        {user ? ( 
                                            <div className=" hidden sm:flex dropdown dropdown-end">
                                                <label tabIndex="0" className="flex items-center text-white cursor-pointer ml-6">
                                                    <FaUserAlt className='w-5 h-5 hover:text-secondary-80' />
                                                </label>
                                                <ul tabIndex="0" className="mt-2 p-2 menu menu-compact rounded-lg dropdown-content w-52 bg-primary-20 shadow">
                                                    <li><Link className='text-sm active:bg-green-400' to='/perfil'>Perfil</Link></li>
                                                    <li><div className='text-sm active:bg-green-400' onClick={()=> handleOnClick()}>Cerrar Sesión</div></li> 
                                                </ul>
                                            </div>
                                        ): (
                                            <Link to="/login" className='hidden sm:flex'>
                                                <button className="flex items-center ml-5 text-white">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 hover:text-secondary-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                </button>
                                            </Link>
                                        )}
                                        <button  className="flex items-center ml-5 text-white" onClick={() => setShow(!show)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white hover:text-secondary-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                            </svg>
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
                {/*Mobile responsive sidebar*/}
                <div className={show ? "w-full xl:hidden h-full max-h-full absolute z-40 transform top-0 right-0 translate-x-0 " : " w-full xl:hidden h-full absolute z-40 transform max-h-full -translate-x-full"}>
                    <div className="bg-gray-700 opacity-50 w-full h-full " onClick={() => setShow(!show)} />
                    <div className="w-72 fixed  z-40 top-0 bg-gray-200 shadow h-full flex-col justify-between xl:hidden pb-4 transition duration-150 ease-in-out" >
                        <div className="px-6 h-full">
                            <div className="flex flex-col justify-between h-full w-full">
                                <div>
                                    <div className="mt-4 flex w-full items-center justify-between">
                                        <div className="flex items-center justify-between w-full">
                                            <Link to="/">
                                                <div className="flex items-center">
                                                    <img src={logo2} alt='Kruger' className='w-40' />
                                                </div>
                                            </Link>
                                            <div id="cross" className="text-gray-800 cursor-pointer" onClick={() => setShow(!show)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <line x1={18} y1={6} x2={6} y2={18} />
                                                    <line x1={6} y1={6} x2={18} y2={18} />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <ul className="f-m-m">
                                        <ul className='pt-5 ml-4'>
                                            <h2 className='font-semibold'>Productos</h2>
                                            <li className='pt-3 cursor-pointer '>
                                                <NavLink to="/productos">
                                                    <div className="flex items-center justify-between">
                                                        <p className="text-gray-800 text-base ml-3 hover:text-primary-100 hover:font-bold">Ver todos</p>
                                                    </div>
                                                </NavLink>
                                            </li>
                                            <li className='pt-3 cursor-pointer '>
                                                <NavLink to="/buscarProductos">
                                                    <div className="flex items-center justify-between">
                                                        <p className="text-gray-800 text-base ml-3 hover:text-primary-100 hover:font-bold">Buscar</p>
                                                    </div>
                                                </NavLink>
                                            </li>
                                        </ul>
                                        <ul className='pt-6 ml-4'>
                                            <h2 className='font-semibold'>Servicios Médicos</h2>
                                            <li className='pt-3 cursor-pointer'>
                                                <NavLink to="/servicios">
                                                    <div className="flex items-center justify-between">
                                                        <p className="text-gray-800 text-base ml-3 hover:text-primary-100 hover:font-bold">Ver todos</p>
                                                    </div>
                                                </NavLink>
                                            </li>
                                            <li className='pt-3 cursor-pointer'>
                                                <NavLink to="/buscarServicios">
                                                    <div className="flex items-center justify-between">
                                                        <p className="text-gray-800 text-base ml-3 hover:text-primary-100 hover:font-bold">Buscar</p>
                                                    </div>
                                                </NavLink>
                                            </li>
                                        </ul>
                                        <li className='pt-6 cursor-pointer font-semibold'>
                                            <NavLink to="/doctores">
                                                <div className="flex items-center justify-between">
                                                    <p className="text-gray-800 text-base ml-3 hover:text-primary-100 hover:font-bold">Doctores</p>
                                                </div>
                                            </NavLink>
                                        </li>
                                        <li className='pt-5 cursor-pointer font-semibold'>
                                            <NavLink to="/nosotros">
                                                <div className="flex items-center justify-between">
                                                    <p className="text-gray-800 text-base ml-3 hover:text-primary-100 hover:font-bold">Nuestro Equipo</p>
                                                </div>
                                            </NavLink>
                                        </li>
                                        <li className='pt-5 cursor-pointer font-semibold'>
                                            <NavLink to="/contacto">
                                                <div className="flex items-center justify-between">
                                                    <p className="text-gray-800 text-base ml-3 hover:text-primary-100 hover:font-bold">Contacto</p>
                                                </div>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                                <div className="w-full pb-4">
                                    <div className="border-t border-gray-300">
                                        <Link to="/carrito">
                                            <div className="w-full flex items-center justify-between pt-6">
                                                <div className="flex items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                                    </svg>
                                                    <p className=" text-gray-800 text-base leading-4 ml-2 hover:text-secondary-100 ">Carrito de Compras</p>
                                                </div>
                                            </div>
                                        </Link>
                                        {user ? (
                                            <>
                                            <Link to="/perfil">
                                                <div className="w-full flex items-center justify-between pt-8">
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                        <p className=" text-gray-800 text-base leading-4 ml-2 hover:text-secondary-100">Mi perfil</p>
                                                    </div>
                                                </div>
                                            </Link>
                                            <div onClick={()=> handleOnClick()} className="w-full flex items-center justify-between pt-8">
                                                <div className="flex items-center">
                                                    <p className=" text-gray-800 text-sm leading-4 ml-2 hover:text-secondary-100">Cerrar Sesión</p>
                                                </div>
                                            </div>
                                            </>
                                        ) : (
                                            <Link to="/login">
                                                <div className="w-full flex items-center justify-between pt-8">
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                        <p className=" text-gray-800 text-base leading-4 ml-2 hover:text-secondary-100">Login</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;