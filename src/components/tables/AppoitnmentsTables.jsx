import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loader from "../main/Loader";
import AppointmentElement from "./AppointmentElement";

const AppointmentsTables = ()=>{
    
    const id = useSelector((state) => state.users.currentUser);
    const [appointments,setAppointments] = useState([])
    const [isLoading,setIsLoading] = useState(false)

    useEffect(()=>{
        getApps(id)
    },[id])

    useEffect(() => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, 2500);
    },[])

    const getApps = async (id)=>{
        await axios.get(`https://service-production-bb52.up.railway.app/api/cliente/appointment/client/${id}`)
        .then(response => {
            setAppointments(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }

    return(
        <div className='bg-gray-50 font-poppins'>
            <div className='w-full h-full px-2 py-4 mx-auto'>
                <div className=" drop-shadow-lg table-container">
                    <div className="flex-none w-full h-full max-w-full px-3 table-container">
                        <div className=" min-w-0 mb-6 break-words border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border ">
                            <div className="px-6 py-4 mb-0 bg-white border-b-0 border-b-solid rounded-2xl h-3gl">
                                <div className="px-4 overflow-x-auto md:overflow-y-auto md:max-h-[22rem]">
                                {isLoading ? <Loader /> : (
                                    appointments.length !== 0 ? (
                                        <table className="items-center w-full mb-0 align-top border-gray-200 text-slate-500">
                                            <thead className="align-bottom">
                                                <tr>
                                                    <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid whitespace-nowrap text-primary-100 opacity-80">#</th>
                                                    <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid whitespace-nowrap text-primary-100 opacity-80">Fecha</th>
                                                    <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid whitespace-nowrap text-primary-100 opacity-80">Hora</th>
                                                    <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid whitespace-nowrap text-primary-100 opacity-80">Servicio</th>
                                                    <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid  whitespace-nowrap text-primary-100 opacity-80">Especialidad</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {appointments.map((app,i) =>(
                                                    <AppointmentElement app={app} key={app.id} num={i+1}/>
                                                ))}
                                            </tbody>
                                        </table>
                                    ):(
                                        <p className="mt-3 text-center">No existen citas médicas asociadas</p>
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
export default AppointmentsTables;