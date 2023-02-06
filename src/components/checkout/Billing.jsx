import { useContext } from "react";
import PriceSummary from './PriceSummary'
import { FormContext } from "../../pages/CheckoutPage"
import { useFormik } from "formik";
import * as Yup from "yup";

const Billing = ( )=>{
    const { activeStep, setActiveStep, formData, setFormData } = useContext(FormContext);

    const billingSchema = Yup.object().shape({
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
            telf:''
		},
		validationSchema: billingSchema,
		onSubmit: (values) => {
            formik.resetForm();
            const data = { ...formData, ...values };
            setFormData(data);
            setActiveStep(activeStep + 1);
		},
	});

    return(
        <div className="mt-4 bg-gray-50 px-4 pt-8 lg:mt-0 font-poppins">
            <form onSubmit={formik.handleSubmit} > 
                <p className="text-xl font-medium">Datos para la Factura</p>
                <p className="text-gray-400 mt-2">Completa los datos para la generación de la factura</p>
                <div className="py-2">
                    <div className='grid grid-cols-1 md:grid-cols-2'>
                        <div className="form-control w-full md:w-10/12 max-w-sm mt-1">
                            <label className="label">
                                <span className="label-text">Nombre</span>
                            </label>
                            <input type="text" name="nombre" placeholder="Nombre" className="px-4 py-3 rounded-md border border-gray-200 text-sm shadow-sm outline-none focus:z-10 focus:border-green-400 focus:ring-green-400 " onChange={formik.handleChange} value={formik.values.nombre} />
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
                </div>                
                <PriceSummary />
                <button onClick={formik.handleSubmit} type="submit" className="mt-6 mb-8 w-full rounded-md bg-primary-80 px-6 py-3 font-medium text-white">
                    Continuar con el envío
                </button>
            </form>
        </div>
    )

}

export default Billing;