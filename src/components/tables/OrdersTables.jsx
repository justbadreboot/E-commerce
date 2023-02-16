import OrderElement from "./OrderElement";
import Loader from "../main/Loader"
import { useSelector } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";

const OrdersTables =({setAction})=>{

    const id = useSelector((state) => state.users.currentUser)
    const token = JSON.parse(localStorage.getItem("token"))
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }

    const [ordenes,setOrdenes] = useState([])
    const [isLoading,setIsLoading] = useState(true)

    useEffect(()=>{
        getOrders(id)
    },[id])

    useEffect(() => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, 3000);
    },[])

    const getOrders = async (id)=>{
        await axios.get(`https://api-gateway-production-d841.up.railway.app/api/cliente/order/client/${id}`,config)
          .then(response => {
            setOrdenes(response.data)
          })
          .catch(error => {
            console.log(error)
          })
    }

    const modal = (id,nombre) =>{
       setAction(id,nombre)
    }

    return(
        <div className='bg-gray-50 font-poppins'>
            <div className='w-full h-full px-2 py-4 mx-auto'>
                <div className=" drop-shadow-lg table-container">
                    <div className="flex-none w-full h-full max-w-full px-3 table-container">
                        <div className=" min-w-0 mb-6 break-words border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border ">
                            <div className="px-6 py-4 mb-0 bg-white border-b-0 border-b-solid rounded-2xl h-3gl">
                                <div className="px-4 overflow-x-auto md:overflow-y-auto md:max-h-[30rem]">
                                {isLoading ? <Loader /> : (
                                    ordenes !== null ? (
                                        <table className=" items-center w-full mb-0 align-top border-gray-200 text-slate-500">
                                            <thead className="align-bottom">
                                                <tr>
                                                    <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid whitespace-nowrap text-primary-100 opacity-80">#</th>
                                                    <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid whitespace-nowrap text-primary-100 opacity-80">Fecha</th>
                                                    <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid whitespace-nowrap text-primary-100 opacity-80">Total</th>
                                                    <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid whitespace-nowrap text-primary-100 opacity-80">Estado</th>
                                                    <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid  whitespace-nowrap text-primary-100 opacity-80">Envío</th>
                                                    <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid whitespace-nowrap text-primary-100 opacity-80">Pago</th>
                                                    <th  className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid whitespace-nowrap text-primary-100 opacity-80"></th>
                                                </tr>
                                            </thead>
                                            <tbody>   
                                            {ordenes.map((orden,i) =>(
                                               <OrderElement orden={orden} key={orden.id} num={i+1} onAction={modal} />
                                            ))}
                                            </tbody>
                                        </table>
                                    ):(
                                        <p className="mt-3 text-center">No existen órdenes asociadas</p>
                                    )
                                )}   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default OrdersTables;