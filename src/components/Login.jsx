import { useState } from 'react'
import imagenLogin from '../assets/img/Login.png';
import kruger from '../assets/img/kruger.png';
import { useNavigate} from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import jwt from 'jwt-decode'
import { useCreateMutation, useLoginMutation, 
    useAddNewClientMutation } from '../store/serverApi'
import axios from 'axios';
import { useDispatch} from "react-redux";
import { setCurrentUser } from "../store/userSlice";

const Login = () =>{
    
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [isForm, setIsForm] = useState({
        login : true,
        register : false,
    })

    const [loginM] = useLoginMutation()
    const [createM] = useCreateMutation()
    const [addNewClient] = useAddNewClientMutation()
    
    const getPosition = () => {
        return isForm.login ? "top-full"
        : isForm.register ? "top-0"
        : null
    }
 
    const getClient = async(id) =>{
        const token = JSON.parse(localStorage.getItem('token'))
        await axios.get(`https://api-gateway-production-d841.up.railway.app/api/cliente/client/user/${id}`,{
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(response => {
            dispatch(setCurrentUser(response.data.id));
            localStorage.setItem('currentUser', JSON.stringify(response.data.id))
        })
        .catch(error => {
            console.log(error)
        })
    }

    const formik = useFormik({
		initialValues: {
			email_login:"",
            password_login:"",  
		},
		validationSchema: Yup.object().shape({
            email_login: Yup.string().email("Email incorrecto").required("Este campo es requerido"),
            password_login: Yup.string().required("Este campo es requerido")
        }),
		onSubmit: async (data) => {
            const res = await loginM({
                email: data.email_login,
                password: data.password_login,
            })
            if(res.data){
                localStorage.setItem('token', JSON.stringify(res.data.token))
                const token_decoded = jwt(res.data.token)
                getClient(token_decoded.id)
                formik.resetForm()
                navigate("/")
            }else{
                Swal.fire({
                    title:'Error',
                    icon:'error',
                    text:'Credenciales Incorrectas. Intenta de nuevo'
                })
                formik.resetForm()
            }
		},
	});

    const formik2 = useFormik({
		initialValues: {
			email_sign:"",
            password_sign:"",
            nombre:"",
            apellido:"",
            ident:"",
            telf:""
		},
		validationSchema: Yup.object().shape({
            email_sign: Yup.string().email("Email incorrecto").required("Este campo es requerido"),
            password_sign: Yup.string().required("Este campo es requerido"),
            nombre: Yup.string().required("Este campo es requerido"),
            apellido: Yup.string().required("Este campo es requerido"),
            ident: Yup.number().typeError('Solo dígitos').min(10, 'Min 10 dígitos').required("Este campo es requerido"),
            telf: Yup.number().typeError('Solo dígitos').required("Este campo es requerido")
        }),
		onSubmit: async (data) => {
            const res = await createM({
                email: data.email_sign,
                password: data.password_sign,
            })      
            if(res.data){
                const res2 = await addNewClient({ 
                    userId: res.data.id,
                    document: data.ident,
                    firstName: data.nombre,
                    lastName: data.apellido,
                    phone: data.telf
                })
                if(res2.data){
                    Swal.fire({
                        title:'Excelente!',
                        icon:'success',
                        text:'Usuario registrado con éxito'
                    })
                    formik2.resetForm()
                }else{
                    Swal.fire({
                        title:'Error',
                        icon:'error',
                        text:'Se produjo un problema al registrar el cliente. Intenta de nuevo'
                    })
                }
            }else{
                Swal.fire({
                    title:'Error',
                    icon:'error',
                    text:'Se produjo un problema al crear un usuario. Intenta de nuevo'
                })
            }
		},
	});

    return(
        <div className="relative w-full py-8 px-5 flex flex-col items-center font-poppins">
            <div className="relative z-10 max-w-6xl w-full grid grid-cols-7 bg-primary-40 overflow-hidden rounded-lg shadow-xl">
                <div className="hidden md:block md:col-span-2 relative border-t border-transparent">
                    <img src={imagenLogin} alt="logo" className="absolute h-full bg-center object-cover"/>
                </div>
                <div className="z-10 col-span-7 sm:col-span-2 md:col-span-1 h-full flex sm:flex-col border-transparent items-center text-sm text-gray-500">
                    <button onClick={() => setIsForm({ login : true, register : false})} 
                    className={`py-2 w-full h-full sm:h-1/2 inline-flex flex-col  justify-center items-center active:outline-none focus:outline-none  ${isForm.login ? "bg-white bg-opacity-80 text-gray-600 border-t border-r border-green-500" : "text-white"}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="mt-2 text-base">Iniciar</span>
                        <hr className={` hidden sm:block  ${!isForm.register ? "h-1 bg-green-500 w-20 mt-4" : "hidden" }`} />
                    </button>
                    <button onClick={() => setIsForm({ login : false, register : true})}
                     className={`py-2 w-full h-full sm:h-1/2 inline-flex flex-col justify-center items-center active:outline-none focus:outline-none ${isForm.register ? "bg-white bg-opacity-80 text-gray-600 border-t sm:border-t-0 sm:border-b border-l-2 sm:border-r  sm:border-l-0 border-green-500" : "text-white "}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                        <span className="mt-2 text-base">Registrarse</span>
                        <hr className={` hidden sm:block ${isForm.register ? "h-1 bg-green-500 w-20 mt-4" : "hidden" }`} />
                    </button>
                </div>
                <div className={`col-span-7 sm:col-span-5 md:col-span-4 relative h-[48rem] md:h-[48rem] lg:h-[35rem] transition-all duration-500 ease-in-out transform -translate-y-full  ${getPosition()}`}>
                    {/* Login Form */}
                    <div className={`px-8 lg:px-20 w-full h-full flex flex-col items-center justify-center bg-white bg-opacity-80 transition-all duration-150 ease-in transform ${!isForm.login && "opacity-0"}`}>
                        <img src={kruger} alt='kruger' className="h-28 mb-4 md:mb-0 md:h-24" />
                        <h2 className="py-3 text-center text-3xl font-bold text-gray-600">Bienvenido de nuevo!</h2>
                        <form onSubmit={formik.handleSubmit} action="" className="py-6 w-full px-4 lg:px-0 xl:px-10">
                            <p className='mb-4 text-md md:text-sm'>Ingresa tus credenciales de acceso para continuar</p>
                            <div className="form-control w-full mb-2">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email_login" type="email" placeholder="Email" className="input input-bordered w-full max-w-sm" onChange={formik.handleChange}  value={formik.values.email_login} />
                                {formik.touched.email_login && formik.errors.email_login && (
                                    <span className="text-red-400 flex text-xs">
                                        {formik.errors.email_login}
                                    </span>
                                )}
                            </div>
                            <div className="form-control w-full mb-2">
                                <label className="label">
                                    <span className="label-text">Contraseña</span>
                                </label>
                                <input  name="password_login" type="password" placeholder="Contraseña" className="input input-bordered w-full max-w-sm" onChange={formik.handleChange} value={formik.values.password_login} />
                                {formik.touched.password_login && formik.errors.password_login && (
                                    <span className="text-red-400 flex text-xs">
                                        {formik.errors.password_login}
                                    </span>
                                )}
                            </div>
                            <div className="mt-10 w-full max-w-sm">
                                <button type="submit" onClick={formik.handleSubmit} className="btn btn-block bg-green-600 bg-opacity-70 hover:bg-green-800">Ingresar</button>
                            </div>
                        </form>
                    </div>
                    {/* Register Form */}
                    <div  className={`px-8 lg:px-20 w-full h-full flex flex-col items-center justify-center bg-white bg-opacity-80 transition-all duration-150 ease-in transform ${!isForm.register && "opacity-0"}`}>
                        <img src={kruger} alt='kruger' className="h-20" />
                        <h2 className="py-0 md:py-2 text-center text-2xl lg:text-3xl font-bold text-gray-600">Crea una nueva cuenta</h2>
                        <form onSubmit={formik2.handleSubmit} action="" className="py-2 w-full px-4 lg:px-0 xl:px-6">
                            <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-3'>
                                <div className="form-control w-full max-w-sm mt-1">
                                    <label className="label">
                                        <span className="label-text">Nombre</span>
                                    </label>
                                    <input type="text" name="nombre" placeholder="Nombre" className="px-4 py-3 rounded-md border border-gray-200 text-sm shadow-sm outline-none focus:z-10 focus:border-green-400 focus:ring-green-400" onChange={formik2.handleChange} value={formik2.values.nombre} />
                                    {formik2.touched.nombre && formik2.errors.nombre && (
                                        <span className="text-red-400 flex text-xs">
                                            {formik2.errors.nombre}
                                        </span>
                                    )}
                                </div>
                                <div className="form-control w-full max-w-sm mt-1">
                                    <label className="label">
                                        <span className="label-text">Apellido</span>
                                    </label>
                                    <input type="text" name="apellido" placeholder="Apellido" className="px-4 py-3 rounded-md border border-gray-200 text-sm shadow-sm outline-none focus:z-10 focus:border-green-400 focus:ring-green-400" onChange={formik2.handleChange} value={formik2.values.apellido} />
                                    {formik2.touched.apellido && formik2.errors.apellido && (
                                        <span className="text-red-400 flex text-xs">
                                            {formik2.errors.apellido}
                                        </span>
                                    )}
                                </div>
                            </div>
                            <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-3'>
                                <div className="form-control w-full max-w-sm mt-1">
                                    <label className="label">
                                        <span className="label-text">Identificación</span>
                                    </label>
                                    <input type="text" name="ident" placeholder="Identificación" className="px-4 py-3 rounded-md border border-gray-200 text-sm shadow-sm outline-none focus:z-10 focus:border-green-400 focus:ring-green-400 " onChange={formik2.handleChange} value={formik2.values.ident} />
                                    {formik2.touched.ident && formik2.errors.ident && (
                                        <span className="text-red-400 flex text-xs">
                                            {formik2.errors.ident}
                                        </span>
                                    )}
                                </div>
                                <div className="form-control w-full max-w-sm mt-1">
                                    <label className="label">
                                        <span className="label-text">Teléfono</span>
                                    </label>
                                    <input type="text" name="telf" placeholder="Teléfono" className="px-4 py-3 rounded-md border border-gray-200 text-sm shadow-sm outline-none focus:z-10 focus:border-green-400 focus:ring-green-400 " onChange={formik2.handleChange} value={formik2.values.telf} />
                                    {formik2.touched.telf && formik2.errors.telf && (
                                        <span className="text-red-400 flex text-xs">
                                            {formik2.errors.telf}
                                        </span>
                                    )}
                                </div>
                            </div>
                            <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-3'>
                                <div className="form-control w-full max-w-sm mt-1">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input name="email_sign" type="email" placeholder="Email" className=" text-sm input input-bordered w-full max-w-sm" onChange={formik2.handleChange}  value={formik2.values.email_sign} />
                                    {formik2.touched.email_sign && formik2.errors.email_sign && (
                                        <span className="text-red-400 flex text-xs">
                                            {formik2.errors.email_sign}
                                        </span>
                                    )}
                                </div>
                                <div className="form-control w-full max-w-sm mt-1">
                                    <label className="label">
                                        <span className="label-text">Contraseña</span>
                                    </label>
                                    <input name="password_sign" type="password" placeholder="Contraseña" className="input input-bordered w-full max-w-sm" onChange={formik2.handleChange}  value={formik2.values.password_sign} />
                                    {formik2.touched.password_sign && formik2.errors.password_sign && (
                                        <span className="text-red-400 flex text-xs">
                                            {formik2.errors.password_sign}
                                        </span>
                                    )}
                                </div>
                            </div>
                            <div className="mt-6 md:mt-10 w-full">
                                <button type="submit" onClick={formik2.handleSubmit} className="btn btn-block bg-green-600 bg-opacity-70 hover:bg-green-800">Crear</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Login;