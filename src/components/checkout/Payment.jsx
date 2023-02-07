import { useContext, useState } from "react";
import PriceSummary from './PriceSummary'
import { FormContext } from "../../pages/CheckoutPage"
import { useFormik } from "formik";
import Swal from 'sweetalert2';
import { useAddNewAddressMutation, useAddNewClientMutation, useAddNewOrderMutation, useGetClientByDocumentQuery } from "../../store/serverApi";
import * as Yup from "yup";
import { deleteCartItem } from "../../helpers/cartActions";

const Payment = ({envio,total,subtotal})=>{

    //const navigate = useNavigate()
    const { activeStep, setActiveStep, formData, setFormData, cartItems } = useContext(FormContext);
    const {data: cliente, isError} = useGetClientByDocumentQuery(formData.ident)
    const [addNewPost] = useAddNewClientMutation()
    const [addNewAddress] = useAddNewAddressMutation()
    const [addNewOrder] = useAddNewOrderMutation()

    const [selectedOption, setSelectedOption] = useState("tarjeta")
    
    const meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]

    const paymentSchema = Yup.object().shape({
        nombreTarjeta: Yup.string().required("Este campo es requerido"),
        numTarjeta:Yup.number().typeError('Solo dígitos').min(12).required("Este campo es requerido"),
        yearTarjeta:Yup.number().typeError('Solo dígitos').integer("Debe ser entero").min(4, '4 dígitos').required("Este campo es requerido"),
        cvv:Yup.number().typeError('Solo dígitos').integer("Debe ser entero").min(3,"3 dígitos").required("Este campo es requerido"),
        mesTarjeta: Yup.number().required("Seleccione un mes")
	});

    const formik = useFormik({
		initialValues: {
            nombreTarjeta:"",
            numTarjeta:"",
            yearTarjeta:"",
            cvv:"",
            mesTarjeta:""
		},
		validationSchema: paymentSchema,
		onSubmit: (values) => {
            const data = { ...formData, ...values };
            setFormData(data)
            Swal.fire({
                title: '¿Desea continuar?',
                text: "Se le debitará de su tarjeta el valor total de la compra",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#28a745',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, continuar',
                cancelButtonText:"Cancelar",
                reverseButtons:true
            }).then((result) => {
                if (result.isConfirmed) {
                    generarPago()
                    Swal.fire(
                    'Orden Generada!',
                    'Su pago se ha realizado con éxito.',
                    'success'
                    )
                }
            })
		},
	});

    const pagoEfectivo = ()=>{
        Swal.fire({
            title: '¿Desea continuar?',
            text: "El pago deberá ser cancelado al momento de la entrega de su orden.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#28a745',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, continuar',
            cancelButtonText:"Cancelar",
            reverseButtons:true
        }).then((result) => {
            if (result.isConfirmed) {
                generarPago()
                Swal.fire(
                    'Orden Generada!',
                    'Su pedido se encuentra en camino',
                    'success'
                )
            }
        })
    }

    const generarPago = ()=>{
        let pagoID = 0
        let pagoState =""
        const hoy = Date.now()
        const fecha = new Date(hoy)
        let detalles = []
        cartItems.map( item =>{
            const detalle ={
                id: item.id,
                amount: item.cantidad,
                price: item.precio,
                name: item.nombre
            }
            detalles.push(detalle)
            return detalles
        })
        if(selectedOption === "tarjeta"){
            pagoID = 1
            pagoState ="Pago efectuado"
        }   
        else{
            pagoID = 2
            pagoState ="Pago pendiente"
        }
        if(isError)
            crearCliente()
        //crearDireccion()
        addNewOrder({
            date: fecha.toISOString(),
            deliveryState: {
                id:1,
                state:"Por entregar"
            },
            idClient: cliente.id,
            orderDetails: detalles,
            orderState: {
                id:1,
                state:'En curso'
            },
            paymentState: {
                id:pagoID,
                state:pagoState
            },
            subtotal:parseFloat(subtotal),
            total:parseFloat(total),
        })
        vaciarCarrito()
    }

    const vaciarCarrito =()=>{
        cartItems.map(item =>(
            deleteCartItem("dani",item.id)
        ))
    }

    const crearCliente = () =>{
        addNewPost({ 
            document: formData.ident,
            firstName: formData.nombre,
            lastName: formData.apellido,
            phone: formData.telf
        })
    }

    const crearDireccion = ()=>{
        addNewAddress({
            id: cliente.id,
            city: formData.ciudad,
            state: formData.provincia,
            mainStreet: formData.calle1,
            secondStreet: formData.calle2,
            postalCode: formData.zip,
            sector: formData.sector,
            houseNumber: formData.casa,
        })        
    }

    return(
        <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0 font-poppins">
            <p className="text-xl font-medium">Datos de Pago</p>
            <p className="text-gray-400 mt-2">Llene los datos para completar su orden</p>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <p className="mt-8 text-md font-medium font-poppins">Métodos de pago</p>
                    <div className="mt-5 grid gap-6 grid-cols-1 sm:grid-cols-2">
                        <div className="relative w-full">
                            <input className="peer hidden" id="radio_1" type="radio" name="radio" value="tarjeta" onChange={(e)=> setSelectedOption(e.target.value)} checked={selectedOption==="tarjeta"} />
                            <span className="peer-checked:border-green-500 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                            <label className="peer-checked:border-2 peer-checked:border-green-500 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" htmlFor="radio_1">
                                <div className="ml-5">
                                    <span className="mt-2 font-semibold">Tarjeta de Crédito</span>
                                </div>
                            </label>
                        </div>
                        <div className="relative w-full">
                            <input className="peer hidden" id="radio_2" type="radio" name="radio" value="efectivo" onChange={(e)=> setSelectedOption(e.target.value)} checked={selectedOption==="efectivo"} />
                            <span className="peer-checked:border-green-500 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                            <label className="peer-checked:border-2 peer-checked:border-green-500 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" htmlFor="radio_2">
                                <div className="ml-5">
                                    <span className="mt-2 font-semibold">Efectivo</span>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
                {(selectedOption === "tarjeta") ? (
                    <>
                        <label className="mt-4 mb-2 block text-sm font-medium">Titular de la tarjeta</label>
                        <div className="relative">
                            <input type="text" name="nombreTarjeta" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-green-400 focus:ring-green-400" placeholder="Nombre Completo" onChange={formik.handleChange} value={formik.values.nombreTarjeta} />
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
                                <select name="mesTarjeta" value={formik.values.mesTarjeta} onChange={formik.handleChange} className='w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-green-400 focus:ring-green-400 active:bg-green-100' >
                                    <option value={""}>Seleccione</option>
                                    {meses.map( (mes,i) =>(
                                        <option key={i} value={i}>{mes}</option>
                                    ))}
                                </select>
                                {formik.touched.mesTarjeta && formik.errors.mesTarjeta && (
                                    <span className="text-red-400 flex text-xs">
                                        {formik.errors.mesTarjeta}
                                    </span>
                                )}
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
                    </>
                    ): (
                        <div className='mt-4'>
                            <p className='text-sm text-gray-500'>Valor a cancelar cuando el pedido sea entregado</p>
                        </div>
                )}
            
            <PriceSummary subtotal={subtotal} envio={envio} total={total} />
            <div className='grid sm:grid-cols-2 gap-4'>
                <button className="order-2 sm:order-1 sm:mt-6 sm:mb-8 w-full rounded-md bg-primary-40 px-6 py-3 font-medium text-white" onClick={()=> (setActiveStep(activeStep -1))}>Regresar</button>
                {(selectedOption === 'tarjeta')? (
                    <button onSubmit={formik.handleSubmit} type="submit" className="order-1 sm:order-2 mt-6 sm:mb-8 w-full rounded-md bg-primary-80 px-6 py-3 font-medium text-white">Confirmar Pago</button>
                ): (
                    <button onClick={pagoEfectivo}  className="order-1 sm:order-2 mt-6 sm:mb-8 w-full rounded-md bg-primary-80 px-6 py-3 font-medium text-white">Confirmar Orden</button>
                )}
            </div>
            </form>
        </div>
    )
}
export default Payment;