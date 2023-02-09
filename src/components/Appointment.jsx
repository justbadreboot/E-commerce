import { useFormik } from "formik";
import { useState } from "react";
import Swal from "sweetalert2";
import * as Yup from "yup";
import { useAddNewAppointmentMutation, useGetClientByDocumentQuery } from "../store/serverApi";
import SearchClient from "./SearchClient";

const Appointment = ({serviceID}) =>{
    
    const [openClient, setOpenClient] = useState(false)
    const [doc, setDoc] = useState("")
    const [isSkip,setIsSkip] = useState(false)

    const {data: cliente} = useGetClientByDocumentQuery(doc, {skip: isSkip} )
    const [addNewApp] = useAddNewAppointmentMutation()

    const formik = useFormik({
		initialValues: {
            consultar:"",
		},
		validationSchema: Yup.object().shape({
            consultar: Yup.number().typeError('Solo dígitos').min(10, 'Min 10 dígitos').required("Este campo es requerido"),
        }),
		onSubmit: (values) => {
            setDoc(values.consultar)
            setOpenClient(true)
		},
	})

    const getID = (id)=>{
        setDoc(id)
    }

    const formik2 = useFormik({
		initialValues: {
            fecha:"",
            hora:""
		},
		validationSchema: Yup.object().shape({
            fecha: Yup.string().required("Este campo es requerido"),
            hora: Yup.string().required("Este campo es requerido"),
        }),
		onSubmit: (values) => {
            setIsSkip(true)
            Swal.fire({
                title: '¿Desea continuar?',
                text: "Su cita será agendada en la fecha y hora seleccionada previamente.",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#28a745',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, continuar',
                cancelButtonText:"Cancelar",
                reverseButtons:true
            }).then((result) => {
                if (result.isConfirmed) {
                    /*addNewApp({
                        id:serviceID,
                        clientId: cliente.id,
                        date:values.fecha,
                        duration:values.hora
                    })*/
                    Swal.fire(
                        'Cita generada!',
                        'Su cita ha sido agendada con éxito',
                        'success'
                    )
                    setIsSkip(false)
                    setDoc("")
                    setOpenClient(false)
                }
            })
            
		},
	})

    return(
        <>
            <input type="checkbox" id="cita" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 sm:w-10/12 max-w-5xl">
                    <div className="text-center text-2xl font-semibold capitalize text-gray-600">
                        <h2>Agendar nueva cita</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="mt-4">
                            <p className="text-lg">Datos del Paciente</p>
                            <form className="form-control mt-1" onSubmit={formik.handleSubmit}>
                                <label className="label">
                                    <span className="label-text text-gray-400">Buscar por Identificación</span>
                                </label>
                                <div className="input-group">
                                    <input type="text" name="consultar" placeholder="Identificación" className="w-8/12 md:w-6/12 lg:w-8/12 px-4 py-3 rounded-md border border-gray-200 text-sm shadow-sm outline-none focus:z-10 focus:border-green-400 focus:ring-green-400 " onChange={formik.handleChange} value={formik.values.consultar} />
                                    <button  onClick={formik.handleSubmit} type="submit" className="btn bg-primary-100">Consultar</button>
                                </div>
                                {formik.touched.consultar && formik.errors.consultar && (
                                    <span className="text-red-400 flex text-xs">
                                        {formik.errors.consultar}
                                    </span>
                                )}
                            </form>
                            {openClient &&(
                                <SearchClient doc={doc} id={getID} />
                            )}
                        </div>
                        <form onSubmit={formik2.handleSubmit} className="mt-4">
                            <p className="text-lg font-medium text-gray-400">Seleccione fecha y hora para la cita</p>
                            <div className="form-control w-full lg:w-6/12 mt-1">
                                <label className="label">
                                    <span className="label-text">Fecha</span>
                                </label>
                                <input type="date" name="fecha" className="px-4 py-3 rounded-md border border-gray-200 text-sm shadow-sm outline-none focus:z-10 focus:border-green-400 focus:ring-green-400" onChange={formik2.handleChange} value={formik2.values.fecha}  />
                                {formik2.touched.fecha && formik2.errors.fecha && (
                                    <span className="text-red-400 flex text-xs">
                                        {formik2.errors.fecha}
                                    </span>
                                )}
                            </div>
                            <div className="form-control w-full lg:w-6/12 mt-1">
                                <label className="label">
                                    <span className="label-text">Hora</span>
                                </label>
                                <input type="time" name="hora" className="px-4 py-3 rounded-md border border-gray-200 text-sm shadow-sm outline-none focus:z-10 focus:border-green-400 focus:ring-green-400" onChange={formik2.handleChange} value={formik2.values.hora}  />
                                {formik2.touched.hora && formik2.errors.hora && (
                                    <span className="text-red-400 flex text-xs">
                                        {formik2.errors.hora}
                                    </span>
                                )}
                            </div>
                            <button onClick={formik2.handleSubmit} type="submit" className="mt-4 bg-green-500 rounded-md px-4 py-2 text-white cursor-pointer hover:bg-green-700">Agendar</button>
                        </form>
                    </div>
                    <div className="modal-action">
                        <label htmlFor="cita" className="btn btn-sm bg-error-100 border-none">Cerrar</label>
                    </div>
                </div>
            </div>
        </>
    )

}
export default Appointment;