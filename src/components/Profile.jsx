import { useState } from "react"
import AddessCard from "./cards/AddressCard"
import ProfileCard from "./cards/ProfileCard"
import OrderDetails from "./modals/OrderDetails"
import AppointmentsTables from "./tables/AppoitnmentsTables"
import OrdersTables from "./tables/OrdersTables"

const Profile =() =>{

    const [id,setId] = useState(0)
    const leerID = (id)=>{
        setId(id)
    }

    return(
        <div className="font-poppins w-full p-8 mx-auto">
            <h1 className="mb-5 text-2xl font-bold text-gray-700">
                <span className="text-primary-100">Mi </span>Perfil </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8">
                <ProfileCard />
                <AddessCard />
            </div>
            <div className="mt-8">
                <h1 className="mb-4 text-xl font-bold text-gray-700">Historial de
                <span className="text-primary-100"> Órdenes</span> de Compras </h1> 
                <OrdersTables setAction={leerID} />
                <OrderDetails ordenID={id} />
            </div>
            <div className="mt-8">
                <h1 className="mb-4 text-xl font-bold text-gray-700">Historial de
                <span className="text-primary-100"> Citas</span> médicas</h1> 
                <AppointmentsTables />
            </div>
        </div>
    )

}
export default Profile