import { useContext, useState } from "react";
import PriceSummary from './PriceSummary'
import { FormContext } from "../../pages/CheckoutPage"
import { useFormik } from "formik";
import * as Yup from "yup";
import { useGetAddressClientQuery } from "../../store/serverApi";

const Shipping = ({envio,total,subtotal})=>{
    const { activeStep, setActiveStep, formData, setFormData } = useContext(FormContext);

    const [isChecked, setIsChecked] = useState(false)

    const id = JSON.parse(localStorage.getItem('currentUser'))
    const {data: address, isSuccess} = useGetAddressClientQuery(id)

    const shippingSchema = Yup.object().shape({
        ciudad: Yup.string().required("Este campo es requerido"),
        provincia: Yup.string().required("Este campo es requerido"),
        calle1: Yup.string().required("Este campo es requerido"),
        calle2: Yup.string().required("Este campo es requerido"),
        zip: Yup.string().required("Este campo es requerido"),
        casa: Yup.string().required("Este campo es requerido"),
        sector:Yup.string().required("Este campo es requerido")
	});

    const formik = useFormik({
		initialValues: {
			ciudad: formData.ciudad,
            provincia: formData.provincia,
            calle1: formData.calle1,
            calle2: formData.calle2,
            zip: formData.zip,
            casa: formData.casa,
            sector: formData.sector
		},
		validationSchema: shippingSchema,
		onSubmit: (values) => {
            const data = { ...formData, ...values };
            setFormData(data);
            setActiveStep(activeStep + 1);
		},
	});

    const handleOnClick =()=>{
        setFormData({...formData});
        setActiveStep(activeStep + 1);
    }

    return(
        <div className="mt-4 bg-gray-50 px-4 pt-8 lg:mt-0 font-poppins">
            <p className="text-xl font-medium">Datos para el Envío</p>
            <p className="text-gray-400 mt-2">Completa tu orden llenando los datos para el envío de tus productos.</p>
            {!isChecked ? (
                <>
                    <div className="py-2">
                    </div>
                    <div className="m-2 flex items-center space-x-3">
                        <input type="checkbox" onChange={()=> setIsChecked(!isChecked)} checked={isChecked} className="form-checkbox h-4 w-4 border-gray-300 rounded text-green-400 focus:ring-green-500" />
                        <span className="text-sm text-gray-400">Deseo agregar una nueva dirección de envío</span>
                    </div>                
                    <PriceSummary subtotal={subtotal} envio={envio} total={total} />
                    <div className='grid sm:grid-cols-2 gap-4'>
                        <button className="order-2 sm:order-1 sm:mt-6 sm:mb-8 w-full rounded-md bg-primary-40 px-6 py-3 font-medium text-white" onClick={()=> (setActiveStep(activeStep -1))}>Regresar</button>
                        <button onClick={()=> handleOnClick()} className="order-1 sm:order-2 mt-6 sm:mb-8 w-full rounded-md bg-primary-80 px-6 py-3 font-medium text-white">Continuar con el pago</button>
                    </div>
                </>
            ) : (
                <form onSubmit={formik.handleSubmit}>
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
                                <input type="text" name="casa" placeholder="Num" className="px-4 py-3 rounded-md border border-gray-200 text-sm shadow-sm outline-none focus:z-10 focus:border-green-400 focus:ring-green-400 w-full max-w-xs" onChange={formik.handleChange} value={formik.values.casa} />
                                {formik.touched.casa && formik.errors.casa && (
                                    <span className="text-red-400 flex text-xs">
                                        {formik.errors.casa}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="m-2 flex items-center space-x-3">
                        <input type="checkbox" onChange={()=> setIsChecked(!isChecked)} checked={isChecked} className="form-checkbox h-4 w-4 border-gray-300 rounded text-green-400 focus:ring-green-500" />
                        <span className="text-sm text-gray-400">Deseo agregar una nueva dirección de envío</span>
                    </div>                
                    <PriceSummary subtotal={subtotal} envio={envio} total={total} />
                    <div className='grid sm:grid-cols-2 gap-4'>
                        <button className="order-2 sm:order-1 sm:mt-6 sm:mb-8 w-full rounded-md bg-primary-40 px-6 py-3 font-medium text-white" onClick={()=> (setActiveStep(activeStep -1))}>Regresar</button>
                        <button onSubmit={formik.handleSubmit} type="submit" className="order-1 sm:order-2 mt-6 sm:mb-8 w-full rounded-md bg-primary-80 px-6 py-3 font-medium text-white">Continuar con el pago</button>
                    </div>
                </form>
            )}
        </div>
    )
}

export default Shipping;