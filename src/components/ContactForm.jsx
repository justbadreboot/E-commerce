import { BsFillTelephoneFill} from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';
import { ImLocation } from "react-icons/im"
import { useFormik } from "formik";
import { useGetLandingQuery } from '../store/serverApi';
import * as Yup from "yup";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import Loader from './main/Loader';

const ContactForm = ()=>{
 
    const {data: contactInfo, isSuccess, isLoading, isFetching} = useGetLandingQuery();

    const contactSchema = Yup.object().shape({
		email: Yup.string().email("Email incorrecto").required("Este campo es requerido"),
		nombre: Yup.string().required('Este campo es requerido'),
        mensaje: Yup.string().required('Este campo es requerido'),
	});
    
    const formik = useFormik({
		initialValues: {
			email: "",
			nombre:"",
            mensaje:"",
		},
		validationSchema: contactSchema,
		onSubmit: (data) => {
            emailjs.send('service_0lwds3j', 'template_5waegri', data, 'KodhYw3i-kovKW2uQ')
            .then(() => {
                Swal.fire({
                    title:'Excelente!',
                    icon:'success',
                    text:'Mensaje enviado correctamente'
                });
                formik.resetForm();
            })
            .catch((error) => {
                Swal.fire({
                    title:'Error!',
                    icon:'error',
                    text: "Porfavor, intenta de nuevo en unos momentos"
                });
            });
		},
	});

    return (
        <div className='pt-8 px-4 font-poppins'>
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-ternary-60">Contáctanos</h1>
            </div>
            <div className="flex w-full md:mt-8 justify-center items-center">
                <div className="mt-6 md:mt-0 flex flex-col md:flex-row md:space-x-2 md:space-y-0 space-y-6 bg-primary-20 w-full max-w-4xl p-10 sm:p-12 text-white overflow-hidden rounded-lg shadow-md ">
                    <div className="flex flex-col mr-16 space-y-4 justify-between">
                        <div>
                            <h1 className="font-bold text-xl md:text-2xl tracking-wide text-gray-700">Datos de Contacto</h1>
                            <p className="pt-2 text-cyan-800 text-sm">Encuéntranos a través de los siguientes medios</p>
                        </div>
                        {(isLoading || isFetching) && <Loader />}
                        {isSuccess && (
                            contactInfo.map(info=>(
                                <div key={info.id}>
                                    <div className='flex flex-col space-y-6'>
                                        <div className='inline-flex space-x-2 items-center'>
                                            <BsFillTelephoneFill className='text-teal-600 text-xl' />
                                            <span className='text-gray-800'>{info.phone}</span>
                                        </div>
                                        <div className='inline-flex space-x-2 items-center'>
                                            <GrMail className='text-teal-600 text-xl' />
                                            <span className='text-gray-800'>{info.email}</span>
                                        </div>
                                        <div className='inline-flex space-x-2 items-center'>
                                            <ImLocation className='text-teal-600 text-xl' />
                                            <span className='text-gray-800'>{info.address}</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                        <div className='flex space-x-4 text-lg'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7975223736703!2d-78.47892907847347!3d-0.18499999943328999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59080303a2eb1%3A0x523b5f69ac3065dd!2sKruger%20Corp!5e0!3m2!1ses-419!2sec!4v1674866639827!5m2!1ses-419!2sec" className='w-82 md:w-72 h-48' title='mapa' loading="lazy"></iframe>
                        </div>
                    </div>
                    <div className='relative'>
                        <div className='absolute z-0 w-40 h-40 bg-ternary-40 rounded-full -right-28 -top-28'></div>
                        <div className='absolute z-0 w-40 h-40 bg-ternary-40 rounded-full -left-24 -bottom-20'></div>
                        <div className=' relative z-10 bg-white rounded-xl shadow-lg p-8 md:w-96'>
                            <form action='' className='flex flex-col space-y-4' onSubmit={formik.handleSubmit}>
                                <div>
                                    <label className='label-text text-sm'>Nombre</label>
                                    <input type="text" name="nombre" placeholder='Tu nombre' className='input input-bordered mt-2 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300 text-gray-600'  onChange={formik.handleChange}  value={formik.values.nombre} />
                                    {formik.touched.nombre && formik.errors.nombre && (
                                        <span className="text-red-400 flex text-xs">
                                            {formik.errors.nombre}
                                        </span>
                                    )}
                                </div>
                                <div>
                                    <label className='label-text text-sm'>Correo</label>
                                    <input type="email" name="email" placeholder='Tu correo' className='input input-bordered mt-2 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300  text-gray-600'  onChange={formik.handleChange}  value={formik.values.email} />
                                    {formik.touched.email && formik.errors.email && (
                                        <span className="text-red-400 flex text-xs">
                                            {formik.errors.email}
                                        </span>
                                    )}
                                </div>
                                <div>
                                    <label className='label-text text-sm'>Mensaje</label>
                                    <textarea type="text" name='mensaje' placeholder='Tu mensaje' className='textarea textarea-bordered mt-2 w-full resize-none rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300  text-gray-600'  onChange={formik.handleChange} rows="3" value={formik.values.mensaje} />
                                    {formik.touched.mensaje && formik.errors.mensaje && (
                                        <span className="text-red-400 flex text-xs">
                                            {formik.errors.mensaje}
                                        </span>
                                    )}
                                </div>
                                <button className='btn inline-block self-end bg-green-500 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm' type="submit" onClick={formik.handleSubmit}>Enviar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default ContactForm;