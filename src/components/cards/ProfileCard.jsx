import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { FaEdit} from "react-icons/fa"
import { useState } from "react"
import { useGetClientByIDQuery, useUpdateClientMutation } from "../../store/serverApi";

const ProfileCard = () =>{
    
    const id = JSON.parse(localStorage.getItem('currentUser'))
    const {data: usuario} = useGetClientByIDQuery(id)
    const [editClient] = useUpdateClientMutation()
    
    const [isEditar, setIsEditar] = useState(false)

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
    const appSchema = Yup.object().shape({
        nombre: Yup.string().required("Este campo es requerido"),
        apellido: Yup.string().required("Este campo es requerido"),
        ident: Yup.number().typeError('Solo dígitos').min(10, 'Min 10 dígitos').required("Este campo es requerido"),
        telf: Yup.number().typeError('Solo dígitos').required("Este campo es requerido")
    });
    
    const formik = useFormik({
        initialValues: {
            nombre:'',
            apellido:'',
            ident:'',
            telf:'',
        },
        validationSchema: appSchema,
        onSubmit: async (values) => {
            const res = await editClient({ 
                document: values.ident,
                firstName: values.nombre,
                lastName: values.apellido,
                phone: values.telf,
                userId: usuario.userId,
                id: id,
            })
            console.log(res)
            Toast.fire({ icon: 'success', title: 'Datos actualizados',background:'#D3FDDD'})
        },
    });
    
    return(
        <div className="font-poppins w-full max-w-full px-4 py-3 bg-gray-100 rounded-2xl ">
            <div className="relative flex flex-col h-full min-w-0 shadow-soft-xl rounded-2xl ">
                <div className="px-6 pt-3 pb-0 mb-0 rounded-t-2xl">
                    <div className="flex ">
                        <div className="flex items-center max-w-full px-3 shrink-0 w-11/12 md:flex-none">
                            <h6 className="mb-0 text-lg font-semibold">Datos Personales</h6>
                        </div>
                        <div className="w-full max-w-full px-3 shrink-0 md:w-2/12 md:flex-none">
                            <FaEdit onClick={()=> {setIsEditar(true)}} className={`w-5 h-5 cursor-pointer ${isEditar ? "hidden" : "block"}`} />
                        </div>
                    </div>
                </div>
                <div className="flex-auto px-6 mt-3">
                    <form onSubmit={formik.handleSubmit}>
                        <div className='grid grid-cols-1 md:grid-cols-2'>
                            <div className="form-control w-full md:w-10/12 max-w-sm mt-1">
                                <label className="label">
                                    <span className="label-text">Nombre</span>
                                </label>
                                <input type="text" name="nombre" placeholder="Nombre" className="px-4 py-3 rounded-md border border-gray-200 text-sm shadow-sm outline-none focus:z-10 focus:border-green-400 focus:ring-green-400" onChange={formik.handleChange} value={formik.values.nombre} disabled={!isEditar} />
                                {formik.touched.nombre && formik.errors.nombre && (
                                    <span className="text-red-400 flex text-xs">
                                        {formik.errors.nombre}
                                    </span>
                                )}
                            </div>
                            <div className="form-control w-full md:w-10/12 max-w-sm mt-1">
                                <label className="label">
                                    <span className="label-text">Apellido</span>
                                </label>
                                <input type="text" name="apellido" placeholder="Apellido" className="px-4 py-3 rounded-md border border-gray-200 text-sm shadow-sm outline-none focus:z-10 focus:border-green-400 focus:ring-green-400" onChange={formik.handleChange} value={formik.values.apellido} disabled={!isEditar} />
                                {formik.touched.apellido && formik.errors.apellido && (
                                    <span className="text-red-400 flex text-xs">
                                        {formik.errors.apellido}
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2'>
                            <div className="form-control w-full md:w-10/12 max-w-sm mt-1">
                                <label className="label">
                                    <span className="label-text">Identificación</span>
                                </label>
                                <input type="text" name="ident" placeholder="Identificación" className="px-4 py-3 rounded-md border border-gray-200 text-sm shadow-sm outline-none focus:z-10 focus:border-green-400 focus:ring-green-400 " onChange={formik.handleChange} value={formik.values.ident} disabled={!isEditar} />
                                {formik.touched.ident && formik.errors.ident && (
                                    <span className="text-red-400 flex text-xs">
                                        {formik.errors.ident}
                                    </span>
                                )}
                            </div>
                            <div className="form-control w-full md:w-10/12 max-w-sm mt-1">
                                <label className="label">
                                    <span className="label-text">Teléfono</span>
                                </label>
                                <input type="text" name="telf" placeholder="Teléfono" className="px-4 py-3 rounded-md border border-gray-200 text-sm shadow-sm outline-none focus:z-10 focus:border-green-400 focus:ring-green-400 " onChange={formik.handleChange} value={formik.values.telf} disabled={!isEditar} />
                                {formik.touched.telf && formik.errors.telf && (
                                    <span className="text-red-400 flex text-xs">
                                        {formik.errors.telf}
                                    </span>
                                )}
                            </div>
                        </div>
                        {isEditar && (
                            <div className='grid sm:grid-cols-2 gap-4'>
                                <button onClick={formik.handleSubmit} type="submit" className="mt-6 mb-8 w-full sm:w-11/12 rounded-md bg-primary-80 px-6 py-3 font-medium text-white">
                                    Actualizar
                                </button>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    )
}
export default ProfileCard;