import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import * as Yup from "yup";
import { useAddNewAppointmentMutation} from "../../store/serverApi";

const Appointment = ({serviceID}) =>{
    
    const navigate = useNavigate()
    const id = JSON.parse(localStorage.getItem('currentUser'))
    const [addNewApp] = useAddNewAppointmentMutation()

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
                    addNewApp({
                        id:serviceID,
                        clientId: id,
                        date:values.fecha,
                        duration:values.hora
                    })
                    Swal.fire(
                        'Cita generada!',
                        'Su cita ha sido agendada con éxito',
                        'success'
                    )
                    formik2.resetForm()
                    navigate('/')
                }
            })
            
		},
	})

    return(
        <>
            <input type="checkbox" id="cita" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-10/12 sm:w-7/12 lg:w-5/12 max-w-5xl">
                    <div className="text-center text-2xl font-semibold capitalize text-gray-600">
                        <h2>Agendar nueva cita</h2>
                    </div>
                    <div className="grid grid-cols-1">
                        <form onSubmit={formik2.handleSubmit} className="mt-4">
                            <p className="text-lg font-medium text-gray-400">Seleccione fecha y hora para la cita</p>
                            <div className="form-control w-full md:w-8/12  mt-1">
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
                            <div className="form-control w-full md:w-8/12  mt-1">
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