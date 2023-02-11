import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { FaEdit} from "react-icons/fa"

const AddessCard = () =>{

    const [isEditar, setIsEditar] = useState(false)

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
			ciudad: "",
            provincia: "",
            calle1: "",
            calle2: "",
            zip: "",
            casa: "",
            sector: ""
		},
		validationSchema: shippingSchema,
		onSubmit: (values) => {
		},
	});

    return(
        <div className="font-poppins w-full max-w-full px-4 py-3 bg-gray-100 rounded-2xl">
            <div className="relative flex flex-col h-full min-w-0 break-words shadow-soft-xl rounded-2xl bg-clip-border">
                <div className="px-6 pt-3 pb-0 mb-0 rounded-t-2xl">
                    <div className="flex ">
                        <div className="flex items-center max-w-full px-3 shrink-0 w-11/12 md:flex-none">
                            <h6 className="mb-0 text-lg font-semibold">Dirección Principal</h6>
                        </div>
                        <div className="w-full max-w-full px-3 shrink-0 md:w-2/12 md:flex-none">
                            <FaEdit onClick={()=> {setIsEditar(true)}} className={`w-5 h-5 cursor-pointer ${isEditar ? "hidden" : "block"}`} />
                        </div>
                    </div>
                </div>
                <div className="flex-auto px-6 mt-4">
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
                            <div className='grid grid-cols-1 md:grid-cols-2'>
                                <div  className="form-control w-full md:w-10/12 max-w-sm mt-1">
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
                                <div  className="form-control w-full md:w-10/12 max-w-sm mt-1">
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
                        {isEditar && (
                            <div className='grid sm:grid-cols-2 gap-4'>
                                <button onSubmit={formik.handleSubmit} type="submit" className="order-1 sm:order-2 mt-6 sm:mb-8 w-full rounded-md bg-primary-80 px-6 py-3 font-medium text-white">Guardar</button>
                            </div>
                        )} 
                    </form>
                </div>
            </div>
        </div>
    )
}
export default AddessCard;