import axios from "axios";
import { useState } from "react";
import { FaEdit} from "react-icons/fa"
import Swal from "sweetalert2";
import { useGetAddressClientQuery, useUpdateAddressMutation } from "../../store/serverApi";
import AddressForm from "../forms/AddressForm";
import {MdClose} from "react-icons/md"
import { useSelector } from "react-redux";

const AddessCard = () =>{

    const id = useSelector((state) => state.users.currentUser);
    const [editAddress] = useUpdateAddressMutation()
    const {data: address, isSuccess} = useGetAddressClientQuery(id)

    const [isEditar, setIsEditar] = useState(false)
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

    const getAddress = async(id) =>{
        await axios.get(`https://client-production-d410.up.railway.app/api/private/direction/${id}`)
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
        if( temp !== 0){
            setVer(true)
            getAddress(temp)
        }
        else
            setVer(false)
    }

    const handleOnSubmit = async (e)=>{
        e.preventDefault()
        const res = await editAddress({ 
            idCliente: id,
            id:addID,
            city:ciudad,
            state:provincia,
            mainStreet:calle1,
            secondStreet:calle2,
            postalCode:zip,
            sector:sector,
            houseNumber:casa,
        })
        if(res.data){
            Toast.fire({ icon: 'success', title: 'Datos actualizados',background:'#D3FDDD'})
            setIsEditar(false)
        }
        else
            Toast.fire({ icon: 'error', title: 'Ocurrió un error. Intente de nuevo', background:'#FFDADA' })
    }

    return(
        <div className="mt-6 lg:mt-0 font-poppins w-full max-w-full px-4 py-3 bg-gray-100 rounded-2xl">
            <div className="relative flex flex-col h-full min-w-0 break-words shadow-soft-xl rounded-2xl bg-clip-border">
                <div className="px-6 pt-3 pb-0 mb-0 rounded-t-2xl">
                    <div className="flex ">
                        <div className="flex items-center max-w-full px-3 w-11/12 flex-none">
                            <h6 className="mb-0 text-lg font-semibold">Direcciones Asociadas</h6>
                        </div>
                        <div className="w-full max-w-full px-3 md:w-2/12 ">
                            <FaEdit onClick={()=> {setIsEditar(true)}} className={`w-5 h-5 cursor-pointer ${isEditar ? "hidden" : "block"}`} />
                            <MdClose onClick={()=> {setIsEditar(false)}} className={`w-5 h-5 cursor-pointer ${!isEditar ? "hidden" : "block"}`}/>
                        </div>
                    </div>
                </div>
                <div className="px-6 pt-3 pb-0 mb-3 rounded-t-2xl">
                    {isSuccess && (
                        address.length !== 0 ? (
                            <>
                                <select name="direcciones" className='w-full sm:w-9/12 md:w-11/12  mt-3 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-green-400 focus:ring-green-400 active:bg-green-100' onChange={handleOnChange} >
                                <option value={0}>Seleccione</option>
                                    {address.map( ad =>(
                                        <option key={ad.id} value={ad.id}>{ad.address}</option>
                                    ))}
                                </select>
                                {ver && (
                                    Object.entries(infoDireccion).length !== 0 && (
                                        <form  className="mb-3" onSubmit={handleOnSubmit}>
                                            <div className='grid grid-cols-1 md:grid-cols-2'>
                                                <div className="form-control w-full md:w-10/12 max-w-sm mt-1">
                                                    <label className="label">
                                                        <span className="label-text">Ciudad</span>
                                                    </label>
                                                    <input type="text" name="ciudad" placeholder="Ciudad" className={`px-4 py-3 rounded-md border border-gray-200 text-sm shadow-sm outline-none focus:z-10 focus:border-green-400 focus:ring-green-400 ${!isEditar && "bg-gray-200"}`} value={ciudad} onChange={(e) =>setCiudad(e.target.value)} disabled={!isEditar} />
                                                </div>
                                                <div className="form-control w-full md:w-10/12 max-w-sm mt-1">
                                                    <label className="label">
                                                        <span className="label-text">Provincia</span>
                                                    </label>
                                                    <input type="text" name="provincia" placeholder="Provincia" className={`px-4 py-3 rounded-md border border-gray-200 text-sm shadow-sm outline-none focus:z-10 focus:border-green-400 focus:ring-green-400 ${!isEditar && "bg-gray-200"}`} value={provincia} onChange={(e) =>setProvincia(e.target.value)} disabled={!isEditar} />
                                                </div>
                                            </div>
                                            <div className='grid grid-cols-1 md:grid-cols-2'>
                                                <div  className="form-control w-full md:w-10/12 max-w-sm mt-1">
                                                    <label className="label">
                                                        <span className="label-text">Calle Principal</span>
                                                    </label>
                                                    <input type="text" name="calle1" placeholder="Calle principal" className={`px-4 py-3 rounded-md border border-gray-200 text-sm shadow-sm outline-none focus:z-10 focus:border-green-400 focus:ring-green-400 w-full ${!isEditar && "bg-gray-200"}`} value={calle1} onChange={(e) =>setCalle1(e.target.value)} disabled={!isEditar} />
                                                </div>
                                                <div  className="form-control w-full md:w-10/12 max-w-sm mt-1">
                                                    <label className="label">
                                                        <span className="label-text">Calle Secundaria</span>
                                                    </label>
                                                    <input type="text" name="calle2" placeholder="Calle secundaria" className={`px-4 py-3 rounded-md border border-gray-200 text-sm shadow-sm outline-none focus:z-10 focus:border-green-400 focus:ring-green-400 w-full ${!isEditar && "bg-gray-200"}`} value={calle2} onChange={(e) =>setCalle2(e.target.value)} disabled={!isEditar} />
                                                </div>
                                            </div>
                                            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
                                                <div className="form-control w-full md:w-10/12 max-w-sm mt-1">
                                                    <label className="label">
                                                        <span className="label-text">Sector</span>
                                                    </label>
                                                    <input type="text" name="sector" placeholder="Sector" className={`px-4 py-3 rounded-md border border-gray-200 text-sm shadow-sm outline-none focus:z-10 focus:border-green-400 focus:ring-green-400 w-full ${!isEditar && "bg-gray-200"}`} value={sector} onChange={(e) =>setSector(e.target.value)} disabled={!isEditar} />
                                                </div>
                                                <div className="form-control w-full md:w-10/12 max-w-sm mt-1">
                                                    <label className="label">
                                                        <span className="label-text">Zip</span>
                                                    </label>
                                                    <input type="text" name="zip" placeholder="Zip" className={`px-4 py-3 rounded-md border border-gray-200 text-sm shadow-sm outline-none focus:z-10 focus:border-green-400 focus:ring-green-400 w-full ${!isEditar && "bg-gray-200"}`}  value={zip} onChange={(e) =>setZip(e.target.value)} disabled={!isEditar}  />
                                                </div>
                                                <div className="form-control w-full md:w-8/12 max-w-sm mt-1">
                                                    <label className="label">
                                                        <span className="label-text"># Casa</span>
                                                    </label>
                                                    <input type="text" name="casa" placeholder="Num" className={`px-4 py-3 rounded-md border border-gray-200 text-sm shadow-sm outline-none focus:z-10 focus:border-green-400 focus:ring-green-400 w-full ${!isEditar && "bg-gray-200"}`} value={casa} onChange={(e) =>setCasa(e.target.value)} disabled={!isEditar} />
                                                </div>
                                            </div>
                                            {isEditar && (
                                                <div className='grid sm:grid-cols-2 gap-4'>
                                                    <button onSubmit={handleOnSubmit} className="order-1 sm:order-2 mt-6 sm:mb-8 w-full rounded-md bg-primary-80 px-6 py-3 font-medium text-white">Actualizar</button>
                                                </div>
                                            )}
                                        </form>
                                    )
                                )}
                            </>
                        ): (
                            <>
                                <p className="text-sm mt-4 ml-8">No existen direcciones asociadas a este cliente. Agregue una nueva.</p>
                            </>
                        )
                    )}
                </div>
                {(isSuccess && address.length ===0 ) && (
                    <div className="flex-auto px-6 mt-3">
                        <AddressForm />
                    </div>
                )}
            </div>
        </div>
    )
}
export default AddessCard;