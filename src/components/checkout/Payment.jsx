import Methods from '../checkout/Methods';
import { useContext } from "react";
import PriceSummary from './PriceSummary'
import { FormContext } from "../../pages/CheckoutPage"
import { useFormik } from "formik";
import * as Yup from "yup";

const Payment = ()=>{

    const { activeStep, setActiveStep, formData, setFormData } = useContext(FormContext);

    const paymentSchema = Yup.object().shape({
        nombreTarjeta: Yup.string().required("Este campo es requerido"),
        numTarjeta:Yup.number().typeError('Solo dígitos').min(12, 'Min 12 dígitos').required("Este campo es requerido"),
        yearTarjeta:Yup.number().typeError('Solo dígitos').min(4, '4 dígitos').max(12, '4 dígitos').required("Este campo es requerido"),
        cvv:Yup.number().typeError('Solo dígitos').min(3, 'Solo 3 dígitos').max(3, 'Solo 3 dígitos').required("Este campo es requerido"),
	});

    const formik = useFormik({
		initialValues: {
            nombreTarjeta:"",
            numTarjeta:"",
            yearTarjeta:"",
            cvv:"",
		},
		validationSchema: paymentSchema,
		onSubmit: (values) => {
            formik.resetForm();
            const data = { ...formData, ...values };
            console.log(data)
            setFormData(data);
            setActiveStep(activeStep + 1);
		},
	});

    return(
        <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0 font-poppins">
            <p className="text-xl font-medium">Datos de Pago</p>
            <p className="text-gray-400 mt-2">Llene los datos para completar su orden</p>
            <Methods />
            <form onSubmit={formik.handleSubmit}>
                <label className="mt-4 mb-2 block text-sm font-medium">Titular de la tarjeta</label>
                    <div className="relative">
                        <input type="text" id="card-holder" name="nombreTarjeta" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-green-400 focus:ring-green-400" placeholder="Nombre Completo" onChange={formik.handleChange} value={formik.values.nombreTarjeta} />
                        {formik.touched.nombreTarjeta && formik.errors.nombreTarjeta && (
                            <span className="text-red-400 flex text-xs">
                                {formik.errors.nombreTarjeta}
                            </span>
                        )}
                        <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                            </svg>
                        </div>
                    </div>
                <label className="mt-4 mb-2 block text-sm font-medium">Número de la tarjeta</label>
                    <div className="relative flex-shrink-0">
                        <input type="text" name="numTarjeta" className="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-green-400 focus:ring-green-400" placeholder="xxxx-xxxx-xxxx-xxxx" onChange={formik.handleChange} value={formik.values.numTarjeta} />
                        {formik.touched.numTarjeta && formik.errors.numTarjeta && (
                            <span className="text-red-400 flex text-xs">
                                {formik.errors.numTarjeta}
                            </span>
                        )}
                        <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                            <svg className="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                                <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
                            </svg>
                        </div>
                    </div>
                <div className='grid grid-cols-1 md:grid-cols-3'>    
                    <div className='form-control max-w-xs mt-1'>
                        <label className="mt-4 mb-2 block text-sm font-medium">Mes Venc.</label>
                        <select name="mesTarjeta" className='w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-green-400 focus:ring-green-400 active:bg-green-100' >
                            <option>1</option>
                        </select>
                        <input type="text" name="mesTarjeta" className="" placeholder="MM" />
                    </div>
                    <div className='form-control ml-2 max-w-xs mt-1'>
                    <label className="mt-4 mb-2 block text-sm font-medium">Año Venc.</label>
                        <input type="text" name="yearTarjeta" className="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-green-400 focus:ring-green-400" placeholder="YYYY" onChange={formik.handleChange} value={formik.values.yearTarjeta} />
                        {formik.touched.yearTarjeta && formik.errors.yearTarjeta && (
                            <span className="text-red-400 flex text-xs">
                                {formik.errors.yearTarjeta}
                            </span>
                        )}
                    </div>
                    <div className='form-control max-w-xs mt-1 ml-2'>
                        <label className="mt-4 mb-2 block text-sm font-medium">CVV</label>
                        <input type="text" name="cvv" className="w-full flex-shrink-0 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-green-400 focus:ring-green-400" placeholder="CVV" onChange={formik.handleChange} value={formik.values.cvv}/>
                        {formik.touched.cvv && formik.errors.cvv && (
                            <span className="text-red-400 flex text-xs">
                                {formik.errors.cvv}
                            </span>
                        )}
                    </div>
                </div>
                <PriceSummary />
                <button onSubmit={formik.handleSubmit} type="submit" className="mt-6 mb-8 w-full rounded-md bg-primary-80 px-6 py-3 font-medium text-white">Confirmar Pago</button>
            </form>
        </div>
    )
}
export default Payment;