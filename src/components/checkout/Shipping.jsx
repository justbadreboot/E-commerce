import { useContext, useEffect, useState } from "react";
import PriceSummary from './PriceSummary'
import { FormContext } from "../../pages/CheckoutPage"
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useSelector } from "react-redux";
import Loader from "../main/Loader";

const Shipping = ({envio,total,subtotal})=>{
    const { activeStep, setActiveStep, formData, setFormData } = useContext(FormContext);

    const [isChecked, setIsChecked] = useState(false)
    const [infoDireccion, setInfoDireccion] = useState({})
    const [ciudad,setCiudad] = useState("")
    const [zip,setZip] = useState("")
    const [calle1,setCalle1] = useState("")
    const [calle2,setCalle2] = useState("")
    const [provincia,setProvincia] = useState("")
    const [sector,setSector] = useState("")
    const [casa,setCasa] = useState("")
    const [addID,setAddID] = useState(0)
    const [ver,setVer] = useState(false)
    const [address,setAddress] = useState([])
    const [isLoading,setIsLoading] = useState(false)

    const id = useSelector((state) => state.users.currentUser);
    const token = JSON.parse(localStorage.getItem("token"))
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }

    useEffect(()=>{
        getListAddress(id)
    },[id])

    useEffect(() => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, 2000);
    },[])
    
    const getListAddress = async(id) =>{
        await axios.get(`https://api-gateway-production-d841.up.railway.app/api/cliente/client/${id}/direction/custom`,config)
        .then(response => {
            setAddress(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }

    const getAddress = async(id) =>{
        await axios.get(`https://api-gateway-production-d841.up.railway.app/api/cliente/direction/${id}`,config)
        .then(response => {
            setInfoDireccion(response.data)
            setCiudad(response.data.city)
            setZip(response.data.postalCode)
            setCalle1(response.data.mainStreet)
            setCalle2(response.data.secondStreet)
            setProvincia(response.data.state)
            setSector(response.data.sector)
            setCasa(response.data.houseNumber)
            setAddID(response.data.id)
        })
        .catch(error => {
            console.log(error)
        })
    }

    const handleOnChange =(e) =>{
        let temp = parseInt(e.target.value)
        if(temp !==0){
            setVer(true)
            getAddress(temp)
        }
        else
            setVer(false)
    }

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
            const temp = {
                setNuevaDireccion: true,
            }
            const data = { ...formData, ...values,...temp} 
            setFormData(data);
            setActiveStep(activeStep + 1);
		},
	});

    const handleOnClick =()=>{
        const values ={
            idDireccion: addID,
            setNuevaDireccion: false,
        }
        const data = {...formData,...values}
        setFormData(data)
        setActiveStep(activeStep + 1);
    }

    return(
        <div className="mt-4 bg-gray-50 px-4 pt-8 lg:mt-0 font-poppins">
            <p className="text-xl font-medium">Datos para el Envío</p>
            <p className="text-gray-400 mt-2">Completa tu orden llenando los datos para el envío de tus productos.</p>
            {!isChecked ? (
                <>
                    <div className="py-2">
                    {isLoading ? <Loader /> : (
                        address.length !== 0 ? (
                            <>
                                <select name="direcciones" className='w-full sm:w-9/12 md:w-11/12  mt-3 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-green-400 focus:ring-green-400 active:bg-green-100' onChange={handleOnChange} >
                                <option value={0}>Seleccione la dirección</option>
                                    {address.map( ad =>(
                                        <option key={ad.id} value={ad.id}>{ad.address}</option>
                                    ))}
                                </select>
                                {(Object.entries(infoDireccion).length !== 0 && ver) && (
                                    <div className="mt-3">
                                        <p className="font-semibold text-gray-600 mb-2">Ciudad: 
                                            <span className="font-medium text-gray-600"> {ciudad}</span>
                                        </p>
                                        <p className="font-semibold text-gray-600 mb-2">Provincia: 
                                            <span className="font-medium text-gray-600"> {provincia}</span>
                                        </p>
                                        <p className="font-semibold text-gray-600 mb-2">Calle Principal: 
                                            <span className="font-medium text-gray-600"> {calle1}</span>
                                        </p>
                                        <p className="font-semibold text-gray-600 mb-2">Calle Secundaria: 
                                            <span className="font-medium text-gray-600"> {calle2}</span>
                                        </p>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-2">
                                            <p className="font-semibold text-gray-600">Sector: 
                                                <span className="font-medium text-gray-600"> {sector}</span>
                                            </p>
                                            <p className="font-semibold text-gray-600">Zip: 
                                                <span className="font-medium text-gray-600"> {zip}</span>
                                            </p>
                                            <p className="font-semibold text-gray-600"># Casa: 
                                                <span className="font-medium text-gray-600"> {casa}</span>
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </>
                        ): (
                            <>
                                <p className="text-sm mt-4 ml-8">No existen direcciones asociadas a este cliente</p>
                            </>
                        )
                    )}
                    </div>
                    <div className="m-2 flex items-center space-x-3">
                        <input type="checkbox" onChange={()=> setIsChecked(!isChecked)} checked={isChecked} className="form-checkbox h-4 w-4 border-gray-300 rounded text-green-400 focus:ring-green-500" />
                        <span className="text-sm text-gray-400">Deseo agregar una nueva dirección de envío</span>
                    </div>                
                    <PriceSummary subtotal={subtotal} envio={envio} total={total} />
                    <div className='grid sm:grid-cols-2 gap-4'>
                        <button className="order-2 sm:order-1 sm:mt-6 sm:mb-8 w-full rounded-md bg-primary-40 px-6 py-3 font-medium text-white" onClick={()=> (setActiveStep(activeStep -1))}>Regresar</button>
                        <button onClick={()=> handleOnClick()} className={`order-1 sm:order-2 mt-6 sm:mb-8 w-full rounded-md bg-primary-80 px-6 py-3 font-medium text-white`} disabled={!ver}>Continuar con el pago</button>
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