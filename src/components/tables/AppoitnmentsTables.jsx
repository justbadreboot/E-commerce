import { useGetAppointmentsByClientQuery } from "../../store/serverApi";
import AppointmentElement from "./AppointmentElement";

const AppointmentsTables = ()=>{
    
    const id = JSON.parse(localStorage.getItem('currentUser'))
    const {data: appointments ,isSuccess} = useGetAppointmentsByClientQuery(id)

    return(
        <div className='bg-gray-50 font-poppins'>
            <div className='w-full h-full px-2 py-4 mx-auto'>
                <div className=" drop-shadow-lg table-container">
                    <div className="flex-none w-full h-full max-w-full px-3 table-container">
                        <div className=" min-w-0 mb-6 break-words border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border ">
                            <div className="px-6 py-4 mb-0 bg-white border-b-0 border-b-solid rounded-2xl h-3gl">
                                <div className="px-4 overflow-x-auto ">
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
                                            {isSuccess && (
                                                appointments.map((app,i) =>(
                                                    <AppointmentElement app={app} key={app.id} num={i+1}/>
                                                ))
                                            )}
                                        </tbody>
                                    </table>
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