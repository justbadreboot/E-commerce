import axios from "axios";  
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import OrderDetailSummary from "../checkout/OrderDetailSummary";

const OrderDetails = ({ordenID,nombre}) =>{

    const user = useSelector((state) => state.users.currentUser);
    const [address,setAddress] = useState({})
    const [client, setClient] = useState({})
    const [orden, setOrden] = useState([])
    const [detalles,setDetalles] = useState([])

    useEffect(()=>{
        const getOrder = async (id) =>{
            await axios.get(`https://order-production-bfbc.up.railway.app/api/cliente/order/${id}`)
            .then(response => {
                setOrden(response.data)
                getAddress(response.data.idAddress)
                setDetalles(response.data.orderDetails)
            })
            .catch(error => {
                console.log(error)
            })
        }
        
        getOrder(ordenID)
    },[ordenID])

    useEffect( () =>{
        getClientnfo(user)
    },[user])
   
  
    const getClientnfo = async(id) =>{
        await axios.get(`https://client-production-d410.up.railway.app/api/private/client/${id}`)
        .then(response => {
            setClient(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }

    const getAddress = async(id) =>{
        await axios.get(`https://client-production-d410.up.railway.app/api/private/direction/${id}`)
        .then(response => {
            setAddress(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }

    return(
        <>
            <input type="checkbox" id={ordenID} className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-10/12 lg:w-6/12 max-w-5xl overflow-y-auto">
                    <div className="text-center text-lg font-semibold capitalize text-gray-600">
                        {nombre === 'Orden' ? (
                            <h2>Detalles de la Orden #{orden.id}</h2>
                        ) : (
                            <h2>Factura</h2>
                        )}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 mt-4">
                        <div>
                            <h2 className="text-base-80 font-semibold">Datos de factura</h2>
                            {orden.clientName !=="" ? (
                                <div className="mt-2">
                                    <p className="text-primary-100">Nombre: <span className="text-gray-400">{orden.clientName} {orden.clientLastName}</span></p>
                                    <p className="text-primary-100">Identificación: <span className="text-gray-400">{orden.clientDocument}</span></p>
                                    <p className="text-primary-100">Teléfono: <span className="text-gray-400">{orden.clientPhone}</span></p>
                                </div>
                            ) : (
                                <div className="mt-2">
                                    <p className="text-primary-100">Nombre: <span className="text-gray-400">{client.firstName} {client.lastName}</span></p>
                                    <p className="text-primary-100">Identificación: <span className="text-gray-400">{client.document}</span></p>
                                    <p className="text-primary-100">Teléfono: <span className="text-gray-400">{client.phone}</span></p>
                                </div>
                            )}
                            <h2 className="text-base-80 font-semibold mt-3">Dirección</h2>
                            <div>
                                <p className="text-primary-100">Ciudad: <span className="text-gray-400">{address.city}</span></p>
                                <p className="text-primary-100">Provincia: <span className="text-gray-400">{address.state}</span></p>
                                <p className="text-primary-100">Calle Principal: <span className="text-gray-400">{address.mainStreet}</span></p>
                                <p className="text-primary-100">Calle Secundaria: <span className="text-gray-400">{address.secondStreet}</span></p>
                                <p className="text-primary-100">Sector: <span className="text-gray-400">{address.sector}</span></p>
                                <p className="text-primary-100">Código Postal: <span className="text-gray-400">{address.postalCode}</span></p>
                                <p className="text-primary-100"># de Casa: <span className="text-gray-400">{address.houseNumber}</span></p>
                            </div>
                        </div>
                        <div className="mt-4 md:mt-0">
                            <h2 className="text-base-80 font-semibold ">Detalles de Compra</h2>
                                <div className="mt-3 rounded-lg border bg-white px-2 sm:px-6 md:overflow-y-auto md:max-h-72">
                                    {detalles.map( item =>
                                        <OrderDetailSummary item={item} key={item.id} />
                                    )}
                            </div>
                        </div>
                        <div>
                            <h2 className="text-base-80 font-semibold mt-3">Total: 
                            <span className="text-gray-700"> ${orden.total}</span></h2>
                        </div>
                    </div>
                    <div className="modal-action">
                        <label htmlFor={ordenID} className="btn btn-sm bg-error-100 border-none">Cerrar</label>
                    </div>
                </div>
            </div>
        </>
    )
}
export default OrderDetails;