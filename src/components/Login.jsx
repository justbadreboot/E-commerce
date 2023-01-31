import { useState } from 'react'
import login from '../assets/img/Login.png';
import kruger from '../assets/img/kruger.png';

const Login = () =>{
    const [isForm, setIsForm] = useState({
        login : true,
        register : false,
    })
    const handleSubmitLogIn = (e) => {
        e.preventDefault()
    }
    const handleSubmitSignUp = (e) => {
        e.preventDefault()
    }
    const getPosition = () => {
        return isForm.login ? "top-full"
        : isForm.register ? "top-0"
        : null
    }
    
    return(
        <div className="relative w-full py-8 px-5 flex flex-col items-center font-poppins">
            <div className="relative z-10 max-w-6xl w-full md:w-3/4 grid grid-cols-7 bg-primary-40 overflow-hidden rounded-lg shadow-xl">
                <div className="hidden md:block md:col-span-2 relative border-t border-transparent">
                    <img src={login} alt="" className="absolute h-full bg-center object-cover"/>
                </div>
                <div className="z-10 col-span-7 sm:col-span-2 md:col-span-1 h-full flex sm:flex-col border-transparent items-center text-sm text-gray-500">
                    <button onClick={() => setIsForm({ login : true, register : false})} className={`py-1.5 w-full h-full sm:h-1/2 inline-flex flex-col justify-center items-center active:outline-none focus:outline-none ${isForm.login ? "bg-white bg-opacity-80 text-gray-600" : "text-white"}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="mt-2 text-base">Iniciar</span>
                    </button>
                    <button onClick={() => setIsForm({ login : false, register : true})} className={`py-1.5 w-full h-full sm:h-1/2 inline-flex flex-col justify-center items-center active:outline-none focus:outline-none ${isForm.register ? "bg-white bg-opacity-80 text-gray-600" : "text-white"}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                        <span className="mt-2 text-base">Registrarse</span>
                    </button>
                </div>
                <div className={`col-span-7 sm:col-span-5 md:col-span-4 relative max-h-560 transition-all duration-500 ease-in-out transform -translate-y-full ${getPosition()}`}>
                    {/* Login Form */}
                    <div onSubmit={handleSubmitLogIn} className={`px-8 lg:px-20 w-full h-full flex flex-col items-center justify-center bg-white bg-opacity-80 transition-all duration-150 ease-in transform ${!isForm.login && "opacity-0"}`}>
                        <img src={kruger} alt='kruger' className="h-20" />
                        <h2 className="py-3 text-center text-3xl font-bold text-gray-600">Bienvenido de nuevo!</h2>
                        <form action="" className="py-6 w-full px-4 lg:px-0 xl:px-10">
                            <p className='mb-4 text-sm'>Ingresa tus credenciales de acceso para continuar</p>
                            <div className="form-control w-full mb-2">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email-login" type="email" placeholder="Email" className="input input-bordered w-full max-w-sm" />
                            </div>
                            <div className="form-control w-full mb-2">
                                <label className="label">
                                    <span className="label-text">Contraseña</span>
                                </label>
                                <input  name="password-login" type="password" placeholder="Contraseña" className="input input-bordered w-full max-w-sm" />
                            </div>
                            <div className="mt-10 w-full">
                                <button type="submit" className="btn btn-block bg-green-600 bg-opacity-70 hover:bg-green-800">Ingresar</button>
                            </div>
                        </form>
                    </div>

                    {/* Register Form */}
                    <div onSubmit={handleSubmitSignUp} className={`px-8 lg:px-20 w-full h-full flex flex-col items-center justify-center bg-white bg-opacity-80 transition-all duration-150 ease-in transform ${!isForm.register && "opacity-0"}`}>
                        <img src={kruger} alt='kruger' className="h-20" />
                        <h2 className="py-0 md:py-2 text-center text-2xl md:text-3xl font-bold text-gray-600">Crea una nueva cuenta</h2>
                        <form action="" className="py-2 w-full px-4 lg:px-0 xl:px-10">
                            <div className='grid grid-cols-1 md:grid-cols-2'>
                                <div className="form-control w-full mb-2">
                                    <label className="label">
                                        <span className="label-text">Nombre</span>
                                    </label>
                                    <input name="nombre" type="text" placeholder="Nombre" className="input input-bordered w-full max-w-sm" />
                                </div>
                                <div className="form-control w-full mb-2 md:ml-1">
                                    <label className="label">
                                        <span className="label-text">Apellido</span>
                                    </label>
                                    <input name="apellido" type="text" placeholder="Apellido" className="input input-bordered w-full max-w-sm" />
                                </div>
                            </div>
                            <div className="form-control w-full mb-2">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email-sign" type="email" placeholder="Email" className="input input-bordered w-full max-w-sm" />
                            </div>
                            <div className="form-control w-full mb-2">
                                <label className="label">
                                    <span className="label-text">Contraseña</span>
                                </label>
                                <input  name="password-sign" type="password" placeholder="Contraseña" className="input input-bordered w-full max-w-sm" />
                            </div>
                            <div className="mt-6 md:mt-10 w-full">
                                <button type="submit" className="btn btn-block bg-green-600 bg-opacity-70 hover:bg-green-800">Crear</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Login;