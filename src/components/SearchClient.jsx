import { useAddNewClientMutation, useGetClientByDocumentQuery } from "../store/serverApi";
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { useEffect } from "react";

const SearchClient =({doc, id})=>{

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

    const {data: cliente, isError, isSuccess} = useGetClientByDocumentQuery(doc)
    const [addNewPost] = useAddNewClientMutation()

    useEffect(()=>{
        if(isSuccess)
            id(cliente.id)
    })

    const appSchema = Yup.object().shape({
		nombre: Yup.string().required("Este campo es requerido"),
        apellido: Yup.string().required("Este campo es requerido"),
        ident: Yup.number().typeError('Solo dígitos').min(10, 'Min 10 dígitos').required("Este campo es requerido"),
        telf: Yup.number().typeError('Solo dígitos').required("Este campo es requerido")
	});

    const formik = useFormik({
		initialValues: {
			nombre:"",
            apellido:"",
            ident:"",
            telf:""
		},
		validationSchema: appSchema,
		onSubmit: async (values) => {
            const res =  await addNewPost({ 
                document: values.ident,
                firstName: values.nombre,
                lastName: values.apellido,
                phone: values.telf
            }).unwrap()
            id(res.id)
            Toast.fire({ icon: 'success', title: 'Paciente registrado',background:'#D3FDDD'})
		},
	});

    return(
        <>
            {isSuccess && (
                <div className="border-1 p-4">
                    <p className="text-gray-600">Nombre: <span className="text-gray-400">{cliente.firstName}</span></p>
                    <p className="text-gray-600">Apellido: <span className="text-gray-400">{cliente.lastName}</span></p>
                    <p className="text-gray-600">Teléfono: <span className="text-gray-400">{cliente.phone}</span></p>
                </div>
            )}
            {isError && (
                <>
                    <p className="mt-2 text-gray-400 text-sm">Paciente no encontrado</p>
                    <form onSubmit={formik.handleSubmit}>
                        <div className='grid grid-cols-1 md:grid-cols-2'>
                            <div className="form-control w-full md:w-10/12 max-w-sm mt-1">
                                <label className="label">
                                    <span className="label-text">Nombre</span>
                                </label>
                                <input type="text" name="nombre" placeholder="Nombre" className="px-4 py-3 rounded-md border border-gray-200 text-sm shadow-sm outline-none focus:z-10 focus:border-green-400 focus:ring-green-400" onChange={formik.handleChange} value={formik.values.nombre} />
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
                                <input type="text" name="apellido" placeholder="Apellido" className="px-4 py-3 rounded-md border border-gray-200 text-sm shadow-sm outline-none focus:z-10 focus:border-green-400 focus:ring-green-400" onChange={formik.handleChange} value={formik.values.apellido} />
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
                                <input type="text" name="ident" placeholder="Identificación" className="px-4 py-3 rounded-md border border-gray-200 text-sm shadow-sm outline-none focus:z-10 focus:border-green-400 focus:ring-green-400 " onChange={formik.handleChange} value={formik.values.ident} />
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
                                <input type="text" name="telf" placeholder="Teléfono" className="px-4 py-3 rounded-md border border-gray-200 text-sm shadow-sm outline-none focus:z-10 focus:border-green-400 focus:ring-green-400 " onChange={formik.handleChange} value={formik.values.telf} />
                                {formik.touched.telf && formik.errors.telf && (
                                    <span className="text-red-400 flex text-xs">
                                        {formik.errors.telf}
                                    </span>
                                )}
                            </div>
                        </div>
                        <button onClick={formik.handleSubmit} type="submit" className="mt-6 mb-8 w-full sm:w-11/12 rounded-md bg-primary-80 px-6 py-3 font-medium text-white">
                        Registrar
                        </button>
                    </form>
                </> 
            )}
        </>
    )
}

export default SearchClient;