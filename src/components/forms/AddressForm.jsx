import { useFormik } from "formik";
import Swal from "sweetalert2";
import * as Yup from "yup";
import { useAddNewAddressMutation } from "../../store/serverApi";

const AddressForm =() => {

    const id = JSON.parse(localStorage.getItem('currentUser'))
    const [addNewAddress] = useAddNewAddressMutation()

    const shippingSchema = Yup.object().shape({
        ciudad: Yup.string().required("Este campo es requerido"),
        provincia: Yup.string().required("Este campo es requerido"),
        calle1: Yup.string().required("Este campo es requerido"),
        calle2: Yup.string().required("Este campo es requerido"),
        zip: Yup.string().required("Este campo es requerido"),
        casa: Yup.string().required("Este campo es requerido"),
        sector:Yup.string().required("Este campo es requerido")
    });
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
        onSubmit: async (values) => {
            const res = await addNewAddress({
                id: id,
                city: values.ciudad,
                state: values.provincia,
                mainStreet: values.calle1,
                secondStreet: values.calle2,
                postalCode: values.zip,
                sector: values.sector,
                houseNumber: values.casa,
            })
            if(res.data){
                Toast.fire({ icon: 'success', title: 'Dirección Registrada',background:'#D3FDDD'})
                formik.resetForm()
            }
            else
                Toast.fire({ icon: 'error', title: 'Ocurrió un error. Intente de nuevo', background:'#FFDADA' })
        },
    });
    
    return(
        <form onSubmit={formik.handleSubmit}>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className="form-control w-full md:w-10/12 max-w-sm mt-1">
                    <label className="label">
                        <span className="label-text">Ciudad</span>
                    </label>
                    <input type="text" name="ciudad" placeholder="Ciudad" className="px-4 py-3 rounded-md border border-gray-200 text-sm shadow-sm outline-none focus:z-10 focus:border-green-400 focus:ring-green-400" onChange={formik.handleChange} value={formik.values.ciudad}  />
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
                    <input type="text" name="provincia" placeholder="Provincia" className="px-4 py-3 rounded-md border border-gray-200 text-sm shadow-sm outline-none focus:z-10 focus:border-green-400 focus:ring-green-400" onChange={formik.handleChange} value={formik.values.provincia}  />
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
                    <input type="text" name="calle1" placeholder="Calle principal" className="px-4 py-3 rounded-md border border-gray-200 text-sm shadow-sm outline-none focus:z-10 focus:border-green-400 focus:ring-green-400 w-full" onChange={formik.handleChange} value={formik.values.calle1}  />
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
                    <input type="text" name="calle2" placeholder="Calle secundaria" className="px-4 py-3 rounded-md border border-gray-200 text-sm shadow-sm outline-none focus:z-10 focus:border-green-400 focus:ring-green-400 w-full" onChange={formik.handleChange} value={formik.values.calle2}  />
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
                    <input type="text" name="sector" placeholder="Sector" className="px-4 py-3 rounded-md border border-gray-200 text-sm shadow-sm outline-none focus:z-10 focus:border-green-400 focus:ring-green-400 w-full" onChange={formik.handleChange} value={formik.values.sector}  />
                    {formik.touched.sector && formik.errors.sector && (
                        <span className="text-red-400 flex text-xs">
                            {formik.errors.sector}
                        </span>
                    )}
                </div>
                <div className="form-control w-full md:w-10/12 max-w-sm mt-1">
                    <label className="label">
                        <span className="label-text">Zip</span>
                    </label>
                    <input type="text" name="zip" placeholder="Zip" className="px-4 py-3 rounded-md border border-gray-200 text-sm shadow-sm outline-none focus:z-10 focus:border-green-400 focus:ring-green-400 w-full" onChange={formik.handleChange} value={formik.values.zip}  />
                    {formik.touched.zip && formik.errors.zip && (
                        <span className="text-red-400 flex text-xs">
                            {formik.errors.zip}
                        </span>
                    )}
                </div>
                <div className="form-control w-full md:w-8/12 max-w-sm mt-1">
                    <label className="label">
                        <span className="label-text"># Casa</span>
                    </label>
                    <input type="text" name="casa" placeholder="Num" className="px-4 py-3 rounded-md border border-gray-200 text-sm shadow-sm outline-none focus:z-10 focus:border-green-400 focus:ring-green-400 w-full" onChange={formik.handleChange} value={formik.values.casa}  />
                    {formik.touched.casa && formik.errors.casa && (
                        <span className="text-red-400 flex text-xs">
                            {formik.errors.casa}
                        </span>
                    )}
                </div>
            </div>
            <div className='grid sm:grid-cols-2 gap-4'>
                <button onSubmit={formik.handleSubmit} type="submit" className="order-1 sm:order-2 mt-6 sm:mb-8 w-full rounded-md bg-primary-80 px-6 py-3 font-medium text-white">Registrar</button>
            </div>
        </form>
    )

}
export default AddressForm