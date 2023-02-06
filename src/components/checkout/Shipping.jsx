import { useContext } from "react";
import PriceSummary from './PriceSummary'
import { FormContext } from "../../pages/CheckoutPage"
import { useFormik } from "formik";
import * as Yup from "yup";

const Shipping = ()=>{
    const { activeStep, setActiveStep, formData, setFormData } = useContext(FormContext);

    const shippingSchema = Yup.object().shape({
        ciudad: Yup.string().required("Este campo es requerido"),
        provincia: Yup.string().required("Este campo es requerido"),
        calle1: Yup.string().required("Este campo es requerido"),
        calle2: Yup.string().required("Este campo es requerido"),
        zip: Yup.string().required("Este campo es requerido"),
        casa: Yup.string().required("Este campo es requerido"),
	});

    const formik = useFormik({
		initialValues: {
			ciudad: "",
            provincia: "",
            calle1: "",
            calle2: "",
            zip: "",
            casa: "",
		},
		validationSchema: shippingSchema,
		onSubmit: (values) => {
            formik.resetForm();
            const data = { ...formData, ...values };
            setFormData(data);
            setActiveStep(activeStep + 1);
		},
	});

    return(
        <div className="mt-4 bg-gray-50 px-4 pt-8 lg:mt-0 font-poppins">
            <form onSubmit={formik.handleSubmit}>
                <p className="text-xl font-medium">Datos para el Envío</p>
                <p className="text-gray-400 mt-2">Completa tu orden llenando los datos para el envío de tus productos.</p>
                <div className="py-2">
                    <div className='grid grid-cols-1 md:grid-cols-2'>
                        <div className="form-control w-full md:w-10/12 max-w-sm mt-1">
                            <label className="label">
                                <span className="label-text">Ciudad</span>
                            </label>
                            <input type="text" name="ciudad" placeholder="Ciudad" className="px-4 py-3 rounded-md border border-gray-200 text-sm shadow-sm outline-none focus:z-10 focus:border-green-400 focus:ring-green-400" onChange={formik.handleChange} value={formik.values.ciudad} />
                            {formik.touched.ciudad && formik.errors.ciudad && (
                                <span className="text-red-400 flex text-xs">
                                    {formik.errors.ciudad}
                                </span>
                            )}
                        </div>
                        <div className="form-control w-full md:w-10/12 max-w-sm mt-1">
                            <label className="label">
                                <span className="label-text">Provincia</span>
                            </label>
                            <input type="text" name="provincia" placeholder="Provincia" className="px-4 py-3 rounded-md border border-gray-200 text-sm shadow-sm outline-none focus:z-10 focus:border-green-400 focus:ring-green-400" onChange={formik.handleChange} value={formik.values.provincia} />
                            {formik.touched.provincia && formik.errors.provincia && (
                                <span className="text-red-400 flex text-xs">
                                    {formik.errors.provincia}
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="form-control w-full max-w-sm mt-1">
                        <label className="label">
                            <span className="label-text">Calle Principal</span>
                        </label>
                        <input type="text" name="calle1" placeholder="Calle principal" className="px-4 py-3 rounded-md border border-gray-200 text-sm shadow-sm outline-none focus:z-10 focus:border-green-400 focus:ring-green-400 w-full" onChange={formik.handleChange} value={formik.values.calle1} />
                        {formik.touched.calle1 && formik.errors.calle1 && (
                            <span className="text-red-400 flex text-xs">
                                {formik.errors.calle1}
                            </span>
                        )}
                    </div>
                    <div className="form-control w-full max-w-sm mt-1">
                        <label className="label">
                            <span className="label-text">Calle Secundaria</span>
                        </label>
                        <input type="text" name="calle2" placeholder="Calle secundaria" className="px-4 py-3 rounded-md border border-gray-200 text-sm shadow-sm outline-none focus:z-10 focus:border-green-400 focus:ring-green-400 w-full" onChange={formik.handleChange} value={formik.values.calle2} />
                        {formik.touched.calle2 && formik.errors.calle2 && (
                            <span className="text-red-400 flex text-xs">
                                {formik.errors.calle2}
                            </span>
                        )}
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
                        <div className="form-control w-full md:w-10/12 max-w-sm mt-1">
                            <label className="label">
                                <span className="label-text">Sector</span>
                            </label>
                            <input type="text" name="sector" placeholder="Sector" className="px-4 py-3 rounded-md border border-gray-200 text-sm shadow-sm outline-none focus:z-10 focus:border-green-400 focus:ring-green-400 w-full" onChange={formik.handleChange} value={formik.values.sector} />
                            {formik.touched.sector && formik.errors.sector && (
                                <span className="text-red-400 flex text-xs">
                                    {formik.errors.sector}
                                </span>
                            )}
                        </div>
                        <div className="form-control w-full md:w-10/12 max-w-xs mt-1">
                            <label className="label">
                                <span className="label-text">Zip</span>
                            </label>
                            <input type="text" name="zip" placeholder="Zip" className="px-4 py-3 rounded-md border border-gray-200 text-sm shadow-sm outline-none focus:z-10 focus:border-green-400 focus:ring-green-400 w-full max-w-xs" onChange={formik.handleChange} value={formik.values.zip} />
                            {formik.touched.zip && formik.errors.zip && (
                                <span className="text-red-400 flex text-xs">
                                    {formik.errors.zip}
                                </span>
                            )}
                        </div>
                        <div className="form-control w-full md:w-8/12 max-w-xs mt-1">
                            <label className="label">
                                <span className="label-text"># Casa</span>
                            </label>
                            <input type="text" name="casa" placeholder="Type here" className="px-4 py-3 rounded-md border border-gray-200 text-sm shadow-sm outline-none focus:z-10 focus:border-green-400 focus:ring-green-400 w-full max-w-xs" onChange={formik.handleChange} value={formik.values.casa} />
                            {formik.touched.casa && formik.errors.casa && (
                                <span className="text-red-400 flex text-xs">
                                    {formik.errors.casa}
                                </span>
                            )}
                        </div>
                    </div>
                </div>                
                <PriceSummary />
                <button onClick={formik.handleSubmit} type="submit" className="mt-6 mb-8 w-full rounded-md bg-primary-80 px-6 py-3 font-medium text-white">Continuar con el pago</button> 
            </form>
        </div>
    )
}

export default Shipping;